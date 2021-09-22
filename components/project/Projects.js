import * as styled from './styles';
import { Heading } from '../home/styles';
import { useContext } from 'react';
import Beau from './beau/Beau';
import ProjectsNavbar from './ProjectsNavbar';
import { ChatBotContext } from 'components/layout/Layout';

const Projects = () => {
  const { theme } = useContext(ChatBotContext);
  return (
    <styled.Container>
      <styled.HeadingSection>
        <Heading className={`${theme === 'dark' ? 'gradientColor' : ''}`}>
          My Portfolio
        </Heading>
      </styled.HeadingSection>
      <styled.ProjectsSection>
        <ProjectsNavbar />
        <Beau />
      </styled.ProjectsSection>
    </styled.Container>
  );
};

export default Projects;
