import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declaração global para PDF.js carregado via CDN
declare const pdfjsLib: any;

@Component({
  selector: 'app-pdf-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pdf-preview-container">
      <canvas
        #pdfCanvas
        [class.loading]="isLoading"
        [class.error]="hasError"
      ></canvas>

      <div class="loading-overlay" *ngIf="isLoading">
        <i class="fas fa-spinner fa-spin"></i>
        <span>Carregando preview...</span>
      </div>

      <div class="error-overlay" *ngIf="hasError">
        <i class="fas fa-file-pdf"></i>
        <span>PDF</span>
      </div>
    </div>
  `,
  styles: [`
    .pdf-preview-container {
      position: relative;
      width: 100%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      overflow: hidden;
    }

    canvas {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: opacity 0.3s ease;

      &.loading {
        opacity: 0;
      }

      &.error {
        display: none;
      }
    }

    .loading-overlay,
    .error-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: rgba(245, 245, 245, 0.95);
    }

    .loading-overlay {
      i {
        font-size: 2rem;
        color: var(--primary-color);
      }

      span {
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
    }

    .error-overlay {
      i {
        font-size: 4rem;
        color: #e74c3c;
        opacity: 0.8;
      }

      span {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-secondary);
      }
    }
  `]
})
export class PdfPreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() pdfPath!: string;
  @Input() pageNumber: number = 1;
  @ViewChild('pdfCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  isLoading = true;
  hasError = false;
  private renderTask: any = null;
  private scriptLoaded = false;

  ngOnInit(): void {
    if (!this.pdfPath) {
      this.hasError = true;
      this.isLoading = false;
    }
  }

  async ngAfterViewInit(): Promise<void> {
    if (this.pdfPath && this.canvas) {
      await this.ensurePdfJsLoaded();
      if (this.scriptLoaded) {
        this.loadPdf();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.renderTask) {
      this.renderTask.cancel();
    }
  }

  private async ensurePdfJsLoaded(): Promise<void> {
    // Verifica se já está carregado
    if (typeof pdfjsLib !== 'undefined') {
      this.scriptLoaded = true;
      return;
    }

    try {
      // Carrega o script do PDF.js do CDN
      await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');

      // Configura o worker
      if (typeof pdfjsLib !== 'undefined') {
        (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        this.scriptLoaded = true;
      }
    } catch (error) {
      console.error('Erro ao carregar PDF.js:', error);
      this.hasError = true;
      this.isLoading = false;
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Falha ao carregar script: ${src}`));
      document.head.appendChild(script);
    });
  }

  private async loadPdf(): Promise<void> {
    try {
      this.isLoading = true;
      this.hasError = false;

      // Carrega o PDF
      const loadingTask = pdfjsLib.getDocument(this.pdfPath);
      const pdf = await loadingTask.promise;

      // Pega a primeira página
      const page = await pdf.getPage(this.pageNumber);

      // Prepara o canvas
      const canvas = this.canvas.nativeElement;
      const context = canvas.getContext('2d');

      if (!context) {
        throw new Error('Contexto 2D não disponível');
      }

      // Obtém viewport inicial para detectar orientação
      const initialViewport = page.getViewport({ scale: 1 });

      // Detecta se o PDF está em retrato (portrait) e precisa rotacionar para paisagem
      // Se altura > largura, está em retrato
      let rotation = initialViewport.rotation || 0;
      const isPortrait = initialViewport.height > initialViewport.width;

      // Se está em retrato, rotaciona 90 graus para transformar em paisagem
      if (isPortrait) {
        rotation = 90;
      }

      // Define escala para caber no container (180px de altura do card)
      const containerHeight = 180;
      const viewport = page.getViewport({ scale: 1, rotation });
      const scale = containerHeight / viewport.height;
      const scaledViewport = page.getViewport({ scale, rotation });

      // Configura dimensões do canvas
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      // Renderiza a página
      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport
      };

      this.renderTask = page.render(renderContext);
      await this.renderTask.promise;

      this.isLoading = false;
    } catch (error) {
      console.error('Erro ao carregar PDF preview:', error);
      this.hasError = true;
      this.isLoading = false;
    }
  }
}
