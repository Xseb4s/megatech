import We from "@/app/we"
import Navbar from "@/components/navbar"
import Services from "@/app/services"
import Values from "@/app/values"
import Faq from "@/app/faq"
import Policies from "@/app/policies"
import Footer from "@/components/footer"
import Counter from "./app/counter"
import Slogan from "./app/slogan"
import Contact from "./app/contact"
import Whatsapp from "./components/whatsapp"
import { Testimonial } from "./app/testimonial"

function App() {
  return(
    <>
      <Navbar/>
      <main className="poppins-regular relative">
        <We/>
        <Counter/>
        <Services/>
        <Values/>
        <Testimonial/>
        <Slogan/>
        <Faq/>
        <Policies/>
        <Contact/>
        <Whatsapp/>
      </main>
      <Footer/>
    </>
  )
}

export default App
