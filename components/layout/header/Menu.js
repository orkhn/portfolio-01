import { useState } from 'react';
import * as styled from './menuStyles';
import Link from 'next/link';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <styled.Container style={{ menuActive }}>
      <styled.List>
        <styled.ListItem>
          <Link href="/project1">Linkedin Clone</Link>
        </styled.ListItem>
        <styled.ListItem>
          <Link href="/project1">Calculator</Link>
        </styled.ListItem>
        <styled.ListItem>
          <Link href="/project1">Chatting Leo</Link>
        </styled.ListItem>
        <styled.ListItem>
          <Link href="/project1">Orkhn</Link>
        </styled.ListItem>
        <styled.ListItem>
          <Link href="/project1">Beau</Link>
        </styled.ListItem>
        <styled.ListItem>
          <Link href="/project1">The Odin</Link>
        </styled.ListItem>
      </styled.List>
    </styled.Container>
  );
};

export default Menu;
