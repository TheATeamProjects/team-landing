import React from "react";
import { ContactForm, Description } from "@/components/mulecole";
import { CenterDiv } from "./style";
import { Grid } from "@/components/atom";

export const ContactOurTeam = () => {
  return (
    <CenterDiv>
      <Grid container spacing={8} className="direction">
        <Grid item sm={12} md={6}>
          <ContactForm />
        </Grid>
        <Grid item sm={12} md={6}>
          <Description
            lineVisibility={false}
            title="Just Tell Us What You Want?"
            desc="We do more than what is expected. Our work starts with a strategy designed to bring all brand initiatives, channels and activities together in a way that thrives. Our process is based on a collaborative client approach."
          />
        </Grid>
      </Grid>
    </CenterDiv>
  );
};
