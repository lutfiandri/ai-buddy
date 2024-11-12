import { Layout } from '@/components/layout/layout';
import { BubbleChat } from '@/components/template/bubble-chat';
import { ChatInput } from '@/components/template/chat-input';
import { AutosizeTextAreaRef } from '@/components/ui/autosize-textarea';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const navigate = useNavigate();
  const inputRef = useRef<AutosizeTextAreaRef>(null);
  const [prompt, setPrompt] = useState('');

  const onSubmit = () => {
    navigate('/c');
  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-end items-center overflow-y-auto">
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>{' '}
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>{' '}
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
      </div>
      <div className="container p-4 flex flex-col gap-4 justify-center items-center sticky bottom-0 bg-white border-t border-sidebar-border">
        <ChatInput
          ref={inputRef}
          text={prompt}
          setText={setPrompt}
          onSubmit={onSubmit}
        />
      </div>
    </Layout>
  );
}

export default Chat;