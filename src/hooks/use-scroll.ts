export const useScroll = () => {
  const scrollIntoView = (docSelector: string) => {
    const element = document.querySelector(docSelector);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { scrollIntoView };
};
