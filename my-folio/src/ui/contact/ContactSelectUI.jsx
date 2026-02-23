import FadeUp from "../motion/FadeUp";
import { colors } from "../theme/colors";

const ContactSelectUI = ({ value, onChange, options }) => {
  return (
    <FadeUp delay={0.4}>
      <div className="mt-10 text-center">
        <label
          className="block mb-3 font-medium"
          style={{ color: colors.primary }}
        >
          Contact me for
        </label>

        <select
          value={value}
          onChange={onChange}
          className="
            w-full max-w-sm
            px-4 py-3
            rounded-xl
            outline-none
          "
          style={{
            background: colors.background,
            color: colors.textPrimary,
            border: `1px solid ${colors.border}`,
          }}
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </FadeUp>
  );
};

export default ContactSelectUI;
