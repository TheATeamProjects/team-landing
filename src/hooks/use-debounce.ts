import { useEffect } from "react";

export interface UseDebounceType {
  allow: boolean;
  action: Function;
  deps?: Array<any>;
  timeout?: number;
}

export const useDebounce = ({
  allow,
  action,
  deps = [],
  timeout = 10,
}: UseDebounceType) => {
  useEffect(() => {
    let pointer: NodeJS.Timeout;

    if (allow) {
      pointer = setTimeout(() => action(), timeout);
    }

    return () => clearTimeout(pointer);
  }, [action, allow, timeout, ...deps]);
};
