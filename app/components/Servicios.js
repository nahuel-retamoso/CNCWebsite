import Image from 'next/image'
import fresadoPic from '../../public/fresado.jpg'
import laserPic from '../../public/laser.jpg'
import plasmaPic from '../../public/plasma.jpg'
import tornoPic from '../../public/torno.jpg'

const Servicios = () => {
    return (
        <div>
            <div className='bg-black flex'>
                <Image src={fresadoPic} alt='Imagen de fresado CNC' className='w-1/3 m-20'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-5xl font-mono text-white mb-14">Fresado CNC</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </div>
            </div>
            <div className='bg-black flex'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte y grabado laser</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </div>
                <Image src={laserPic} alt='Imagen de fresado CNC' className='w-1/3 m-20'/>
            </div>
            <div className='bg-black flex'>
                <Image src={tornoPic} alt='Imagen de fresado CNC' className='w-1/3 m-20'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-5xl font-mono text-white mb-14">Torno CNC</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </div>
            </div>
            <div className='bg-black flex'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-5xl font-mono text-white mb-14">Corte plasma</h1>
                    <h1 className="text-2xl text-white w-3/5">Nuestra empresa de CNC es una empresa líder en el mercado de mecanizado de precisión. Ofrecemos servicios de fresado y torneado CNC para una amplia variedad de aplicaciones en una variedad de materiales, incluyendo metales, plásticos y madera.</h1>
                </div>
                <Image src={plasmaPic} alt='Imagen de fresado CNC' className='w-1/3 m-20'/>
            </div>
        </div>
    );
}

export default Servicios;