'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import useToastifyContext from '@/context/toastify-context';
import useCountStore from '@/stores/count-store';
import { useEffect } from 'react';

export default function Home() {
  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  const { raiseErrorMessage, showSuccessMessage } = useToastifyContext();

  useEffect(() => {
    useCountStore.persist.rehydrate();
  }, []);

  return (
    <div className="grid place-content-center min-h-dvh space-y-4">
      <div className="border border-red-300 p-4">
        <Button
          onClick={() => raiseErrorMessage('Error')}
          variant="ghost"
          className="active:animate-shake"
        >
          Raise Error Message
        </Button>
        <Button
          onClick={() => showSuccessMessage('Success')}
          variant="outline"
          className="active:animate-shake"
        >
          Show Success Message
        </Button>
      </div>
      <p className="flex flex-row gap-1 items-center">
        <Icons.star className="size-5" />
        Count: <span className="text-green-700">{count}</span>
      </p>
      <Button onClick={increase} className="active:animate-shake">
        Increase
      </Button>
    </div>
  );
}
