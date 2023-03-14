'use client'

import { useMotionValueEvent, useScroll, motion, useTransform } from "framer-motion"
import { useState } from "react"

const Navbar = () => {

    const [ scroll, setScroll ] = useState()

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScroll(latest)
        console.log(latest)
    })

    return (
            <motion.div className="fixed w-full z-50 bg-black/40" style={{ height: scroll > 1 ? '70px' : '120px', backgroundColor: scroll > 1 ? 'rgb(64, 66, 88)' : 'rgba(0, 0, 0, 0.5)' , transition:{ duration: 5 } }}>
                <div className="inline-flex space-x-5 h-16 ml-28 items-center text-white" style={{ display: scroll > 1 ? 'none' : '' }}>
                    <h3>11-2390-7856</h3>
                    <h3>cncwebsite@gmail.com</h3>
                </div>
                <div className="bg-blue-100 h-20 w-96 ml-20 flex items-center justify-center" style={{ height: scroll > 1 ? '100%' : '', backgroundColor: scroll > 1 ? 'rgba(0, 0, 0, 0)' : '', color: scroll > 1 ? 'white' : '' }}>
                    <h1 className="text-3xl">CNC Website</h1>
                </div>
                <nav className="absolute bottom-0 right-0 pr-80">
                    <ul className="inline-flex h-16 space-x-20 text-white">
                        <li className="flex items-center"><a href="#inicio">Inicio</a></li>
                        <li className="flex items-center"><a href="#servicios">Servicios</a></li>
                        <li className="flex items-center"><a href="#materiales">Materiales</a></li>
                        <li className="flex items-center"><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </motion.div>
    )
}

export default Navbar