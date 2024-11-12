import { Layout } from '@/components/layout/layout';
import {
  PromptCards,
  PromptCardProps,
} from '@/components/template/prompt-card';
import { useState, useRef } from 'react';
import { AutosizeTextAreaRef } from '@/components/ui/autosize-textarea';
import { useNavigate } from 'react-router-dom';
import { ChatInput } from '@/components/template/chat-input';

function Home() {
  const navigate = useNavigate();
  const inputRef = useRef<AutosizeTextAreaRef>(null);
  const [prompt, setPrompt] = useState('');

  const onPromptClick = (prompt: PromptCardProps) => {
    setPrompt(prompt.description);
    inputRef.current?.textArea?.focus();
  };

  const onSubmit = () => {
    navigate('/c');
  };

  return (
    <Layout>
      <div className="flex-1 container p-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Hi, Lutfi! AI Buddy is here to help.
        </h1>
        <ChatInput
          ref={inputRef}
          text={prompt}
          setText={setPrompt}
          onSubmit={onSubmit}
        />
        <PromptCards
          onPromptClick={onPromptClick}
          prompts={[
            {
              title: 'Go Developer',
              description:
                'You are a professional golang backend developer. Please help me with my code.',
            },
            {
              title: 'Dentist',
              description:
                'You are a dentist. Please help me with my dental problems.',
            },
            {
              title: 'Java Developer',
              description:
                'You are a professional java backend developer. Please help me with my code.',
            },
          ]}
        ></PromptCards>
      </div>
    </Layout>
  );
}

export default Home;
