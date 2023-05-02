import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

interface User {
  id: number;
}
interface QuickReplies {
  type: string; // or 'checkbox',
  keepIt: Boolean;
  values: [
    {
      title: '😋 Yes';
      value: 'yes';
    },
    {
      title: '📷 Yes, let me show you with a picture!';
      value: 'yes_picture';
    },
    {
      title: '😞 Nope. What?';
      value: 'no';
    },
  ];
}

interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: {};
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: {};
}
export function Message() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderAvatar={() => null}
    />
  );
}

export default Message;
