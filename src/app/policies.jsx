import Text from "@/components/text"
import {motion} from "framer-motion"
import { FaClipboardCheck } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { IoMdWarning } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";

const Policies = () => {
  return (
    <>
    <div id="politicas" className="mb-40"/>
    <section>
        <Text>
            <h1 className="text-center text-4xl lg:text-8xl mt-20">Políticas</h1>
        </Text>
        <div className="max-sm:px-4 lg:mx-10 xl:mx-36 my-24 flex flex-col gap-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h2 className="text-xl font-semibold pb-3 flex items-center"> <FaClipboardCheck className="w-5 text-green-700 mr-4"/> Política de Calidad:</h2>
                
                <motion.p 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    Brindar a las diferentes empresas soluciones que permitan mejorar sus procesos y reducir la carga operativa, teniendo como principio general la dinámica y simplicidad de la producción del día a día, de esta manera nuestros clientes aumentaran potencialmente la competitividad en el mercado, teniendo siempre a la mano soluciones que se adaptan a sus necesidades, a través de las herramientas que brinda nuestro software MEGATECH.
                </motion.p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h2 className="text-xl font-semibold pb-3 flex items-center"> <GiStairsGoal className="w-5 text-red-500 mr-4"/> Objetivos:</h2>
                <motion.ul initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className="list-inside list-disc">
                    <li>Mejora constante de cada uno de los procesos.</li>
                    <li>Contamos con sentido de pertenencia y compromiso en nuestro equipo de trabajo, cada uno de nuestros colaboradores entiende la importancia de la mejora constante.</li>
                    <li>Innovar y mejorar siempre nuestros servicios ofrecidos para cumplir con altos estándares de calidad y poder brindar satisfacción a cada uno de nuestros clientes.</li>
                    <li>Brindar a las empresas un software que satisfagan las necesidades de cada una dentro del mercado de la seguridad social.</li>
                </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
                }}>
                <h2 className="text-xl font-semibold pb-3 flex items-center"> <IoMdWarning className="w-5 text-yellow-400 mr-4"/> Importante:</h2>
                <motion.p initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                    las Reformas, Decretos y/o Resoluciones por parte del Ministerio de Protección Social y operadores de información, generan constante cambios y actualizaciones en los diferentes operadores de pagos, es por ello que NO garantizamos que los procesos enseñados durante las capacitaciones sean siempre los mismos o que la modalidad de liquidar las planillas permanezca tal cual se realizó al principio del proceso.
                </motion.p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h2 className="text-xl font-semibold pb-3 flex items-center"> <PiUsersThreeFill className="w-5 text-indigo-500 mr-4"/>Política de tratamiento de datos:</h2>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <p>Las partes exponen que las negociaciones llevadas a cabo (o el proyecto a desarrollar en conjunto) entre el titular de la información descrita a continuación y el receptor de la misma, han involucrado o involucrarán divulgación escrita o verbal y comunicación a miembros de su equipo de trabajo, de documentos propios o controlados por alguno de los mencionados anteriormente, la que puede incluir, listas de clientes, información personal o empresarial y otros datos en forma oral o escrita. relacionada con el proceso, MEGATECH se compromete a efectuar una adecuada custodia y reserva de la información y gestión -es decir tratamiento- de los datos suministrados por la empresa al interior de las redes y bases de datos (físicas, verbales y/o electrónicas) en donde se realice su recepción y tratamiento en general.</p>
                    <span className="text-gray-400">
                        <a target="_blank" href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" className="underline" aria-label="Este link te lleva a la pagina de Ley de Protección de Datos Personales">
                            Ley de Protección de Datos Personales - Ley 1581 de 2012.
                        </a>
                    </span>
                </motion.div>
            </motion.div>
        </div>
    </section>
    </>
    )
}

export default Policies