import { useCallback, useRef } from "react";

export type UsePaginationParams = {
  onVisible: () => void;
  config?: IntersectionObserverInit & {
    unobserveOnIntersect?: boolean;
  };
};
export function useObserver({ onVisible, config }: UsePaginationParams) {
  const observer = useRef<IntersectionObserver>();

  const elementRef = useCallback((node: Element | null) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onVisible();

        if (config?.unobserveOnIntersect && node) {
          observer.current?.unobserve(node);
        }
      }
    }, config);

    if (node) observer.current.observe(node);
  }, []);

  return [elementRef];
}
