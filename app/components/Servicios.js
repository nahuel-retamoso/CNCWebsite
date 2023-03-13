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
        <div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='w-full m-20' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={fresadoPic} alt='Imagen de fresado CNC'/>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Fresado CNC</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col justify-center items-center' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte y grabado laser</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </motion.div>
                <motion.div className='w-full m-20' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={laserPic} alt='Imagen de fresado CNC'/>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen '>
                <motion.div className='w-full m-20' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={tornoPic} alt='Imagen de fresado CNC'/>
                </motion.div>
                <motion.div className='flex flex-col justify-center items-center' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Torno CNC</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </motion.div>
            </div>
            <div className='bg-black flex items-center overflow-hidden h-screen'>
                <motion.div className='flex flex-col justify-center items-center' initial={{ x: '-100%'}} whileInView={{ x: 0, transition: { duration: 0.5}}}>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte plasma</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </motion.div>
                <motion.div className='w-full m-20 bg-white' initial={{ x: '100%'}} whileInView={{ x: 0, transition: { duration: 0.7}}}>
                    <Image src={plasmaPic} alt='Imagen de fresado CNC'/>
                </motion.div>
            </div>
        </div>
    );
}

export default Servicios;