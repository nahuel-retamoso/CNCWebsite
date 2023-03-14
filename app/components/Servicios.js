'use client'

import Image from 'next/image'
import fresadoPic from '../../public/fresado.jpg'
import laserPic from '../../public/laser.jpg'
import plasmaPic from '../../public/plasma.jpg'
import tornoPic from '../../public/torno.jpg'
import { Bebas_Neue } from '@next/font/google'
import { motion } from 'framer-motion'

const BebasNeue = Bebas_Neue({subsets: ['latin'], weight: '400', variable: '--font-BebasNaue'}) 

const Servicios = () => {
    return (
        <div id='servicios'>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='m-20 w-2/5' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={fresadoPic} alt='Imagen de fresado CNC'/>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center w-3/5' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Fresado</h1>
                    <h1 className="text-xl text-white w-3/5">El fresado es un proceso de mecanizado que utiliza una herramienta de corte rotativa para eliminar material de una pieza de trabajo. El fresado se utiliza comúnmente para crear formas y características complejas en materiales como metales, plásticos y madera. Las máquinas de fresado CNC son capaces de cortar formas precisas y repetitivas a alta velocidad y con una gran precisión dimensional.</h1>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col justify-center items-center w-3/5' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte y grabado laser</h1>
                    <h1 className="text-xl text-white w-3/5">El corte láser es un proceso de corte de alta precisión que utiliza un rayo láser para cortar materiales como metales, plásticos, madera, cuero y tela. Las máquinas de corte láser CNC pueden cortar piezas de trabajo de formas complejas y en una variedad de grosores de material. Además, el corte láser es un proceso sin contacto, lo que significa que no hay herramientas de corte que entren en contacto con la pieza de trabajo, lo que reduce el desgaste de la herramienta y el riesgo de contaminación del material.</h1>
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
                    <h1 className="text-5xl font-mono text-white mb-14">Torneado</h1>
                    <h1 className="text-xl text-white w-3/5">El torneado es un proceso de mecanizado que utiliza una herramienta de corte rotativa para dar forma a un material que gira en un eje. El torneado se utiliza para crear piezas cilíndricas y cónicas, como ejes, engranajes y poleas. Las máquinas de torneado CNC son capaces de producir piezas de alta precisión a alta velocidad y con una gran repetibilidad.</h1>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col w-3/5 justify-center items-center' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte plasma</h1>
                    <h1 className="text-xl text-white w-3/5">El corte plasma es un proceso de corte que utiliza un chorro de plasma para cortar materiales conductores de electricidad como el acero, el aluminio y el cobre. Las máquinas de corte plasma CNC pueden cortar piezas de trabajo de formas complejas y en una variedad de grosores de material. El corte plasma es un proceso rápido y eficiente que produce bordes limpios y suaves en el material cortado.</h1>
                </motion.div>
                <motion.div className='w-2/5 m-20 bg-white' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={plasmaPic} alt='Imagen de fresado CNC' className='w-full' />
                </motion.div>
            </div>
        </div>
    );
}

export default Servicios;