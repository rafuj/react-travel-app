import React from "react";
import Destination from "./Destination";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function TopDestinations({ singlePage }) {
  return (
    <Section className="pt-120 pb-120 bg--section">
      {!singlePage && (
        <SectionHeader
          center
          title="Top Destination"
          txt="Quas expedita eos cumque cupiditate recusandae distinctio aspernatur architecto quasi quisquam possimus nisi laudantium facilis."
        />
      )}
      <Destination singlePage={singlePage} />
    </Section>
  );
}
