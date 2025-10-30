export interface Certification {
  id: number;
  title: string;
  issuer: string; // AWS, Alura, Udemy, etc.
  imageUrl: string;
  credentialUrl: string;
  issuedDate: Date;
  expiryDate?: Date; // Opcional - apenas para certificações que expiram
  type: 'aws' | 'course'; // Distingue certificações AWS de cursos
  technologies?: string[]; // Para filtros
  featured?: boolean; // Para destacar certificações importantes
  description?: string;
}

export interface CertificationFilter {
  name: string;
  key: string;
  icon: string;
}
