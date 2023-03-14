'use client'

import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import { useState } from "react"
import { Audiowide } from "@next/font/google"
import { IBM_Plex_Sans } from '@next/font/google'


const audio = Audiowide({subsets: ['latin'], weight: '400', variable: '--font-Audiowidex'})

const IBM_Plex_San = IBM_Plex_Sans({subsets: ['latin'], weight: '400', variable: '--font-IBM-Plex'})

const Navbar = () => {

    const [ scroll, setScroll ] = useState()

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScroll(latest)
    })

    return (
            <motion.div className="fixed w-full z-50 bg-black/40" style={{ height: scroll > 1 ? '70px' : '120px', backgroundColor: scroll > 1 ? 'rgb(25, 25, 25)' : 'rgba(0, 0, 0, 0.5)' }}>
                <div className={`inline-flex space-x-9 h-16 ml-28 items-center text-white text-base ${IBM_Plex_San.variable} font-sans`} style={{ display: scroll > 1 ? 'none' : '' }}>
                    <h3>11-2390-7856</h3>
                    <h3>cncwebsite@gmail.com</h3>
                </div>
                <div className={`bg-blue-100 h-20 w-96 ml-20 flex items-center justify-center text-5xl ${audio.variable} font-display`} style={{ height: scroll > 1 ? '100%' : '', backgroundColor: scroll > 1 ? 'rgba(0, 0, 0, 0)' : '', color: scroll > 1 ? 'rgb(219, 169, 120)' : '' }}>
                    <h3>CNC Website</h3>
                </div>
                <nav className="absolute bottom-0 right-0 pr-80">
                    <ul className={`inline-flex h-16 space-x-20 text-white  ${IBM_Plex_San.variable} font-sans`}>
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