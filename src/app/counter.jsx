
const Counter = () => {
  return (
    <section className="custom-bg-counter relative text-white h-28">
        <article className="w-full h-full flex justify-evenly items-center">
            <div className="h-fit items-center flex flex-col">
                <h2 className="text-xl font-bold">100%</h2>
                <span className="text-sm">Calidad garantizada</span>
            </div>
            <div className="h-fit items-center flex flex-col">
                <h2 className="text-xl font-bold">250+</h2>
                <span className="text-sm">Aliados a nivel nacional</span>
            </div>
            <div className="h-fit items-center flex flex-col">
                <h2 className="text-xl font-bold">70</h2>
                <span className="text-sm">Empresas relacionadas</span>
            </div>
        </article>
    </section>
  )
}

export default Counter