import { Card } from '@/components/ui/card';

export type PromptCardProps = {
  title: string;
  description: string;
  onClick?: (prompt: PromptCardProps) => void;
};

export function PromptCard({ title, description, onClick }: PromptCardProps) {
  return (
    <Card
      className="p-4 flex flex-col gap-1 cursor-pointer text-gray-600 hover:text-gray-700 text-xs sm:text-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-150"
      onClick={() => onClick?.({ title, description })}
    >
      <div className="font-medium">{title} &rarr;</div>
      <div className="line-clamp-2">{description}</div>
    </Card>
  );
}

type PromptCardsProps = {
  prompts: PromptCardProps[];
  onPromptClick: (prompt: PromptCardProps) => void;
};

export function PromptCards({ prompts, onPromptClick }: PromptCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.title} onClick={onPromptClick} {...prompt} />
      ))}
    </div>
  );
}
