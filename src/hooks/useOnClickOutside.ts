import { useEffect, RefObject } from 'react'

type AnyEvent = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
  ignoreRefs?: RefObject<T>[],
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (
        !el ||
        el.contains(event.target as Node) ||
        ignoreRefs?.some((item) =>
          item?.current?.contains(event.target as Node)
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
