import styled from 'styled-components';

export const Container = styled.div`
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translate3d(0, 15px, 0);
  position: absolute;
  left: 10%;
  top: 8.5rem;
  z-index: 2;
  display: block;
`;

export const List = styled.ul`
  width: 24rem;
  height: 37rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0;
  padding: 2.6rem 3rem 3rem;
  background: #35283c;
  box-shadow: var(--box-Shadow-3);
  border-radius: 20px;
  min-width: 15rem;
`;

export const ListItem = styled.li`
  a {
    padding: 0.6rem 0;
    color: #fff;
    font-size: 18px;
    position: relative;
    display: inline-block;

    &:hover {
      color: #ffc4ff;
    }

    &::after {
      z-index: 1;
      content: '';
      height: 100%;
      width: 180%;
      position: absolute;
      left: 0;
      display: block;
      top: 0;
    }

    &::before {
      z-index: 5;
      content: '';
      width: 100%;
      position: absolute;
      bottom: 3px;
      height: 3px;
      left: 0;
      display: block;
      background: #ffc4ff;
      transform: rotate(-1deg);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`;
