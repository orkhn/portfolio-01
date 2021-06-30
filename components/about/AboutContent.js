import * as styled from './styles';

import { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewport } from 'hooks/useViewport';
import { useAnimation } from 'framer-motion';

import ProgressBar from '/helpers/progressBar/ProgressBar';

import ScrollButton from '/components/buttons/ScrollButton';

import { ChatBotContext } from 'components/layout/Layout';

export default function AboutContent() {
  const { theme } = useContext(ChatBotContext);
  const { width } = useViewport();

  const ref = useRef();

  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    threshold: 0.35,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.35,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.35,
  });

  useEffect(() => {
    if (width < 900) {
      controls.start('visible');
      controls.start('visible2');
      controls.start('visible3');
    } else {
      if (inViewRef) controls.start('visible');

      if (inViewRef2) controls.start('visible2');

      if (inViewRef3) controls.start('visible3');
    }
  }, [controls, inView, inView2, inView3, width]);

  return (
    <styled.About>
      <ScrollButton />
      <styled.Intro>
        <styled.Indicator>
          <span>01</span>
        </styled.Indicator>
        <styled.Illustration>
          <styled.Title>who i am</styled.Title>
          <styled.Img
            ref={inViewRef}
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <img
              style={{ padding: '5rem 0 0' }}
              src={`${
                theme === 'light'
                  ? '/images/illustrations/whoIam.svg'
                  : '/images/illustrations/whoIam-dark.svg'
              }`}
              alt=""
            />
          </styled.Img>
        </styled.Illustration>
        <styled.Content>
          <styled.Title className="titleNoAligned">orkhan ahadov</styled.Title>
          <p>
            Born in 1996. Graduated from Az. State Economic University in 2017,
            majoring "Business administration and Management". Following
            graduation and fulfillment of army duty, I've worked in different
            positions in various companies.
          </p>
          <p>
            In 2019, I decided to change completely my career path and become a
            full stack developer. In this road, with helping of my english &
            problem-solving skills I've been learning and adapting cutting edge
            required technologies.
          </p>
          <styled.Connection>
            <p>
              I'm always open to job opportunities and new connections. Send me
              an email, have a look at my resume.
            </p>
            <div className="buttons">
              <styled.Button
                animate={controls}
                initial="hidden"
                transition={{ duration: 1.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
              >
                <a href="mailto:orxan.ahadov@gmail.com">
                  <styled.EmailIcon />
                  Email Me
                </a>
              </styled.Button>
              <styled.Button
                animate={controls}
                initial="hidden"
                transition={{ duration: 1.2, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
              >
                <a href="https://drive.google.com/file/d/1Uu4f9JYzC9A7hzRTeimdWMy1e47gMa1f/view?usp=sharing">
                  <styled.ResumeIcon />
                  Resume
                </a>
              </styled.Button>
            </div>
          </styled.Connection>
        </styled.Content>
        <ScrollButton />
      </styled.Intro>

      <styled.Passion>
        <styled.Indicator>
          <span>02</span>
        </styled.Indicator>
        <styled.Illustration>
          <styled.Title>My Passions</styled.Title>
          <styled.Img
            ref={inViewRef2}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <img
              style={{ padding: '5rem 0 0' }}
              src={`${
                theme === 'light'
                  ? '/images/illustrations/passion.svg'
                  : '/images/illustrations/passion-dark.svg'
              }`}
              alt=""
            />
          </styled.Img>
        </styled.Illustration>
        <styled.Content
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <ul>
            <li>
              <h3>Technology</h3>
              <p>
                Technology has the power to change the lives of the world and
                individuals. I want to be a person who can always catch up with
                the latest technology and respond to changes. I think it is the
                mission of designers as well as engineers to promote innovation.
              </p>
            </li>
            <li>
              <h3>Story</h3>
              <p>
                I love story-like content such as novels, movies. Stories can
                get people's attention and make things easier to understand and
                remember. I believe that if you can study every story pattern
                and give your output a story, you will get a big return.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>
                I think design is like a "magic wand". If a service or product
                is magic to solve a problem, it is the role of design to act as
                an intermediary for users to master it. I strive every day to
                create a "magic wand" that matches the user.
              </p>
            </li>
          </ul>
        </styled.Content>
      </styled.Passion>
      <styled.Skills>
        <styled.Indicator>
          <span>03</span>
        </styled.Indicator>
        <styled.Illustration>
          <styled.Title>Skillset</styled.Title>
          <styled.Img
            ref={inViewRef3}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <img
              src={`${
                theme === 'light'
                  ? '/images/illustrations/skills.svg'
                  : '/images/illustrations/skills-dark.svg'
              }`}
              alt=""
            />
          </styled.Img>
        </styled.Illustration>
        <styled.Content
          className="skill-area"
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            visible3: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <div className="block-1">
            <styled.Frame>
              <div className="heading">
                <img src="/icons/html&css.svg" alt="html&css icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={90}
                  pathColor={`21, 114, 182`}
                  title={'HTML&CSS'}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img src="/icons/javascript-icon.svg" alt="javascript icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={80}
                  pathColor={`247, 223, 30`}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img src="/icons/git-icon.svg" alt="git icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={85}
                  pathColor={`000,000,000`}
                ></ProgressBar>
              </div>
            </styled.Frame>
          </div>
          <div className="block-2">
            <styled.Frame>
              <div className="heading">
                <img src="/icons/tailwind-icon.svg" alt="tailwindcss icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={85}
                  pathColor={`68, 168, 179`}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img src="/icons/react-icon.svg" alt="react icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={65}
                  pathColor={`0, 216, 255`}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img src="/icons/figma-icon.svg" alt="figma icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={85}
                  pathColor={`162, 89, 255`}
                ></ProgressBar>
              </div>
            </styled.Frame>
          </div>
          <div className="block-3">
            <styled.Frame>
              <div className="heading">
                <img src="/icons/sass-icon.svg" alt="sass icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={75}
                  pathColor={`205, 103, 253`}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img src="/icons/nextjs-icon.svg" alt="nextjs icon" />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={70}
                  pathColor={`000, 000, 000`}
                ></ProgressBar>
              </div>
            </styled.Frame>
            <styled.Frame>
              <div className="heading">
                <img
                  src="/icons/styled-icon.svg"
                  alt="styled-components icon"
                />
              </div>
              <div className="circle">
                <ProgressBar
                  valueStart={0}
                  valueEnd={80}
                  pathColor={`255, 206, 191`}
                ></ProgressBar>
              </div>
            </styled.Frame>
          </div>
        </styled.Content>
      </styled.Skills>
    </styled.About>
  );
}
