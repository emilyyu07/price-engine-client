import { TrendingDown, TrendingUp } from 'lucide-react';

export function TrendIcon({ isDropping }:{isDropping: boolean}) {
  return (
    <div className="flex items-center">
      {isDropping ? (
        <TrendingDown className="text-green-500 w-5 h-5" />
      ) : (
        <TrendingUp className="text-red-500 w-5 h-5" />
      )}
    </div>
  );
}