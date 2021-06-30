import * as styled from './styles';

import { useViewport } from 'hooks/useViewport';
import { useContext } from 'react';

import { ChatBotContext } from 'components/layout/Layout';

function Hero() {
  const { theme } = useContext(ChatBotContext);
  const { width } = useViewport();

  return (
    <styled.Hero>
      <styled.Description
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Hi! I'm Orkhan.</h1>

        <styled.movingParagraph>
          <div>
            <ul className="flip">
              <li>A React Developer</li>
              <li>Living In Baku, Azerbaijan</li>
            </ul>
          </div>
        </styled.movingParagraph>
      </styled.Description>
      <styled.Img
        src={`${
          theme === 'light'
            ? '/images/illustrations/hero.svg'
            : '/images/illustrations/hero-dark.svg'
        }`}
        alt=""
      />
    </styled.Hero>
  );
}

export default Hero;
