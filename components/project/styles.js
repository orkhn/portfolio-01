import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 10rem auto 0 auto;

  @media (max-width: 37.5em) {
    width: 90%;
    margin-top: 9rem;
  }
`;

export const HeadingSection = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 90%;
  margin: 0 auto;
  min-height: 5rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.secondary};
  text-align: center;

  h1 {
    font-size: clamp(3.3rem, 4.8vw, 6.5rem);
  }

  @media (max-width: 37.5em) {
    width: 100%;
  }
`;

export const ProjectsSection = styled.section`
  width: 70%;
  margin: 0 auto;
  padding-top: 1.5rem;
  padding-bottom: 8rem;

  @media (max-width: 112.5em) {
    width: 100%;
  }

  @media (max-width: 37.5em) {
    padding-top: 0.5rem;
  }
`;
