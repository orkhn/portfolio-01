import * as styled from './styles';

import { useContext } from 'react';

import { ChatBotContext } from 'components/layout/Layout';
import AnimateFlip from 'helpers/movingWords/AnimateFlip';

function Hero() {
  const { theme } = useContext(ChatBotContext);

  return (
    <styled.Hero>
      <styled.Description
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <styled.Heading className={`${theme === 'dark' ? 'gradientColor' : ''}`}>
          Hi. I’m Orkhn.
        </styled.Heading>
        <styled.Heading className={`${theme === 'dark' ? 'gradientColor' : ''}`}>
          A Developer.
        </styled.Heading>
        <AnimateFlip
          paragraphFirst={'Specialized in ReactJS'}
          paragraphSecond={'Living In Baku, Azerbaijan'}
        ></AnimateFlip>
      </styled.Description>
      <styled.Img
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
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
