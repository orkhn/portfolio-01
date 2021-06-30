import * as styled from './navbarStyles';

import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const url = router.pathname;
  const isHome = url === '/' ? true : false;

  const projectUrl = () => {
    if (isHome) return '/project';
    else if (isHome) return '#';
    else return '/';
  };

  return (
    <styled.Navbar isHome={isHome}>
      <styled.NavList isHome={isHome}>
        <styled.LinkWrapper>
          <styled.NavLink href="/" className="about">
            <styled.HomeIcon />
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="/project" className="project">
            <styled.ProjectsIcon />
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="/about" className="about">
            <styled.AboutMeIcon />
          </styled.NavLink>
        </styled.LinkWrapper>
      </styled.NavList>
    </styled.Navbar>
  );
};

export default Navbar;
