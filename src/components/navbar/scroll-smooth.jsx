import PropTypes from "prop-types";


const ScrollLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
  };

  return (
    <a href={`${href}`} onClick={handleClick}>
      <>{children}</>
    </a>
  );
};
ScrollLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default ScrollLink;