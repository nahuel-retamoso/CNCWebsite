import Image from 'next/image'
import cncPic from '../../public/cnc.jpg'


const HeroImage = () => {

    return (
        <div id='inicio'>
            <div className="absolute top-80 left-20 w-2/5">
                <h1 className="text-5xl font-mono text-white mb-14">A que nos dedicamos</h1>
                <h1 className="text-2xl text-white">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de control numerico computalizado para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
            </div>
            <Image src={cncPic} alt="CNC picture" />
        </div>
    )
}

export default HeroImage;