'use client'

import zanella from '../../public/zanella.png'
import ypf from '../../public/ypf.png'
import techint from '../../public/techint.png'
import patagonia from '../../public/patagonia.png'
import ford from '../../public/ford.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IBM_Plex_Sans_Condensed } from '@next/font/google'

const IBM_Plex_Con = IBM_Plex_Sans_Condensed({subsets: ['latin'], weight: '500', variable: '--font-IBM-Plex'})

const LogoSlider = () => {
    return (
        <div className='bg-black/90 text-center'>
                <h2 className={`p-6 text-2xl bg-black ${IBM_Plex_Con.variable} font-sans text-stone-300`}>Nuestros clientes</h2>
                <div className='flex flex-row overflow-hidden'>
                    <motion.div animate={{  x: "-100%", transition: { duration: 20, ease: "linear", repeat: Infinity,repeatType: "loop"},}} className='flex flex-grow-1 flex-shrink-0 w-full justify-around items-center  h-28 overflow-hidden'>
                            <Image className='w-16 grayscale brightness-75' src={zanella} alt='zanella'/>

                            <Image className='w-36 grayscale brightness-50' src={ford} alt='ford'/>

                            <Image className='w-36 grayscale brightness-50' src={patagonia} alt='patagonia'/>
                    
                            <Image className='w-36 grayscale brightness-50' src={techint} alt='techint'/>
                    
                            <Image className='w-36 grayscale' src={ypf} alt='ypf'/>
                    </motion.div>
                    <motion.div animate={{  x: "-100%", transition: { duration: 20, ease: "linear", repeat: Infinity,repeatType: "loop"},}} className='flex flex-grow-1 flex-shrink-0 w-full justify-around items-center  h-28 overflow-hidden'>
                            <Image className='w-16 grayscale brightness-75' src={zanella} alt='zanella'/>

                            <Image className='w-36 grayscale brightness-50' src={ford} alt='ford'/>

                            <Image className='w-36 grayscale brightness-50' src={patagonia} alt='patagonia'/>
                    
                            <Image className='w-36 grayscale brightness-50' src={techint} alt='techint'/>
                    
                            <Image className='w-36 grayscale' src={ypf} alt='ypf'/>
                    </motion.div>
                </div>
            </div>
    )
}

export default LogoSlider