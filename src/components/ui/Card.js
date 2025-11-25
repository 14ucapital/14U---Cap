import React from 'react';

/**
 * A reusable Card component.
 *
 * This is a Server Component, as it's just a styled wrapper.
 *
 * @param {object} props
 * @param {string} [props.className] - Additional classes to merge.
 * @param {React.ReactNode} props.children - The content of the card.
 * @returns {React.ReactElement}
 */
export default function Card({ children, className = '' }) {
  // Combine classes
  const classes = [
    'bg-brand-surface',
    'rounded-xl',
    'border',
    'border-brand-border',
    'shadow-sm',
    'overflow-hidden',
    className,
  ].join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}