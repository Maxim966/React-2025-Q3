export interface CreateButtonProps {
  type?: 'submit' | 'reset' | 'button';
  className: string;
  text: string;
  onClick: () => void;
}
