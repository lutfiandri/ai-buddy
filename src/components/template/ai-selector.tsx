import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const AI_OPTIONS = [
  {
    name: 'GPT 4o',
    value: 'gpt-4o',
  },
  {
    name: 'GPT 4o Mini',
    value: 'gpt-4o-mini',
  },
  {
    name: 'Claude 3.5 Opus',
    value: 'claude-3.5-opus',
  },
  {
    name: 'Claude 3.5 Sonnet',
    value: 'claude-3.5-sonnet',
  },
];

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
        {AI_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
