export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  msi?: string;
  description?: string;
  features: string[];
  recommendedFor?: string;
  accent?: string;
  isPopular?: boolean;
  color?: string;
}

export interface Pillar {
  title: string;
  icon: string;
  desc: string;
  accent: string;
}

export interface SecondaryService {
  title: string;
  icon?: string;
  color: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
  image: string;
}