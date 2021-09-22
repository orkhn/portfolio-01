import * as styled from './navbarStyles';
import { useRouter } from 'next/router';
import { useViewport } from 'hooks/useViewport';
import { useNavVisible } from 'hooks/useNavVisible';

const Navbar = () => {
  const router = useRouter();
  const url = router.pathname;
  const isHome = url === '/' ? true : false;
  const { width } = useViewport();
  const visible = useNavVisible();

  return (
    <styled.Navbar
      isHome={isHome}
      style={{ display: width < 600 && visible ? 'flex' : 'none' }}
    >
      <styled.NavList isHome={isHome}>
        <styled.LinkWrapper>
          <styled.NavLink href="/" className="about">
            <styled.HomeIcon />
          </styled.NavLink>
        </styled.LinkWrapper>
        <styled.LinkWrapper>
          <styled.NavLink href="/projects" className="project">
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
