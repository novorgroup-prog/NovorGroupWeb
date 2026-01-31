import React, { ReactNode } from 'react';
import { useRouter } from '../src/router/RouterContext';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  style,
  onClick,
}) => {
  const { navigate, currentPath } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (to !== currentPath) {
      navigate(to);
    }
    onClick?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
};
