import type { ChangeEvent } from 'react';

export interface CreateButtonProps {
  type?: 'submit' | 'reset' | 'button';
  className: string;
  text: string;
  onClick: () => void;
}

export interface CreateInputProps {
  type: string;
  id?: string;
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CardProps {
  name: string;
}
