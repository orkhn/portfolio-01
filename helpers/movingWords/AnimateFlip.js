import styled from 'styled-components';

const Container = styled.div`
  font-size: clamp(1.7rem, 0.7156rem + 1.4218vw, 2rem);
  color: ${({ theme }) => theme.title};
  margin-right: 7.3rem;
  line-height: 1;
  text-align: end;

  .flip {
    animation: flip 7s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }

  div {
    overflow: hidden;
    position: relative;
    height: 40px;
    width: 100%;

    @media (min-width: 37.51em) and (max-width: 56.25em) {
      height: 43px;
    }

    li {
      margin-bottom: 63px;
      text-align: start;
      padding-left: 0.3rem;

      @media (max-width: 56.25em) {
        text-align: center;
        padding: 0.6rem 0;
        width: 100%;
      }

      @media (min-width: 37.51em) and (max-width: 56.25em) {
        padding: 0.6rem 0;
      }

      @media (min-width: 56.15em) and (max-width: 75em) {
        padding: 0.4rem 0;
      }

      @media (min-width: 75em) and (max-width: 112.5em) {
        padding: 0.2rem 0;
      }

      @media (min-width: 112.5em) {
        padding: 0.4rem 0;
      }
    }
  }

  @media (max-width: 56.52em) {
    margin: 0 1rem 0 0;
  }

  @keyframes flip {
    0% {
      margin-top: -180px;
    }
    5% {
      margin-top: -90px;
    }
    50% {
      margin-top: -90px;
    }
    55% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`;

const AnimateFlip = ({ paragraphFirst, paragraphSecond }) => {
  return (
    <Container>
      <div>
        <ul className="flip">
          <li>{paragraphFirst}</li>
          <li>{paragraphSecond}</li>
        </ul>
      </div>
    </Container>
  );
};

export default AnimateFlip;
