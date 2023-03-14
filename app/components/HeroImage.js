import Image from 'next/image'
import cncPic from '../../public/cnc.jpg'
import { IBM_Plex_Sans_Condensed } from '@next/font/google'
import { IBM_Plex_Sans } from '@next/font/google'

const IBM_Plex_Con = IBM_Plex_Sans_Condensed({subsets: ['latin'], weight: ['600', '700'], variable: '--font-IBM-Plex'})

const IBM_Plex_San = IBM_Plex_Sans({subsets: ['latin'], weight: ['200', '300'], variable: '--font-IBM-Plex'})


const HeroImage = () => {

    return (
        <div id='inicio'>
            <div className="absolute top-80 left-32 w-2/5">
                <h1 className={`text-6xl font-bold text-white mb-14 ${IBM_Plex_Con.variable} font-sans`}>A que nos dedicamos</h1>
                <h2 className={`text-2xl text-white font-light ${IBM_Plex_San.variable} font-sans`}>Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de control numerico computalizado para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h2>
            </div>
            <Image src={cncPic} alt="CNC picture" />
        </div>
    )
}

export default HeroImage;