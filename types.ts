import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

export interface AmenityCategory {
  category: string;
  items: {
    icon: React.ReactNode;
    name: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  imageUrl: string;
}
