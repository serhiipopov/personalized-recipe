import { useCallback, useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => Promise<void>>(callback: T, delay: number): T {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback as T;
}
