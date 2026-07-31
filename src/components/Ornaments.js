import React from 'react';

export function Sparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
    </svg>
  );
}

export function Clover({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 12C15.5 12 21 8.5 21 4.5C21 1.5 18 0 15 0C12 0 9.5 2.5 9.5 5.5C9.5 2.5 7 0 4 0C1 0 -2 1.5 -2 4.5C-2 8.5 3.5 12 3.5 12C3.5 12 -2 15.5 -2 19.5C-2 22.5 1 24 4 24C7 24 9.5 21.5 9.5 18.5C9.5 21.5 12 24 15 24C18 24 21 22.5 21 19.5C21 15.5 15.5 12 15.5 12Z" transform="translate(2.5, 0) scale(0.8)" />
    </svg>
  );
}

export function GeometricFret({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <path d="M7 2v5h5 M17 7v5h5 M2 17h5v5 M12 17h5v-5" />
      <rect x="7" y="7" width="10" height="10" />
      <path d="M12 7v10 M7 12h10" />
    </svg>
  );
}

export function StarMotif({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.6-6.3-4.8-6.3 4.8 2.3-7.6-6-4.6h7.6z" />
    </svg>
  );
}
