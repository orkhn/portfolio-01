import * as styled from './navbarStyles';

import ThemeToggler from './ThemeToggler';

import { useViewport } from '/hooks/useViewport';

import { useRouter } from 'next/router';

const Navbar = ({ themeToggler, theme, setChatBotState }) => {
  const router = useRouter();
  const url = router.pathname;
  const isHome = url === '/' ? true : false;
  const { width } = useViewport();

  const projectUrl = () => {
    if (isHome) return '/project';
    else if (isHome) return '#';
    else return '/';
  };

  return (
    <styled.Navbar isHome={isHome}>
      <styled.NavList isHome={isHome}>
        <styled.LinkWrapper
          onClick={() => console.log('clicked')}
          className="project"
        >
          <styled.NavLink href={projectUrl()} className="about">
            <span>{isHome ? 'Projects' : 'Home'}</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="/about" className="about">
            <span>About</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper onClick={() => setChatBotState('open')}>
          <styled.NavLink href="#" className="contact">
            <span>Contact</span>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper className="logo">
          <styled.NavLink href="/">
            <styled.Logo
              src={`${
                theme === 'light'
                  ? '/images/brand/logo.svg'
                  : '/images/brand/logo-dark.svg'
              }`}
              alt="logo"
            />
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper className="github">
          <styled.NavLink href="https://github.com/orkhn">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></styled.Icon>
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="https://www.linkedin.com/in/orkhan-ahadov-34242b124/">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></styled.Icon>
          </styled.NavLink>
        </styled.LinkWrapper>
        <ThemeToggler themeToggler={themeToggler} />
      </styled.NavList>
    </styled.Navbar>
  );
};

export default Navbar;
