import React from "react";
import { SectionContainer } from "./style";
import { Description, PersonalProfile } from "@/components/mulecole";
import { team } from "./fake-data";
import { person } from "./interface";
import { Grid } from "@/components/atom";

export const OurTeam = () => {
  return (
    <SectionContainer container spacing={8}>
      <Grid item sm={12} md={4}>
        <Description
          lineVisibility={true}
          title="Our Team"
          desc="We do more than what is expected. Our work starts with a strategy designed to bring all brand initiatives, channels and activities together in a way that thrives. Our process is based on a collaborative client approach."
        />
      </Grid>
      <Grid item sm={12} md={8}>
        <Grid container spacing={2}>
          {team.map((item: person, index) => {
            return (
              <Grid item xs={6} sm={3} key={index}>
                <PersonalProfile
                  url={item.imageUrl}
                  name={item.name}
                  role={item.role}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
