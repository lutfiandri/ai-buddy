import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function AiSelector() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const ai = searchParams.get('ai');
    if (ai === null) {
      setSearchParams({
        ai: 'gpt-4o',
      });
    }
  }, [searchParams, setSearchParams]);

  const onSelectChange = (value: string) => {
    searchParams.set('ai', value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      value={searchParams.get('ai') as string}
      onValueChange={onSelectChange}
    >
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gpt-4o">GPT 4o</SelectItem>
        <SelectItem value="gpt-4o-mini">GPT 4o Mini</SelectItem>
        <SelectItem value="claude-3.5-opus">Claude 3.5 Opus</SelectItem>
        <SelectItem value="claude-3.5-sonnet">Claude 3.5 Sonnet</SelectItem>
        <SelectItem value="claude-3.5-haiku">Claude 3.5 Haiku</SelectItem>
      </SelectContent>
    </Select>
  );
}
