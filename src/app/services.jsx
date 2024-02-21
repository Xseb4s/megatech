import Text from "@/components/text";
import {motion} from "framer-motion";

const Services = () => {
  return (
    <>
    <div id="servicios" />
    <section  >
      <div className="my-24 lg:mx-10 xl:mx-36">
        <Text>
            <h1 className="text-center text-4xl lg:text-8xl mb-20">Servicios y beneficios</h1>
        </Text>
          <article className="px-5">
            <ul className="grid gap-8 p-4 list-inside list-disc" style={{gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))'}}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.5,
                    delay:0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }} 
                className="flex flex-col p-5 lg:ml-5 border rounded-lg max-sm:text-sm">
                  <li>Portal web disponible 24/7.</li>
                  <li>Acceso desde cualquier lugar del mundo.</li>
                  <li>Información con respaldo de seguridad en la nube.</li>
                  <li>Base de datos de todos los asociados.</li>
                  <li>Bitácora de toda la información relacionada a cada asociado.</li>
                  <li>Descarga archivo plano: autoliquidación de aportes a la seguridad social y parafiscal.</li>
                </motion.div>

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
                className=" flex flex-col p-5 lg:ml-5 border rounded-lg max-sm:text-sm">
                  <li>Implementación de cambios según actualizaciones de los diferentes operadores.</li>
                  <li>Pagos individuales y colectivos.</li>
                  <li>Descarga de comprobantes de pagos: individuales, empresariales o colectivos.</li>
                  <li>Recibos de caja para nuevas afiliaciones.</li>
                  <li>Notificación de pagos pendientes por efectuar.</li>
                  <li>Notificación de planillas pendientes por cerrar.</li>
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
                className=" flex flex-col p-5 lg:ml-5 border rounded-lg max-sm:text-sm">
                  <li>Cierres de Caja (diaria, semanal o mensual).</li>
                  <li>Creación de usuarios alternos para uso interno.</li>
                  <li>Retiros masivos.</li>
                  <li>Historial de cada movimiento realizado en el sistema.</li>
                  <li>Monitoreo de cierres parciales sin importar la cantidad de NIT relacionados al sistema.</li>
                  <li>Consulta de Recaudos.</li>
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
                className=" flex flex-col p-5 lg:ml-5 border rounded-lg max-sm:text-sm">
                  <li>Consulta de planillas y detallado de las mismas.</li>
                  <li>Historial de pagos.</li>
                  <li>Generación de información en archivo Excel.</li>
                  <li>Creación de planillas según las diferentes necesidades.</li>
                  <li>Un software personalizado para su organización.</li>
                  <li>Reduce tiempos y costos.</li>
                </motion.div>                         
            </ul>
            <Text> 
                <h2 className="w-full text-lg mb-5 text-gray-500">Condiciones</h2>
                <ul className="list-decimal w-full text-xs text-gray-400 list-inside">
                  <li>Valores sujetos a cambios según actualizaciones.</li>
                  <li>Cambios en la modalidad de planillas por actualizaciones de los operadores.</li>
                  <li>Tarifas entregadas NO incluyen IVA.</li>
                  <li>MEGATECH no se hace responsable por inconvenientes generados a usuarios que no se encuentran en el sistema.</li>
                  <li>Propuesta valida hasta 30 días calendario, contando desde el momento de envió de este documento.</li>
                </ul>
              
            </Text>
          </article>
      </div>
    </section>
    </>
  )
}

export default Services