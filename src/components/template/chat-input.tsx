import React from 'react';
import {
  AutosizeTextarea,
  AutosizeTextAreaRef,
} from '@/components/ui/autosize-textarea';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};

export const ChatInput = React.forwardRef<AutosizeTextAreaRef, Props>(
  (props, ref) => (
    <div className="flex w-full items-end space-x-2">
      <AutosizeTextarea
        ref={ref}
        itemType="text"
        placeholder="Ask me anything..."
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
        minHeight={37}
        maxHeight={240}
      ></AutosizeTextarea>
      <Button onClick={props.onSubmit}>
        <SendIcon></SendIcon>
      </Button>
    </div>
  )
);
