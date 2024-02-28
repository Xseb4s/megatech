import faq from "@/json/faq.json";
import List from "@/components/list";
import Text from "@/components/text";
import {motion} from "framer-motion"

const Faq = () => {
  const list = () => {
    return faq.map((item, i) => (
      <List key={i} title={item.title} desc={item.desc}/>
    ))
  }
  return (
    <>
      <div id="faq" className="mb-40"/>
      <section >
        <Text>
          <h1 className="text-4xl lg:text-8xl text-center">Preguntas frecuentes</h1>
        </Text>
        <motion.article
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="max-sm:px-4 lg:mx-10 xl:mx-36 my-24 p-2 flex max-sm:flex-col-reverse justify-between ">
          <div className="flex flex-col lg:w-1/2">
            {list()}
          </div>
          <figure>
            <img src="/megatech/asking.webp" alt="Pregunta" />
          </figure>
        </motion.article>
      </section>
    </>
  )
}

export default Faq