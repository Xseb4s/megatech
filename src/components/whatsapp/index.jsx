import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {
  return (
    <a href="https://api.whatsapp.com/message/7EJ3JJN4UHDJC1" rel="noreferrer" target="_blank" aria-label="Comunicarse al Whatsapp" className="hidden lg:fixed z-50 bottom-5 right-10 flex flex-col items-center text-green-700"> 
        Escribenos<FaWhatsapp className="w-16 h-16  text-green-700"/>  
    </a>
  )
}

export default Whatsapp