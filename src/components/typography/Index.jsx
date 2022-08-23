import React from 'react';

const Heading = ({ children, className }) => (
  <span className={`text-4xl font-bold ${className}`}>
    {children}
  </span>
);

const Subheading = ({ children, className }) => (
  <span className={`text-2xl font-bold ${className}`}>
    {children}
  </span>
);

const LinkText = ({ children, className }) => (
  <span className={`text-primary underline cursor-pointer ${className}`}>
    {children}
  </span>
);

export { Heading, Subheading, LinkText };
