import React, { useMemo } from 'react';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ScrollLink = Scroll.Link;

export type NavLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  iconClass?: string;
  className?: string;
  scroll?: boolean;
  path?: string;
  onClick?: () => void;
};

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = ({
  href, 
  icon,
  iconClass,
  scroll,
  label,
  to,
  spy,
  path,
  smooth,
  onClick,
}: NavLinkProps & Scroll.LinkProps) => {
  const router = useRouter();
  const isCurrentPath = useMemo(()=> router.pathname === href || path === href, [path, href, router]);
  return !scroll ? (
    <div className="menu-item" onClick={onClick}>
      <Link href={href}>
        <a
          className={isCurrentPath ? ' current-page' : ''}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

          <span className="label">{label}</span>
        </a>
      </Link>
    </div>
  ) : (
    <ScrollLink
      className={`menu-item ${isCurrentPath ? ' current-page' : ''}`}
      href={href}
      to={to}
      spy={spy}
      smooth={smooth}
      duration={500}
      delay={100}
    >
      <span onClick={onClick} className="label">{label}</span>
    </ScrollLink>
  );
};
