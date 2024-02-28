import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {motion} from "framer-motion"
import Circuit from "../circuit/";
import ScrollLink from "../navbar/scroll-smooth";
import menu from "@/json/navbar.json"

const Footer = () => {
    const list = () => {
        return menu.map((item, i) => (
            <motion.li
                whileHover={{ scale: 1.1, color: `${item.color}` }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                key={i}
                className="mx-4"
            >
                <ScrollLink href={item.href}>
                    {item.title}
                </ScrollLink>
            </motion.li>
        ));
    }
return (
    <footer className="bg-black text-white flex flex-col relative">
        <Circuit/>
        <div className="mb-16 mt-28 max-sm:px-4 lg:mx-10 xl:mx-36 flex flex-col lg:flex-row justify-between relative z-10">
            
                <a href="https://www.megatechgrup.com/login" target="_blank" aria-label="Este link te lleva a la pagina">
                    <figure className="flex flex-col items-center max-sm:pb-28">
                        <img src="/megatech/megatech.webp" alt="Logo" />
                        <figcaption className="spacebold">
                            MEGA<span className="text-gray-500">TECH GRUPO</span>
                        </figcaption>
                            Tu puente hacia el futuro digital
                    </figure>
                </a>
                <ul className="flex flex-col gap-2">
                    {list()}
                </ul>
            
        </div>
        <hr className="relative z-50" />
        <div className="flex flex-row justify-between w-full max-sm:px-4 lg:w-1/3 my-10 lg:mx-10 xl:mx-36 z-50" >
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