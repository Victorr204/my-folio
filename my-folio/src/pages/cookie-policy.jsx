import React from "react";
import Section from "../ui/layout/Section";
import Heading from "../ui/typography/Heading";
import Text from "../ui/typography/Text";

export default function CookiePolicy() {
  return (
    <Section id="cookie-policy">
      <Heading>Cookie Policy</Heading>
      <Text>
        Our website uses cookies to enhance your browsing experience. This
        Cookie Policy explains what cookies are, how we use them, and your
        choices regarding cookies.
      </Text>

      <Heading>What Are Cookies?</Heading>
      <Text>
        Cookies are small text files stored on your device by your web browser.
        They help websites remember your preferences and improve functionality.
      </Text>

      <Heading>How We Use Cookies</Heading>
      <Text>
        We use cookies to:
        <ul className="list-disc ml-6 mt-2">
          <li>Remember your site preferences.</li>
          <li>Analyze website traffic and performance.</li>
          <li>Provide personalized content.</li>
        </ul>
      </Text>

      <Heading>Your Choices</Heading>
      <Text>
        You can control or disable cookies through your browser settings. Please
        note that some website features may not function properly if cookies are
        disabled.
      </Text>

      <Heading>Changes to This Policy</Heading>
      <Text>
        We may update this Cookie Policy from time to time. Updated versions
        will be posted on this page with the effective date.
      </Text>
    </Section>
  );
}
