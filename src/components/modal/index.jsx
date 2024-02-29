import useModalStore from "@/store/modal"
import { FaPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";

const Modal = ({message}) => {
    const {isOpen, closeModal} = useModalStore()

  return (
    <>
    {isOpen ? (
        <div className="bg-black/60 backdrop-blur-sm fixed z-[999] flex items-center justify-center top-0 left-0 bottom-0 right-0">
                <div className="bg-white p-2 w-96 h-96 flex flex-col items-center justify-between rounded-lg">
                    <div className="w-full h-full">
                        <h2 className="border-b-2 text-center p-2"> 
                            <strong className="spacebold mr-2 text-xl">
                                MEGA
                                <span className="text-gray-300">
                                    TECH 
                                </span>
                            </strong>
                            te espera...
                        </h2>
                        <div className="h-full flex flex-col items-center justify-center">
                            <p className="mb-10 text-center">
                                Tu mensaje ha sido {message}                            
                            </p>
                            <FaPaperPlane className="w-20 h-auto text-teal-500"/>
                        </div>
                    </div>
                    <button type="button" className="w-fit border-0 p-1 rounded-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-110 transition transition-duration-300" onClick={() => closeModal(false)}>
                        cerrar
                    </button>
                </div>
            </div>
    ) : null
    }
    </>
  )
}
Modal.PropTypes = {
    message:PropTypes.any.isRequired
};
export default Modal