import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = "bg-white rounded-[var(--radius-card)] p-6";
  const shadowClasses = hover
    ? "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-200"
    : "shadow-[var(--shadow-card)]";

  return (
    <div className={`${baseClasses} ${shadowClasses} ${className}`}>
      {children}
    </div>
  );
}
