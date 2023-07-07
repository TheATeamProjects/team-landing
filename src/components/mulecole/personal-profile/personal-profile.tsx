"use client";

import { Typography } from "@/components/atom";
import { PersonalProfileProps } from "./interface";
import { BackgroundDiv, ProfileContainer } from "./style";
import { useTheme } from "@/themes";

export const PersonalProfile = ({ name, role, url }: PersonalProfileProps) => {
  const theme = useTheme();

  return (
    <ProfileContainer>
      <BackgroundDiv url={url} />
      <Typography
        variant="body1"
        color={theme.palette.secondary.main}
        mt={"16px"}
      >
        {name}
      </Typography>
      <Typography variant="body2" color={theme.grey[200]} mt={"8px"}>
        {role}
      </Typography>
    </ProfileContainer>
  );
};
