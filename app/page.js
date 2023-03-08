import Navbar from "./components/Navbar"
import HeroImage from "./components/HeroImage"
import Servicios from "./components/Servicios"
import Materiales from "./components/Materiales"
import Contacto from "./components/Contacto"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Servicios/>
      <Materiales/>
      <Contacto/>
    </div>
  )
}
