import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 2;
  padding-top: 2rem;
  transition: opacity 1s;
  background-color: ${({ theme }) => theme.primary};

  ${({ isHome }) =>
    isHome &&
    css`
      background-color: transparent;
    `}

  @media (max-width: 37.5em) {
    .about,
    .project,
    .contact {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const LinkWrapper = styled.li`
  &.logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 37.5em) {
      left: 10%;
    }
  }
  &.github {
    margin-left: auto;
  }
`;

const StyledLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const NavLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.75rem;
  padding: 0.5rem 1.2rem;

  &.about,
  &.project,
  &.contact {
    background: linear-gradient(currentColor 0 0) var(--p, 100%) 0,
      linear-gradient(currentColor 0 0) 0 var(--d, 0),
      linear-gradient(currentColor 0 0) var(--d, 0) 100%,
      linear-gradient(currentColor 0 0) 100% var(--p, 100%);
    background-size: var(--d, 0) 3px, 3px var(--d, 0);
    background-repeat: no-repeat;
    transition: 0.5s, background-position 0s 0.5s;

    &:hover {
      --d: 100%;
      --p: 0%;
    }
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;

  animation: spin 15s linear infinite;

  @media (min-width: 37.51em) and (max-width: 42.5em) {
    opacity: 0;
    visibility: hidden;
  }

  @keyframes spin {
    0% {
      -moz-transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
    }
    100% {
      -moz-transform: rotateZ(360deg);
      -webkit-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
    }
  }
`;

export const Icon = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  :last-child {
    margin-left: -1rem;
  }
`;
