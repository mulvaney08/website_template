import Link from 'next/link';
import { ReactNode } from 'react';

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const styles =
    variant === 'primary'
      ? 'btn-base btn-primary'
      : 'btn-base btn-secondary';

  return (
    <Link href={href} className={`${styles} ${className}`.trim()}>
      {children}
    </Link>
  );
}
