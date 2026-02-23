import React from "react";
import Section from "../ui/layout/Section";
import Heading from "../ui/typography/Heading";
import Text from "../ui/typography/Text";

export default function PrivacyPolicy() {
  return (
    <Section id="privacy-policy">
      <Heading>Privacy Policy</Heading>
      <Text>
        Your privacy is important to us. This Privacy Policy explains what
        information we collect, how we use it, and how we protect your data
        when you use our website.
      </Text>

      <Heading>Information We Collect</Heading>
      <Text>
        We may collect personal information such as your name, email, and
        messages you send through our contact forms. We also automatically
        collect non-identifiable information like browser type, IP address, and
        browsing behavior.
      </Text>

      <Heading>How We Use Your Information</Heading>
      <Text>
        Your information is used to respond to inquiries, improve website
        experience, and send updates if you opt-in. We do not sell your
        personal data to third parties.
      </Text>

      <Heading>Data Security</Heading>
      <Text>
        We take reasonable measures to protect your information from
        unauthorized access, disclosure, or alteration. However, no online
        transmission is completely secure.
      </Text>

      <Heading>Changes to This Policy</Heading>
      <Text>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with the updated date.
      </Text>
    </Section>
  );
}
