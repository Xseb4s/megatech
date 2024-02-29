
const Counter = () => {
  return (
    <section className="custom-bg-counter relative text-white h-28">
        <article className="w-full h-full flex justify-evenly items-center">
            <div className="h-fit items-center flex flex-col text-center ">
                <h2 className="text-xl font-bold max-sm:text-sm">100%</h2>
                <span className="text-sm max-sm:text-xs">Calidad garantizada</span>
            </div>
            <div className="h-fit items-center flex flex-col text-center ">
                <h2 className="text-xl font-bold max-sm:text-sm">250+</h2>
                <span className="text-sm max-sm:text-xs">Aliados a nivel nacional</span>
            </div>
            <div className="h-fit items-center flex flex-col text-center ">
                <h2 className="text-xl font-bold max-sm:text-sm">70+</h2>
                <span className="text-sm max-sm:text-xs">Empresas relacionadas</span>
            </div>
        </article>
    </section>
  )
}

export default Counter