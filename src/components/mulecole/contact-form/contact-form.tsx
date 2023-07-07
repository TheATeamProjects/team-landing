import React from "react";
import { BackgroundForm } from "./style";
import { useTheme } from "@/themes";
import { Button, Picture, TextField } from "@/components/atom";

export const ContactForm = () => {
  const theme = useTheme();

  return (
    <BackgroundForm theme={theme}>
      <div className="star-position">
        <Picture
          alt="star"
          src="/assets/shared/Star.svg"
          width={64}
          height={64}
        />
      </div>
      <TextField
        label="Name"
        variant="outlined"
        size="medium"
        sx={{
          "& .MuiFormLabel-root": {
            color: theme.grey[200],
          },
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        size="medium"
        sx={{
          "& .MuiFormLabel-root": {
            color: theme.grey[200],
          },
        }}
      />
      <TextField
        label="Tell us about your project"
        variant="outlined"
        multiline={true}
        minRows={4}
        sx={{
          "& .MuiFormLabel-root": {
            color: theme.grey[200],
          },
        }}
      />
      <div className="form-footer">
        <div className="attach-parent">
          <Picture
            alt="attach"
            src="/assets/shared/attachment.svg"
            width={16}
            height={16}
          />
          <Button variant="text" className="text-btn">
            Add Attachment
          </Button>
        </div>
        <Button variant="contained" className="submit-btn" size="large">
          Send
        </Button>
      </div>
    </BackgroundForm>
  );
};
