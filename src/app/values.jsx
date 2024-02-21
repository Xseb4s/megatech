import Text from "@/components/text"
import {motion} from "framer-motion"

const Values = () => {
  return (
    <>
    <div id="valores" className="mb-40"/>
    
    <section  className="bg-black text-white">
      <div className="my-24 lg:pb-10 lg:mx-10 xl:mx-36">
        <Text>
          <h1 className="text-4xl lg:text-8xl text-center pt-10 mb-20">Valores</h1>
        </Text>
        <article className="max-sm:pb-12">
          <div className="grid gap-8 p-4" style={{gridTemplateColumns:'repeat(auto-fit, minmax(270px, 1fr))'}}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
              duration: 0.5,
              delay:0.2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            className="flex flex-col items-center mx-8">
              <figure className="relative">
                <img src="/assets/security.png" alt="Seguridad" className="h-52 w-52"/>
                <span className="absolute text-4xl" style={{top:"35%", left:"45%"}}>1</span>
              </figure>
              <div className="border-2 p-4 rounded-lg mt-4 border-orange-400 bg-orange-400/10">
                <h2 className="font-semibold text-xl text-center mb-4">Seguridad</h2>
                <p className="text-sm lg:text-sm lg:text-md border-t-2  border-orange-400 w-52 pt-4">Garantizar la protección de la información es nuestro principal pilar, de esta forma hemos logrado generar un ambiente de confianza y credibilidad a nivel nacional.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
              duration: 0.5,
              delay:0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            className="flex flex-col items-center mx-8">
              <figure className="relative">
                <img src="/assets/innovation.png" alt="Innovación" className="h-52 w-52"/>
                <span className="absolute text-4xl" style={{top:"35%", left:"45%"}}>2</span>
              </figure>
              <div className="border-2 p-4 rounded-lg mt-4 border-yellow-300 bg-yellow-300/10">
                <h2 className="font-semibold text-xl text-center mb-4">Innovaci&oacute;n</h2>
                <p className="text-sm lg:text-md border-t-2 border-yellow-300 w-52 pt-4">
                Desarrollar nuevos procesos que permitan la optimización empresarial, logrando ir a la par con la actualidad.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
              duration: 0.5,
              delay:0.4,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            className="flex flex-col items-center mx-8">
              <figure className="relative">
                <img src="/assets/service.png" alt="Servicio" className="h-52 w-52"/>
                <span className="absolute text-4xl" style={{top:"35%", left:"45%"}}>3</span>
              </figure>
              <div className="border-2 p-4 rounded-lg mt-4 border-green-400 bg-green-400/10">
                <h2 className="font-semibold text-xl text-center mb-4">Servicio</h2>
                <p className="text-sm lg:text-md border-t-2 w-52 border-green-400 pt-4">
                Ofrecer calidad en cada uno de los procesos administrativos, ayudando a nuestros clientes a cumplir sus objetivos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
              duration: 0.5,
              delay:0.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            className="flex flex-col items-center mx-8">
              <figure className="relative">
                <img src="/assets/team.png" alt="Trabajo en equipo" className="h-52 w-52"/>
                <span className="absolute text-4xl" style={{top:"35%", left:"45%"}}>4</span>
              </figure>
              <div className="border-2 p-4 rounded-lg mt-4 border-indigo-600 bg-indigo-600/10">
                <h2 className="font-semibold text-xl text-center mb-4">Trabajo en equipo</h2>
                <p className="text-sm lg:text-md border-t-2 w-52 border-indigo-600 pt-4">
                Potenciar nuestras mejores virtudes, siendo nuestro mayor distintivo para lograr integrar cada uno de los procesos con un mismo objetivo, el cual contribuye a optimizar los recursos de las empresas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
              duration: 0.5,
              delay:0.6,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
              }
            }}
            className="flex flex-col items-center mx-8">
              <figure className="relative">
                <img src="/assets/empathy.png" alt="Empatía" className="h-52 w-52"/>
                <span className="absolute text-4xl" style={{top:"35%", left:"45%"}}>5</span>
              </figure>
              <div className="border-2 p-4 rounded-lg mt-4 border-blue-300 bg-blue-300/10">
                <h2 className="font-semibold text-xl text-center mb-4">Empat&iacute;a</h2>
                <p className="text-sm lg:text-md border-t-2 w-52 border-blue-300 pt-4">
                Entender las necesidades en un mercado tan amplio, donde la construcción de nuevas oportunidades nos hace diferentes, permitiendo lograr el crecimiento unificado
                </p>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}

export default Values