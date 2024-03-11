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
        <article className="pt-24 pb-20 flex flex-col justify-between items-center text-white banner relative h-[105vh]">
            <figure className="w-72 h-36">
                <motion.a initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
                }} href="https://www.megatechgrup.com/login" target="_blank">
                    <img src="/megatech/megatech.webp" alt="Logo" className="w-full h-full"/>
                </motion.a>
            </figure>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
                }}  className="sm:text-3xl md:text-7xl spacebold flex flex-row  mt-10"
            >
                MEGA
                <span className="text-gray-400 ">TECH</span>
            </motion.h1>
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}  className="w-1/3 sm:text-md md:text-2xl my-6 lg:my-10 xl:my-20"
            >
                ¿Quienes somos?
            </motion.span>
            <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 1,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
            }}  className="w-full lg:w-1/3 text-sm sm:px-4 lg-px-0 md:text-lg xl:text-xl max-sm:leading-loose"
            >
            Somos es una empresa especializada en <strong className="italic ">tecnología e innovación</strong>, contribuyendo a las empresas en la <strong className="italic">transformación tecnológica digital</strong> con eficiencia y <strong className="italic ">mejora de procesos</strong>.
            </motion.p>

            <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="transition-all duration-900 ease-in-out delay-500 relative flex flex-col items-center"
            >
                <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }} transition={{
                duration: 1,}} 
                className="z-50 text-white "
                >
                    Conocenos
                </motion.span>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{
                    duration: 0.2,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="z-50"
                >
                    <Arrow>
                        <ScrollLink href="#definicion">
                            <HiOutlineChevronDoubleDown className="h-10 w-10 text-white"/>
                        </ScrollLink>
                    </Arrow>
                </motion.div>
            </motion.div>           
        </article>

        <div id="definicion"/>
        <div className="flex flex-col my-20 sm:px-10 lg:mx-10 2xl:mx-36 max-sm:px-4">
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
            className="flex flex-col-reverse max-lg:items-center lg:flex-row sm:mb-10 md:my-10 xl:my-36 justify-center gap-20"
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
                    className="w-full lg:w-1/3 flex flex-col justify-center"
                >
                    <h2 className="text-xl lg:text-3xl font-semibold mb-10">Somos <span className="spacebold">MEGA<span className="text-gray-500">TECH</span></span></h2>
                    <p className="text-xs md:px-10 md:text-sm text-justify leading-loose">
                        Una empresa especializada en <strong className="italic ">tecnología e innovación</strong>, contribuyendo a las empresas en la <strong className="italic ">transformación tecnológica digital</strong> con eficiencia y <strong className="italic ">mejora de procesos</strong>, aportando valor a nuestros aliados a través de nuestra experiencia y conocimiento sumando un conjunto de <strong className="italic ">soluciones tecnológicas</strong> que nos hace diferentes. Nuestro equipo es nuestro principal activo para contribuir al desarrollo de las plataformas tecnológicas para alinearnos con las necesidades y estrategias que requieren las empresas.&nbsp;
                        <a href="https://www.megatechgrup.com/login" className="underline font-semibold text-indigo-600" target="_blank" aria-label="Este link te lleva a la pagina">
                            Visitar
                        </a>
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
                className="flex max-lg:flex-col md:mx-10 xl:mx-20 lg:my-10 xl:my-28 justify-evenly max-lg:items-center gap-8"
            >
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.3,
                    delay: 0.2,
                }} className="w-full md:w-1/2 p-4 lg:p-10 flex max-lg:flex-col justify-center items-center border rounded-3xl hover:shadow-lg transition transition-duration-300">
                    <GoGoal className="w-1/4 lg:w-1/3 max-sm:pb-4 xl:w-1/4 h-auto text-red-600"/>
                    <div className="flex flex-col text-start lg:pl-10">
                        <h2 className="text-xl font-semibold max-md:text-center">Misión</h2>
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
                }} className="w-full md:w-1/2 p-4 lg:p-10 flex max-lg:flex-col justify-center items-center border rounded-3xl hover:shadow-lg transition transition-duration-300">
                    <HiOutlineLightBulb className="w-1/4 lg:w-full max-sm:pb-4 xl:w-1/2 h-auto text-yellow-500"/>
                    <div className="flex flex-col text-start lg:pl-10">
                        <h2 className="text-xl font-semibold max-md:text-center">Visión</h2>
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