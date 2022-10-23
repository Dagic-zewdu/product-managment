import { RefObject } from 'react';

import { useEventListener } from 'usehooks-ts';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
  ignore: Array<string>
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;
    let findElement = ignore.find((ig) => {
      //@ts-ignore
      return ig === event?.target?.id;
    });
    if (findElement) return;
    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}

export default useOnClickOutside;
