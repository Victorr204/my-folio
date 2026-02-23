import FadeUp from "../motion/FadeUp";

const ContactSocialsUI = ({ children }) => {
  return (
    <FadeUp delay={0.6}>
      <div className="flex justify-center gap-6 mt-10">
        {children}
      </div>
    </FadeUp>
  );
};

export default ContactSocialsUI;
