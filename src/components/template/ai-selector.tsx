import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function AiSelector() {
  return (
    <Select defaultValue="gpt-4o">
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
