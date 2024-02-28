import { useState } from "react";
import { motion} from "framer-motion";
import PropTypes from "prop-types";

const List = ({title, desc}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative border-b-2">

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-2 font-medium"
      >
        {title}
        <motion.div
          className="ml-4"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <ul
        className="py-8 px-2"
        style={{
          position: isOpen ? "relative" : "absolute",
          clipPath: isOpen ? "inset(10% 0% 0% round 10px)" : "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <motion.li className="italic text-gray-700 bg-blue-300/10">
          {desc}
        </motion.li>
      </ul>
    </div>
  );
};
List.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default List;