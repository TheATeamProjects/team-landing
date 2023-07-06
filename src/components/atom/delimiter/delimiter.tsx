import { useTheme } from "@/themes";

export const Delimiter = () => {
  const theme = useTheme();

  return <hr style={{ border: `solid 0.0625rem ${theme.grey[100]}` }} />;
};
