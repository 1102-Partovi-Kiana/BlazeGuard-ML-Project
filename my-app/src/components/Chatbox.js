import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

function Chatbox() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
        message: "Hello, I am ChatGpt!",
        sender: "ChatGpt"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; // all the old messages + new message

    // update our messages state
    setMessages(newMessages)

    // set a typing indicator (chatgpt is typing), create a state at the top
    setTyping(true);
    // process message to chatGPT (sent it over and see the response)
  }

  return (
    <div>
      <MainContainer>
        <ChatContainer>
            <MessageList typingIndicator= {typing ? <TypingIndicator content="GPT typing"/> : null }>
                {messages.map((message, i) => {
                    return <Message key={i} model={message} />
                })}
            </MessageList>
            <MessageInput placeholder='Type message' onSend = {handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Chatbox
