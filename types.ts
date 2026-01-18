export interface LinkItemProps {
  id: string;
  title: string;
  description?: string;
  details?: string[];
  url: string;
  price?: string;
  isHighlight?: boolean;
  tag?: string;
  buttonText?: string;
  variant?: 'default' | 'dark';
}

export interface SocialLinkProps {
  platform: 'instagram' | 'tiktok' | 'youtube';
  url: string;
}