import React, { FC } from "react";
import { DescriptionContainer } from "./style";
import { useTheme } from "@/themes";
import { Typography } from "@/components/atom";
import { DescriptionPropsTypes } from "./interface";

export const Description: FC<DescriptionPropsTypes> = (
  { title, desc, lineVisibility }: DescriptionPropsTypes
) => {
  const theme = useTheme();
  return (
    <DescriptionContainer theme={theme}>
      <Typography
        fontWeight={"500"}
        mb={"24px"}
        color={theme.palette.secondary.main}
        fontSize="28px"
        className="title"
      >
        {title}
      </Typography>
      {lineVisibility && <div className="text-line"></div>}
      <Typography fontWeight={"400"} color={theme.grey[200]} fontSize="16px">
        {desc}
      </Typography>
    </DescriptionContainer>
  );
};
