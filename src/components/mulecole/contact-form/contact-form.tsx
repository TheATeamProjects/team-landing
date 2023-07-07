"use client";

import { Button, Picture, TextField } from "@/components/atom";
import { useTheme } from "@/themes";
import { BackgroundForm } from "./style";
import { useState } from "react";

export const ContactForm = () => {
  const theme = useTheme();
  const [mail, setMail] = useState({ to: "", name: "", text: "" });

  const fields = [
    { label: "Name", key: "name", props: {} },
    { label: "Contact me on", key: "to", props: {} },
    {
      Label: "Tell us about your project",
      key: "text",
      props: {
        multiline: true,
        minRows: 4,
        placeholder: "Tell us about your project",
      },
    },
  ];

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
      {fields.map((item) => {
        return (
          <TextField
            id={item.key}
            key={item.key}
            label={item.label}
            variant="outlined"
            size="medium"
            sx={{
              "& .MuiFormLabel-root": {
                color: theme.grey[200],
              },
            }}
            {...item.props}
            onChange={(e) => setMail({ ...mail, [item.key]: e.target.value })}
          />
        );
      })}
      <div className="form-footer">
        {/* <div className="attach-parent">
          <Button
            variant="text"
            size="large"
            startIcon={
              <Picture
                width={16}
                height={16}
                alt="attach"
                src="/assets/shared/attachment.svg"
              />
            }
          >
            Add Attachment
          </Button>
        </div> */}
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className="submit-btn"
        >
          <a
            target="_blank"
            href={`mailto:delaram.feyziii@gmail.com?subject=Email from ${
              mail.name
            }&body=${encodeURIComponent(
              `${mail.text}\n\rContact: ${mail.to}`
            )}`}
          >
            Email Us
          </a>
        </Button>
      </div>
    </BackgroundForm>
  );
};
