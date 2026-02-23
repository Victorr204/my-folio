import React from "react";

import Section from "../ui/layout/Section";
import Heading from "../ui/typography/Heading";
import Text from "../ui/typography/Text";
import Card from "../ui/layout/Card";

export default function About() {
  return (
    <Section id="about">
      {/* Animated heading */}
      <Heading>About Me</Heading>

      {/* Animated underline accent */}
      <div
        className="mx-auto mb-8 h-1 rounded-full"
        style={{
          width: "80px",
          backgroundColor: "#38BDF8",
        }}
      />

      {/* Description text card */}
      <Card>
        <Text>
          I'm a Computer Science student and passionate Front-End Developer
          focused on building fast, responsive, and visually engaging
          experiences for the web and mobile. I thrive on transforming
          creative ideas into functional, interactive designs using modern
          tools like <span style={{ color: "#38BDF8" }}>React</span> and{" "}
          <span style={{ color: "#38BDF8" }}>React Native</span>. My goal is to
          continually grow as a developer while delivering meaningful digital
          experiences that inspire and connect users. If you need a dedicated
          developer to bring your ideas to life, feel free to reach out!
        </Text>
      </Card>
    </Section>
  );
}
