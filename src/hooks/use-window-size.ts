import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    function onWindowResized() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", onWindowResized);

    return () => window.removeEventListener("resize", onWindowResized);
  }, []);

  return size;
};
