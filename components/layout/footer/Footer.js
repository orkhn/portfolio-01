import * as styled from 'components/layout/footer/FooterStyle';

import ChatBot from 'components/layout/footer/ChatBot';
import Navbar from 'components/layout/footer/Navbar';
import { useViewport } from 'hooks/useViewport';
import { useNavVisible } from 'hooks/useNavVisible';

export default function Footer({ theme, setChatBotState, chatBotState }) {
  const { width } = useViewport();
  const visible = useNavVisible();

  return (
    <styled.Footer>
      <Navbar />
      <styled.ChatButton
        onClick={() => setChatBotState('open')}
        chatBotState={chatBotState}
        style={{ opacity: width < 600 && visible ? '1' : '0' }}
      >
        <styled.ChatBotIcon theme={theme} />
      </styled.ChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </styled.Footer>
  );
}
