import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = <T extends Element>(
  options = {
    threshold: 0.95,
    rootMargin: "0px",
  }
): [React.Ref<T | null>, boolean] => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible] as const;
};
