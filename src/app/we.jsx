import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGoal } from "react-icons/go";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Arrow from "@/components/arrow";
import ScrollLink from "@/components/navbar/scroll-smooth.jsx";
import {motion} from "framer-motion"
import "./app.css"

const We = () => {
  return (
    <section className="text-black text-center relative" id="nosotros">
       <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="transition-all duration-900 ease-in-out delay-500">
        <figure className="w-full relative z-0 overflow-hidden brightness-50 saturate-150 h-[110vh]">
            <img src="/megatech/banner.webp" alt="Nosotros" className="absolute h-full w-full object-cover"/>
            <motion.span initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 1,}} className="absolute bottom-32 lg:bottom-44 left-[38%] lg:left-[47.5%] z-50 text-white ">Conocenos</motion.span>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }} 
            className="absolute bottom-16 lg:bottom-20 xl:bottom-28 left-[45%] lg:left-[50%] xl:left-[49%] z-50"
            >
                <Arrow>
                    <ScrollLink href="#definicion">
                        <HiOutlineChevronDoubleDown className="h-10 w-10 text-white"/>
                    </ScrollLink>
                </Arrow>
            </motion.div>
        </figure>
       </motion.div>
        
        <article className="my-36 flex flex-col justify-center items-center absolute top-0 left-0 lg:left-[8%] xl:top-[5%] xl:left-[7%] text-white">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
                }}  className="text-3xl lg:text-8xl spacebold"
            >
                MEGA<span className="text-gray-500">TECH</span>
            </motion.h1>
            <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}  className="w-1/3 text-md lg:text-xl my-20"
            >
                ¿Quienes somos?
            </motion.span>
            <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 1,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
            }}  className="w-full lg:w-1/3 text-xs max-sm:px-4 lg:text-md xl:text-lg max-sm:leading-loose"
            >
            Somos es una empresa especializada en <strong className="italic ">tecnología e innovación</strong>, contribuyendo a las empresas en la <strong className="italic">transformación tecnológica digital</strong> con eficiencia y <strong className="italic ">mejora de procesos</strong>.
            </motion.p>
        </article>
        

        <div id="definicion"/>
        <div className="flex flex-col my-20 lg:mx-10 xl:mx-36 max-sm:px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }} 
            className="flex flex-col max-sm:items-center lg:flex-row lg:my-10 xl:my-36 justify-center gap-20"
            >
                <figure className="img-size">
                    <img src="/megatech/technology.webp" alt="Tecnología" className="h-full w-full rounded-3xl object-cover" style={{ objectPosition: '90% 20%' }} />
                </figure>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 0.2,
                    }} 
                    className="w-full lg:w-1/4 max-sm:mb-10 flex flex-col justify-center"
                >
                    <h2 className="text-xl lg:text-3xl font-semibold mb-10">Somos <span className="spacebold">MEGA<span className="text-gray-500">TECH</span></span></h2>
                    <p className="text-xs lg:text-sm text-justify leading-loose">
                        Una empresa especializada en <strong className="italic ">tecnología e innovación</strong>, contribuyendo a las empresas en la <strong className="italic ">transformación tecnológica digital</strong> con eficiencia y <strong className="italic ">mejora de procesos</strong>, aportando valor a nuestros aliados a través de nuestra experiencia y conocimiento sumando un conjunto de <strong className="italic ">soluciones tecnológicas</strong> que nos hace diferentes. Nuestro equipo es nuestro principal activo para contribuir al desarrollo de las plataformas tecnológicas para alinearnos con las necesidades y estrategias que requieren las empresas.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.1,
                }}  
                className="flex max-sm:flex-col lg:mx-10 xl:mx-20 lg:my-10 xl:my-28 justify-evenly gap-8"
            >
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    delay: 0.2,
                }} className="w-full lg:w-1/2 p-4 lg:p-10 flex max-sm:flex-col justify-center items-center border rounded-3xl">
                    <GoGoal className="max-sm:w-1/4 max-sm:pb-4 lg:w-1/2 xl:w-1/4 h-auto text-red-600"/>
                    <div className="flex flex-col text-start lg:pl-10">
                        <h2 className="text-xl font-semibold max-sm:text-center">Misión</h2>
                        <p className="my-6 text-sm lg:text-md text-justify">
                        Contribuir a tecnologías más innovadoras para nuestros aliados, generando valor a través de su competitividad y productividad. 
                        </p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    delay: 0.4,
                }} className="w-full lg:w-1/2 p-4 lg:p-10 flex max-sm:flex-col justify-center items-center border rounded-3xl">
                    <HiOutlineLightBulb className="max-sm:w-1/4 max-sm:pb-4 lg:w-full xl:w-1/2 h-auto text-yellow-500"/>
                    <div className="flex flex-col text-start lg:pl-10">
                        <h2 className="text-xl font-semibold max-sm:text-center">Visión</h2>
                        <p className="my-6 text-sm lg:text-md text-justify">
                        Ser la empresa de tecnología más atractiva para todos nuestros aliados, transformando con eficacia la integración de productos de alto nivel tecnológico para mejorar y optimizar los recursos de sus empresas. 
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>

    </section>
  )
}

export default We