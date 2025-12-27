import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 16)); // vitesse
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
}
