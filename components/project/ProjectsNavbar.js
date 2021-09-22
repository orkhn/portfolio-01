import * as styled from './ProjectsNavbarStyles';
import Link from 'next/link';

const ProjectsNavbar = () => {
  return (
    <styled.Navbar>
      <ul>
        <li>
          <Link href="/projects/beau">
            <a>Beau</a>
          </Link>
        </li>
      </ul>
    </styled.Navbar>
  );
};

export default ProjectsNavbar;
