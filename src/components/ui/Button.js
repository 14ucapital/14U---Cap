"use client";

import Link from 'next/link';

/**
 * A reusable Button component.
 *
 * It renders a <Link> if 'href' prop is provided, otherwise a <button>.
 *
 * @param {object} props
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary'] - The visual style of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the button.
 * @param {string} [props.href] - If provided, the button will render as a Next.js <Link>.
 * @param {string} [props.className] - Additional classes to merge.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {function} [props.onClick] - Click handler.
 * @returns {React.ReactElement}
 */
export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  ...props
}) {
  // Base styles (common to all buttons)
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-brand-dark',
    secondary: 'bg-brand-surface text-brand-text border border-brand-border hover:bg-brand-bg',
    ghost: 'bg-transparent text-brand-dark hover:text-brand-primary shadow-none',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Combine all classes
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(' ');

  // If 'href' is provided, render a <Link>
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a <button>
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}