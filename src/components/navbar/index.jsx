import navbar from "@/json/navbar.json";
import ScrollLink from "./scroll-smooth";
import { FaBars } from "react-icons/fa6";
import {motion, useAnimation} from "framer-motion"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ulControls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            ulControls.start({ y: "20px" });
        } else {
            ulControls.start({ y: "-400px" });
        }
    }, [isOpen, ulControls]);

    const list = () => {
        return navbar.map((item, i) => (
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
        <header >
            <nav className="flex items-center justify-between fixed z-30 backdrop-blur-sm bg-black/40 w-full">
                <a href="https://www.megatechgrup.com/login" target="_blank" aria-label="Este link te lleva a la pagina">
                    <figure className="pl-5 p-3 flex items-center">
                        <img src="/megatech/megatech.webp" alt="Mega Tech Grup"  className="h-10"/>
                        <figcaption className="pl-2 text-white spacebold">MEGA<span className="text-gray-300">TECH</span></figcaption>
                    </figure>
                </a>
                <ul className="hidden lg:flex flex-row gap-4 pr-5 text-white">
                    {list()}
                </ul>
                <FaBars className="text-white w-10 h-10 relative z-50 pr-5 sm:hidden" onClick={() => setIsOpen(!isOpen)}/>
                <motion.ul
                    className="absolute backdrop-blur-md right-0 top-12 bg-black/50 rounded-lg p-2 border text-white gap-3 flex flex-col z-50"
                    initial={{ y: "-400px" }}
                    animate={ulControls}
                >
                    {list()}
                </motion.ul>
            </nav>
        </header>
    )
}

export default Navbar