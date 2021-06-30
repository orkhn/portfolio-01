import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/Themes';

import Navbar from 'components/layout/header/Navbar';
import Footer from 'components/layout/footer/Footer';

import { useDarkMode } from 'hooks/useDarkMode';

import React, { useState } from 'react';

export const ChatBotContext = React.createContext();

const Layout = ({ children }) => {
  const [chatBotState, setChatBotState] = useState('close');
  const [theme, themeToggler] = useDarkMode();

  return (
    <ChatBotContext.Provider value={{ setChatBotState, theme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <header style={{ zIndex: 2 }}>
          <Navbar
            theme={theme}
            themeToggler={themeToggler}
            setChatBotState={setChatBotState}
          />
        </header>
        <main style={{ zIndex: 1, display: 'grid' }}>{children}</main>
        <Footer
          theme={theme}
          chatBotState={chatBotState}
          setChatBotState={setChatBotState}
        />
      </ThemeProvider>
    </ChatBotContext.Provider>
  );
};

export default Layout;
