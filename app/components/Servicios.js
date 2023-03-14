'use client'

import Image from 'next/image'
import fresadoPic from '../../public/fresado.jpg'
import laserPic from '../../public/laser.jpg'
import plasmaPic from '../../public/plasma.jpg'
import tornoPic from '../../public/torno.jpg'
import { IBM_Plex_Sans_Condensed } from '@next/font/google'
import { IBM_Plex_Sans } from '@next/font/google'
import { motion } from 'framer-motion'

const IBM_Plex_Con = IBM_Plex_Sans_Condensed({subsets: ['latin'], weight: '600', variable: '--font-IBM-Plex'})

const IBM_Plex_San = IBM_Plex_Sans({subsets: ['latin'], weight: '200', variable: '--font-IBM-Plex'})

const Servicios = () => {
    return (
        <div id='servicios'>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='m-20 w-2/5' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={fresadoPic} alt='Imagen de fresado CNC'/>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center w-3/5' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h2 className={`text-5xl text-stone-300 mb-14 ${IBM_Plex_Con.variable} font-sans` }>Fresado</h2>
                    <p className={`text-xl text-white w-3/5 ${IBM_Plex_San.variable} font-sans`}>El fresado es un proceso de mecanizado que utiliza una herramienta de corte rotativa para eliminar material de una pieza de trabajo. El fresado se utiliza comúnmente para crear formas y características complejas en materiales como metales, plásticos y madera. Las máquinas de fresado CNC son capaces de cortar formas precisas y repetitivas a alta velocidad y con una gran precisión dimensional.</p>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col justify-center items-center w-3/5' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h2 className={`text-5xl font-mono text-stone-300 mb-14 ${IBM_Plex_Con.variable} font-sans`}>Corte y grabado laser</h2>
                    <p className={`text-xl text-white w-3/5 ${IBM_Plex_San.variable} font-sans`}>El corte láser es un proceso de corte de alta precisión que utiliza un rayo láser para cortar materiales como metales, plásticos, madera, cuero y tela. Las máquinas de corte láser CNC pueden cortar piezas de trabajo de formas complejas y en una variedad de grosores de material. Además, el corte láser es un proceso sin contacto, lo que significa que no hay herramientas de corte que entren en contacto con la pieza de trabajo, lo que reduce el desgaste de la herramienta y el riesgo de contaminación del material.</p>
                </motion.div>
                <motion.div className='w-2/5 m-20' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={laserPic} alt='Imagen de fresado CNC'/>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen '>
                <motion.div className='w-2/5 m-20' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={tornoPic} alt='Imagen de fresado CNC'/>
                </motion.div>
                <motion.div className='flex flex-col w-3/5 justify-center items-center' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h2 className={`text-5xl font-mono text-stone-300 mb-14 ${IBM_Plex_Con.variable} font-sans`}>Torneado</h2>
                    <p className={`text-xl text-white w-3/5 ${IBM_Plex_San.variable} font-sans`}>El torneado es un proceso de mecanizado que utiliza una herramienta de corte rotativa para dar forma a un material que gira en un eje. El torneado se utiliza para crear piezas cilíndricas y cónicas, como ejes, engranajes y poleas. Las máquinas de torneado CNC son capaces de producir piezas de alta precisión a alta velocidad y con una gran repetibilidad.</p>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col w-3/5 justify-center items-center' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h2 className={`text-5xl font-mono text-stone-300 mb-14 ${IBM_Plex_Con.variable} font-sans`}>Corte plasma</h2>
                    <p className={`text-xl text-white w-3/5 ${IBM_Plex_San.variable} font-sans`}>El corte plasma es un proceso de corte que utiliza un chorro de plasma para cortar materiales conductores de electricidad como el acero, el aluminio y el cobre. Las máquinas de corte plasma CNC pueden cortar piezas de trabajo de formas complejas y en una variedad de grosores de material. El corte plasma es un proceso rápido y eficiente que produce bordes limpios y suaves en el material cortado.</p>
                </motion.div>
                <motion.div className='w-2/5 m-20 bg-white' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={plasmaPic} alt='Imagen de fresado CNC' className='w-full' />
                </motion.div>
            </div>
        </div>
    );
}

export default Servicios;