import FadeUp from "../motion/FadeUp";
import Button from "../buttons/Button";

const ContactActionsUI = ({ children }) => {
  return (
    <FadeUp delay={0.25}>
      <div className="mt-8 flex justify-center">
        {children}
      </div>
    </FadeUp>
  );
};

export default ContactActionsUI;
