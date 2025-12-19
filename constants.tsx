import { 
  Brain, 
  Hospital, 
  Headphones, 
  ShoppingCart, 
  MessageCircleHeart, 
  Salad, 
  Dumbbell, 
  UserPlus, 
  Gamepad2 
} from 'lucide-react';
import { Feature, TeamMember } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'mind-check',
    title: 'Mind Check',
    description: 'Helps you understand and manage your current mood.',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'health-hub',
    title: 'Health Hub',
    description: 'Provides hospital search, tablet info, and emergency contact options.',
    icon: Hospital,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'focus-prod',
    title: 'Care Assistance',
    description: 'Get instant help for child care, skin & hair care, fitness, wellness, and first-aid support.',
    icon: Headphones,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'procurex',
    title: 'ProcureX',
    description: 'Lets you explore nutrition foods and fitness gadgets.',
    icon: ShoppingCart,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'motivational-boost',
    title: 'Motivational Boost',
    description: 'Lifts your mood with quotes, jokes, stories, and more.',
    icon: MessageCircleHeart,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'dietrix',
    title: 'Dietrix',
    description: 'Suggests healthy diet tips to improve your daily lifestyle.',
    icon: Salad,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'fitzone',
    title: 'FitZone',
    description: 'Offers pregnancy fit, yoga, and exercise recommendations.',
    icon: Dumbbell,
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    id: 'consult-expert',
    title: 'Consult an Expert',
    description: 'Assists you in consulting or booking with experts.',
    icon: UserPlus,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'play-games',
    title: 'Play Games',
    description: 'Lets you enjoy mini-games for relaxation and fun.',
    icon: Gamepad2,
    color: 'bg-pink-100 text-pink-600'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mohamed Silar M',
    email: 'mohamedsilar26@gmail.com',
    role: 'Founder & Developer',
    linkedin: 'https://www.linkedin.com/in/mohamed-silar-374a09284/'
  },
  {
    name: 'Shanmuga Priya AR',
    email: 'shanmugapriyaar0@gmail.com',
    role: 'Co-Founder & Developer',
    linkedin: 'https://www.linkedin.com/in/shanmugapriya-ar/'
  }
];

export const APP_NAME = "MedKit";
export const APP_DESCRIPTION = "MedKit is your all-in-one smart healthcare built to support your health, mind, fitness, productivity, and daily wellness in one place.";
