import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} é obrigatório.`;
      }
      if (field.errors['email']) {
        return 'Por favor, insira um email válido.';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} deve ter pelo menos ${requiredLength} caracteres.`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels = {
      'name': 'Nome',
      'email': 'Email',
      'subject': 'Assunto',
      'message': 'Mensagem'
    };
    return labels[fieldName as keyof typeof labels] || fieldName;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Simular envio (você pode integrar com um serviço real de email)
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.';
        this.contactForm.reset();

        // Limpar mensagem após 5 segundos
        setTimeout(() => {
          this.submitMessage = '';
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
