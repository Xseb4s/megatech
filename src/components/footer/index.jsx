import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {motion} from "framer-motion"
import Circuit from "../circuit/";

const Footer = () => {
return (
    <footer className="bg-black text-white flex flex-col relative">
        <Circuit/>
        <div className="mb-16 mt-28 max-sm:px-4 lg:mx-10 xl:mx-36 flex flex-col-reverse lg:flex-row justify-between relative z-50">
            <h2 className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg">
                    Contactanos
                </h3>
                <span className="hover:scale-105 transition transition-duration-300">
                    <a href="https://api.whatsapp.com/message/7EJ3JJN4UHDJC1" target="_blank" aria-label="Este link te lleva Whatsapp" >
                        (+57) 318 418 5592
                    </a>
                </span>
                <div className="flex flex-col gap-3">
                    <a href="mailto:megatech.grupo@gmail.com" target="_blank" aria-label="Este link te lleva al correo" className="hover:scale-105 transition transition-duration-300">
                        megatech.grupo@gmail.com
                    </a>
                    <a href="mailto:desarrollomegatech@gmail.com" target="_blank" aria-label="Este link te lleva al correo" className="hover:scale-105 transition transition-duration-300">
                        desarrollomegatech@gmail.com
                    </a>
                </div>
            </h2>
            <a href="https://www.megatechgrup.com/login" target="_blank" aria-label="Este link te lleva a la pagina">
                <figure className="flex flex-col items-center max-sm:pb-28">
                    <img src="/megatech/megatech.webp" alt="Logo" />
                    <figcaption className="spacebold">
                        MEGA<span className="text-gray-500">TECH GRUPO</span>
                    </figcaption>
                </figure>
            </a>
        </div>
        <hr className="relative z-50" />
        <div className="flex flex-row justify-between w-full max-sm:px-4 lg:w-1/3 my-10 lg:mx-10 xl:mx-36 z-50" id="contacto">
            <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                target="_blank"
                aria-label="Este link te lleva al YpuTube"
                href="https://www.youtube.com/@MegatechInstructivos"
            >
                    <FaYoutube className="w-8 h-8 text-red-500"/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                target="_blank"
                aria-label="Este link te lleva al correo"
                href="mailto:megatech.grupo@gmail.com"
            >
                <IoMdMail className="w-8 h-8 text-yellow-400"/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                target="_blank"
                aria-label="Este link te lleva al Whatsapp"
                href="https://api.whatsapp.com/message/7EJ3JJN4UHDJC1"
            >
                <FaWhatsapp className="w-8 h-8 text-green-500"/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                target="_blank"
                aria-label="Este link te lleva al Instagram"
                href="https://www.instagram.com/grupo_megatech?igsh=azZsdjZhZ2c0ZmEx"
            >
                <FaInstagram  className="w-8 h-8 text-violet-500"/>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                target="_blank"
                aria-label="Este link te lleva al Facebook"
                href="https://www.facebook.com/profile.php?id=61555828239721"
            >
                <FaFacebook  className="w-8 h-8 text-blue-500"/>
            </motion.a>
        </div>
    </footer>
)
}

export default Footer