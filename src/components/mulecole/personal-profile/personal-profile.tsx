"use client";

import { Typography } from "@/components/atom";
import { PersonalProfileProps } from "./interface";
import { BackgroundDiv, ProfileContainer } from "./style";
import { useTheme } from "@/themes";

export const PersonalProfile = (props: PersonalProfileProps) => {
  const { name, role, imgUrl } = props;
  const theme = useTheme();

  return (
    <ProfileContainer>
      <BackgroundDiv imgUrl={imgUrl} />
      <Typography variant="body1" color={theme.palette.primary} mt={'16px'}>
        {name}
      </Typography>
      <Typography variant="body2" color={theme.grey[200]} mt={'8px'}>
        {role}
      </Typography>
    </ProfileContainer>
  );
};
