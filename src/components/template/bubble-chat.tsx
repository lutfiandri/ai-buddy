import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Props = {
  type: 'human' | 'ai';
  avatarUrl?: string;
  avatarFallback: string;
  children: string;
};

export function BubbleChat({
  type,
  avatarUrl,
  avatarFallback,
  children,
}: Props) {
  return (
    <div className={cn('w-full', type === 'ai' ? 'bg-white' : 'bg-gray-100')}>
      <div className="container max-w-3xl p-4 flex gap-2 sm:gap-4 items-start">
        <Avatar className="w-8 h-8 text-xs sm:w-10 sm:h-10 sm:text-base border border-gray-300">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
