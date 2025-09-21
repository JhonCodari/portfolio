import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(300)
  ])
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition('void => *', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const scaleInAnimation = trigger('scaleIn', [
  transition('void => *', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const navbarAnimation = trigger('navbarSlide', [
  state('closed', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  state('open', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition('closed => open', animate('300ms ease-in')),
  transition('open => closed', animate('300ms ease-out'))
]);
