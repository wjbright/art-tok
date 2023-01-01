import { useCallback, useRef } from "react";

export default function useInfiniteScroll(trpcRoute: any) {
  const observer = useRef<IntersectionObserver>();
  const lastPageElementRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && trpcRoute.hasNextPage) {
          console.log("Shit is showing!!");
          trpcRoute.fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [trpcRoute.isLoading, trpcRoute.hasNextPage]
  );

  return [lastPageElementRef];
}
