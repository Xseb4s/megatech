

const Contact = () => {
    const onSubmit = () => {

    }
  return (
    <section className="custom-bg-contact relative lg:h-[100vh] xl:h-[75vh] text-white" id="contacto">
        <article className="py-24 lg:mx-10 xl:mx-36 flex">
            <div className="flex flex-col gap-4 justify-center relative pl-4 max-sm:p-4 max-sm:w-[100vw]">
                <div className="flex flex-col gap-3 text-center mb-10">
                    <h2 className="text-4xl lg:text-6xl">
                    Contáctanos 
                    </h2>
                    <span>Haz parte de la magia</span>
                </div>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <input type="text" name="from_name" placeholder="Nombre/Empresa" className="bg-transparent border-b-2 p-1 focus:outline-none focus:border-orange-400" required/>
                    <input type="number" name="from_number" placeholder="Celular" className="bg-transparent border-b-2 p-1 focus:outline-none focus:border-yellow-400 appearance-none" required/>
                    <input type="text" name="from_city" placeholder="Ciudad" className="bg-transparent border-b-2 p-1 focus:outline-none focus:border-teal-400" required/>
                    <input type="email" name="from_email" placeholder="Correo" className="bg-transparent border-b-2 p-1 focus:outline-none focus:border-indigo-400" required/>
                    <textarea name="message" cols="30" rows="6" placeholder="¿Un mensaje?" className="bg-transparent border-b-2 p-1 focus:outline-none focus:border-blue-400"/>
                    <button type="submit" className="px-2 py-1 border border-gray-700 w-fit rounded-lg hover:scale-110 transition transition-duration-300 hover:bg-green-700 hover:border-0">Contactar</button>
                </form>
            </div>
        </article>
    </section>
  )
}

export default Contact