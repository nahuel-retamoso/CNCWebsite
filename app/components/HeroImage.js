import Image from 'next/image'
import cncPic from '../../public/cnc.jpg'

const HeroImage = () => {
    return (
        <div>
            <div className="absolute top-96 left-20 w-2/5">
                <h1 className="text-5xl font-mono text-white mb-14">CNC Machining</h1>
                <h1 className="text-2xl text-white">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
            </div>
            <Image src={cncPic} alt="CNC picture" />
            <div className='w-full h-28 bg-black/90'></div>
        </div>
    )
}

export default HeroImage;