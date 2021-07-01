import React, { useState, useEffect } from 'react';

import * as styled from './scrollButtonStyles';

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: 1070,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
        setVisible(false);
      } else if (scrolled <= 0) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <styled.ScrollBtn
      onClick={scrollToBottom}
      style={{ display: visible ? 'inline' : 'none' }}
    />
  );
};

export default ScrollButton;
