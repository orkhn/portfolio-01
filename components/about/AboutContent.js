import * as styled from './styles';

import { useContext, useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

import { ChatBotContext } from 'components/layout/Layout';

export default function AboutContent() {
  const { theme } = useContext(ChatBotContext);

  return (
    <styled.GridContainer>
      <styled.Title>
        <div>
          <span>Who</span>
          <span>I</span>
          <span>Am</span>
        </div>
        <img
          src={`${
            theme === 'light'
              ? '/images/illustrations/passion.svg'
              : '/images/illustrations/passion-dark.svg'
          }`}
          alt="Title"
        />
      </styled.Title>
      <styled.Info>
        <h3>
          <span>Orkhan</span>
          <span>Ahadov</span>
        </h3>
        <p>
          &nbsp; Born in 1996. Graduated from Az. State Economic University in 2017,
          majoring "Business administration and Management". Following graduation and
          fulfillment of army duty, I've worked in different positions in various
          companies.
        </p>
        <p>
          &nbsp; In 2019, I decided to change completely my career path and become a full
          stack developer. In this road, with helping of my english & problem-solving
          skills I've been learning and adapting cutting edge required technologies.
        </p>
      </styled.Info>
      <styled.Passion></styled.Passion>
      <styled.Skills></styled.Skills>
      <styled.Contact></styled.Contact>
    </styled.GridContainer>
  );
}
