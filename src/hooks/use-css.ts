export const useCSS = () => {
  const mergeClassNames = (...args: (string | undefined)[]) => {
    return args.filter((item) => item).join(" ");
  };

  return { mergeClassNames };
};
