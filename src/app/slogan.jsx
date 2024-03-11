import Text from "@/components/text"

const Slogan = () => {
  return (
    <section className="custom-bg-slogan relative h-[80vh] text-white flex justify-center items-center">
        <article className="h-fit lg:px-20">
            <Text>
                <blockquote className="text-2xl md:px-10 lg:text-6xl text-center">
                    <span className="spacebold text-4xl md:text-8xl inline-block w-full mb-10">MEGA<span className="text-gray-400">TECH</span></span>donde la innovación y la tecnología se unen para hacer ¡magia digital!
                </blockquote>
            </Text>
        </article>
    </section>
  )
}

export default Slogan