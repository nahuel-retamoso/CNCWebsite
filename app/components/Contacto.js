import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from '@next/font/google'

const IBM_Plex_San = IBM_Plex_Sans({subsets: ['latin'], weight: '300', variable: '--font-IBM-Plex'})

const IBM_Plex_Con = IBM_Plex_Sans_Condensed({subsets: ['latin'], weight: '500', variable: '--font-IBM-Plex'})

const Contacto = () => {

    return (
        <div id='contacto' className="flex bg-black justify-around pt-40 pb-36">
            <div className="flex flex-col text-white justify-center">
                <div className="flex">    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h3 className={`text-2xl mb-3 ml-3 ${IBM_Plex_Con.variable} font-sans`}>Telefono</h3>
                </div>
                <p className={`mb-10 ml-10 ${IBM_Plex_San.variable} font-sans`}>11-2390-7856</p>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <h3 className={`text-2xl mb-3 ml-3 ${IBM_Plex_Con.variable} font-sans`}>Email</h3>
                </div>
                <p className={`mb-10 ml-10 ${IBM_Plex_San.variable} font-sans`}>cncwebsite@gmail.com</p>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h3 className={`text-2xl mb-3 ml-3 ${IBM_Plex_Con.variable} font-sans`}>Donde Estamos?</h3>
                </div>
                <p className={`mb-10 ml-10 ${IBM_Plex_San.variable} font-sans`}>Balbin 4738, San Martin</p>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className={`text-2xl mb-3 ml-3 ${IBM_Plex_Con.variable} font-sans`}>Horarios de Atencion</h3>
                </div>
                <p className={`mb-10 ml-10 ${IBM_Plex_San.variable} font-sans`}>Lunes a Viernes de 9 a 18hs</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.819937205349!2d-58.543978891864874!3d-34.57532423356283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb776b321c597%3A0x7bd8d5aa05d35e87!2sPlaza%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1678080498493!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Contacto;