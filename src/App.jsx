import We from "@/app/we"
import Navbar from "@/components/navbar"
import Services from "@/app/services"
import Values from "@/app/values"
import Faq from "@/app/faq"
import Policies from "@/app/policies"
import Footer from "@/components/footer"

function App() {
  return(
    <>
      <Navbar/>
      <main className="poppins-regular">
        <We/>
        <Services/>
        <Values/>
        <Faq/>
        <Policies/>
      </main>
      <Footer/>
    </>
  )
}

export default App
