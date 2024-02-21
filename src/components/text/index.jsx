import { useRef } from "react";
import { useInView } from "framer-motion";
import PropTypes from "prop-types";

const Text = ({ children}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center" ref={ref}>
      <span
        className="block translate-x-[-100px] opacity-0"
        style={{
          transform: isInView ? "none" : "translateX(-800px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        >
        {children}
      </span>
    </div>
  );
}
Text.propTypes = {
  children: PropTypes.node.isRequired,
  };
export default Text;