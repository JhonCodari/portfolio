// Interface para os valores/estatísticas da seção About
export interface AboutValue {
  number: string;
  label: string;
}

// Interface para os valores pessoais/profissionais
export interface PersonalValue {
  title: string;
  description: string;
  icon: string;
}

// Interface para itens da timeline
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isPresent?: boolean;
}
