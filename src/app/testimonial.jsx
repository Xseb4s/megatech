import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import testimonial from "@/json/testimonial.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Testimonial = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hiddeArrows, setHiddeArrows] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 460) {
        setHiddeArrows(true);
      } else {
        setHiddeArrows(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageIndex = wrap(0, testimonial.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
    <section className="relative overflow-hidden bg-gray-100" id="testimonios">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
        duration: 0.4,
        }} className="w-full flex flex-col justify-center items-center my-20 lg:my-36 xl:my-36 h-[650px] " >
        <h2 className="text-center font-semibold text-4xl lg:text-3xl xl:text-7xl mb-16 sm:mb-24">Testimonios</h2>
            <AnimatePresence initial={false} custom={direction}>
                <div className="flex flex-col items-center h-full w-full lg:w-[450px] px-2">
                    <motion.figure
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="flex flex-col justify-evenly items-center w-full h-full p-4 border border-blue-100 shadow-2xl rounded-3xl"
                        >
                        <blockquote className="font-light flex flex-col gap-5 mb-4 items-center">
                            <p className="text-justify">{`"${testimonial[imageIndex].desc}"`}</p>
                        </blockquote>

                        <div className="flex gap-3 items-center">
                            <img
                                src={`/megatech/icons/${testimonial[imageIndex].urlImg}.webp`}
                                alt={`${testimonial[imageIndex].urlImg}`}
                                className="h-auto border"
                                style={{ height:"70px", borderRadius: "50%", objectFit: "contain" }}
                            />
                            <figcaption className="font-semibold flex flex-col">
                                {testimonial[imageIndex].title}
                                <span className="text-gray-400 font-light">{testimonial[imageIndex].dir}</span>
                            </figcaption>
                        </div>
                    </motion.figure>
                </div>
            </AnimatePresence>
            {!hiddeArrows && (
              <>
                <div className="absolute arrow-custom xl:top-1/2 left-52 p-1 cursor-pointer " onClick={() => paginate(1)}>
                    <FaChevronLeft className="w-10 h-10"/>
                </div>
                <div className="absolute arrow-custom xl:top-1/2 right-52 p-1 cursor-pointer  " onClick={() => paginate(-1)}>
                    <FaChevronRight className="w-10 h-10"/>
                </div>
              </>
            )}
        </motion.div>
    </section>
    </>
  );
};