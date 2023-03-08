import Image from "next/image"
import plasticos from '../../public/plasticos.jpg'
import metales from '../../public/metales.jpg'
import maderas from '../../public/maderas.jpg'

const Materiales = () => {
    return (
        <div className="flex flex-col items-center bg-black pt-20">
            <h2 className="text-white bg-black text-xl">Materiales con los que trabajamos</h2>
            <div className="flex p-10 justify-around bg-black text-white w-full">
                <div className="flex flex-col items-center bg-white/10 p-10 w-1/4">
                    <h2 className="text-3xl mb-10">Metales</h2>
                    <Image className="mb-10" src={metales} alt='metalesPic' />
                    <div className="flex w-full pl-8">
                        <ul className="w-3/4 list-disc">
                            <li>Hierro</li>
                            <li>Acero Inoxidable</li>
                            <li>Aleación de titanio</li>
                        </ul>
                        <ul className="list-disc">
                            <li>Cobre</li>
                            <li>Latón</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white/10 p-10 w-1/4">
                    <h2 className="text-3xl mb-10">Plasticos</h2>
                    <Image className="mb-10" src={plasticos} alt='plasticosPic' />
                    <div className="flex w-full pl-8">
                        <ul className="w-3/4 list-disc">
                            <li>ABS</li>
                            <li>Acrilico</li>
                            <li>Polietileno</li>
                        </ul>
                        <ul className="list-disc">
                            <li>PVC</li>
                            <li>PET</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white/10 p-10 w-1/4">
                    <h2 className="text-3xl mb-10" >Maderas</h2>
                    <Image className="mb-10" src={maderas} alt='maderasPic' />
                    <div className="flex w-full pl-8">
                        <ul className="w-3/4 list-disc">
                            <li>Roble</li>
                            <li>Arce</li>
                            <li>Cerezo</li>
                        </ul>
                        <ul className="list-disc">
                            <li>Nogal</li>
                            <li>Abedul</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materiales