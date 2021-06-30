import * as styled from 'components/layout/footer/FooterStyle';

import ChatBot from 'components/layout/footer/ChatBot';
import Navbar from 'components/layout/footer/Navbar';

export default function Footer({ theme, setChatBotState, chatBotState }) {
  return (
    <styled.Footer>
      <Navbar />
      <styled.ChatButton
        onClick={() => setChatBotState('open')}
        chatBotState={chatBotState}
      >
        <styled.ChatBotIcon theme={theme} />
      </styled.ChatButton>
      <ChatBot chatBotState={chatBotState} setChatBotState={setChatBotState} />
    </styled.Footer>
  );
}
