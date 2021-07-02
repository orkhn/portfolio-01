import { useState, useRef, useEffect } from 'react';
import * as styled from './styles';

import TypingBubble from 'components/layout/footer/TypingBubble';

import Image from 'next/image';

import OutsideClickHandler from 'react-outside-click-handler';

export default function ChatBot({ setChatBotState, chatBotState }) {
  const contentRef = useRef();

  const Delayed = ({ children }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
      // prevent memory leaks
      let mounted = true;
      setTimeout(() => {
        if (mounted) {
          setIsShown(true);
          contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 2000);
      return () => (mounted = false);
    }, []);

    return isShown ? children : <TypingBubble />;
  };

  const ChatQNA = ({ currentQuestion, setCurrentQuestion }) => {
    const question =
      currentQuestion === 1
        ? `Just wanted to say hi.`
        : currentQuestion === 2
        ? `Ways to connect you?`
        : currentQuestion === 3
        ? `I want to hire you?`
        : null;
    const answer =
      currentQuestion === 1 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>Well, hi there!</p>
            <p> I hope you've enjoyed browsing my website!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 2 ? (
        <Delayed>
          <div className="agent mw-93" ref={contentRef}>
            <p>Here is my number:</p>
            <p>
              <a
                style={{ wordSpacing: '-10px', color: 'blue' }}
                href="tel:+994(55)6897918"
              >
                +994(55) 689-7-918
              </a>
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 3 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>That's great!</p>
            <p>
              Have a look at my
              <a
                href="https://drive.google.com/file/d/1Uu4f9JYzC9A7hzRTeimdWMy1e47gMa1f/view?usp=sharing"
                className="link-btn"
              >
                resume💾
              </a>
              and let's
              <a href="mailto:adrian.li.dev@gmail.com" className="link-btn">
                chat💌
              </a>
              further!
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : (
        ''
      );

    const onQuestionBtnClick = (questionNum) => {
      setCurrentQuestion(questionNum);
    };

    return (
      <>
        <styled.ChatAnswer currentQuestion={currentQuestion}>
          <div tabIndex="-1" className="user">
            {question}
          </div>
          {answer}
        </styled.ChatAnswer>
        <styled.ChatQuestion currentQuestion={currentQuestion}>
          <button
            onClick={() => {
              onQuestionBtnClick(1);
            }}
            className="question-btn"
          >
            👋 Just wanted to say hi.
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(2);
            }}
            className="question-btn"
          >
            💬 ways to contact you?
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(3);
            }}
            className="question-btn"
          >
            💼 I want to hire you!
          </button>
        </styled.ChatQuestion>
      </>
    );
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onCloseBtnClick = () => {
    setChatBotState('close');
    setCurrentQuestion(0);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setChatBotState('close');
        setCurrentQuestion(0);
      }}
    >
      <styled.ChatBot chatBotState={chatBotState}>
        <styled.ChatHeader>
          <Image
            src="/icons/bot.svg"
            alt="Pic of Bot"
            width={90}
            height={90}
            className="avatar"
          />
          <div className="desc">
            <span className="name">Orkhn Bot</span>
          </div>
          <button className="close-btn" onClick={onCloseBtnClick}>
            <styled.CloseIcon />
          </button>
        </styled.ChatHeader>

        <styled.ChatContent>
          <div className="agent">Hi! My name is Orkhn Bot 🤖</div>

          <div className="agent">I present Orkhan here</div>

          <div className="agent">How can I help you today?</div>

          <ChatQNA
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </styled.ChatContent>
      </styled.ChatBot>
    </OutsideClickHandler>
  );
}
