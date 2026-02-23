import React, { useState, useRef } from "react";
import Section from "../ui/layout/Section";
import Heading from "../ui/typography/Heading";
import Text from "../ui/typography/Text";
import Button from "../ui/buttons/Button";
import ContactCardUI from "../ui/contact/ContactCardUI";
import ContactSocialsUI from "../ui/contact/ContactSocialsUI";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);

  const whatsappNumber = "2349037306845";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Message");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:victorreuben707@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailClick = () => window.location.href = "mailto:victorreuben707@gmail.com";
  const handleWhatsappClick = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  const handleLocationClick = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="contact">
      {/* Centered heading */}
      <div className="text-center mb-12">
        <Heading>Contact Me</Heading>
        <Text>
          Let’s build something amazing together. I’m open to collaborations, freelance projects, and opportunities.
        </Text>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Contact Form inside a ContactCardUI */}
        <div className="md:w-1/2">
          <ContactCardUI>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit">Send Message</Button>
              {submitted && <p className="text-green-500 mt-2">Message sent! Check your email.</p>}
            </form>
          </ContactCardUI>
        </div>

        {/* Right: Contact Info Blocks */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <ContactCardUI onClick={handleEmailClick} className="cursor-pointer hover:scale-105 transition-transform flex items-center gap-3">
            <FaEnvelope size={22} />
            victorreuben707@gmail.com
          </ContactCardUI>

          <ContactCardUI onClick={handleWhatsappClick} className="cursor-pointer hover:scale-105 transition-transform flex items-center gap-3">
            <FaWhatsapp size={22} />
            +2349037306845
          </ContactCardUI>

          <ContactCardUI onClick={handleLocationClick} className="cursor-pointer hover:scale-105 transition-transform flex items-center gap-3">
            <FaMapMarkerAlt size={22} />
            Lagos, Nigeria
          </ContactCardUI>
        </div>
      </div>

      {/* Full-width Map */}
      <div ref={mapRef} className="mt-12 rounded-lg overflow-hidden h-64">
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Lagos,Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

     
    </Section>
  );
}
