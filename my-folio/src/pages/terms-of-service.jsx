import React from "react";
import Section from "../ui/layout/Section";
import Heading from "../ui/typography/Heading";
import Text from "../ui/typography/Text";

export default function TermsOfService() {
  return (
    <Section id="terms-of-service">
      <Heading>Terms of Service</Heading>
      <Text>
        Welcome to our website. By using this site, you agree to comply with
        these Terms of Service. Please read them carefully.
      </Text>

      <Heading>Use of Site</Heading>
      <Text>
        You may use this site for personal, non-commercial purposes only. Any
        unauthorized use, reproduction, or distribution of content is prohibited.
      </Text>

      <Heading>User Responsibilities</Heading>
      <Text>
        Users are responsible for any information they submit. Do not post
        harmful, illegal, or offensive content. We reserve the right to remove
        inappropriate content.
      </Text>

      <Heading>Limitation of Liability</Heading>
      <Text>
        We are not liable for any damages or losses arising from the use of this
        website. Use the site at your own risk.
      </Text>

      <Heading>Changes to Terms</Heading>
      <Text>
        We may modify these Terms of Service at any time. Continued use of the
        website constitutes acceptance of the updated terms.
      </Text>
    </Section>
  );
}
