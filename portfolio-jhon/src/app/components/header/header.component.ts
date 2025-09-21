import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarAnimation } from '../../animations/portfolio.animations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [navbarAnimation]
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Sobre', route: '/about' },
    { label: 'Projetos', route: '/projects' },
    { label: 'Habilidades', route: '/skills' },
    { label: 'Contato', route: '/contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
