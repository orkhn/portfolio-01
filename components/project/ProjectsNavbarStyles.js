import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 80%;
  margin: 0 auto 1rem auto;

  ul {
    width: 100%;
    display: flex;
    color: ${({ theme }) => theme.secondary};
    font-size: clamp(2rem, 4.8vw, 3rem);
    align-items: center;
    justify-content: center;
  }
`;
