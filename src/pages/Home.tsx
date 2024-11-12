import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/layout';
import { SendIcon } from 'lucide-react';
import {
  PromptCards,
  PromptCardProps,
} from '@/components/template/prompt-card';
import { useState, useRef } from 'react';
import {
  AutosizeTextarea,
  AutosizeTextAreaRef,
} from '@/components/ui/autosize-textarea';

function Home() {
  const [prompt, setPrompt] = useState('');
  const inputRef = useRef<AutosizeTextAreaRef>(null);

  const onPromptClick = (prompt: PromptCardProps) => {
    setPrompt(prompt.description);
    inputRef.current?.textArea?.focus();
  };

  return (
    <Layout>
      <div className="flex-1 container p-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Hi, Lutfi! AI Buddy is here to help.
        </h1>
        <div className="flex w-full max-w-lg items-center space-x-2">
          <AutosizeTextarea
            ref={inputRef}
            itemType="text"
            placeholder="Ask me anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></AutosizeTextarea>
          <Button>
            <SendIcon></SendIcon>
          </Button>
        </div>
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
