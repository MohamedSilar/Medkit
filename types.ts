import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface TeamMember {
  name: string;
  email: string;
  role: string;
  linkedin: string;
}