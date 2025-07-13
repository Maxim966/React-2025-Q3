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

export interface Pokemon {
  name: string;
  url: string;
}

export interface ResultsProps {
  request: string;
}

export interface ResultsState {
  results: Pokemon[];
  error: string | null;
}

export interface AppState {
  search: string;
}

export interface SearchControlsProps {
  onSearch: (query: string) => void;
}

export interface ErrorButtonProps {
  className?: string;
  text?: string;
}
