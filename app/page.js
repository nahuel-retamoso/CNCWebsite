import Navbar from "./components/Navbar"
import HeroImage from "./components/HeroImage"
import Servicios from "./components/Servicios"
import Materiales from "./components/Materiales"
import Contacto from "./components/Contacto"
import LogoSlider from "./components/LogoSlider"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <LogoSlider/>
      <Servicios/>
      <Materiales/>
      <Contacto/>
    </div>
  )
}
