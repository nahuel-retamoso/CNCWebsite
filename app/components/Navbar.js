const Navbar = () => {
    return (
            <div className="fixed w-full bg-black/40 h-28">
                <div className="inline-flex space-x-5 h-16 ml-28 items-center text-white">
                    <h3>1150954463</h3>
                    <h3>nahuel.retamoso@gmail.com</h3>
                </div>
                <div className="bg-blue-100 h-20 w-96 ml-20 flex items-center justify-center">
                    <h1 className="text-3xl">Company name</h1>
                </div>
                <nav className="absolute bottom-0 right-0 pr-96">
                    <ul className="inline-flex justify-around h-16 w-96 text-white">
                        <li className="flex items-center"><a href="/">Home</a></li>
                        <li className="flex items-center"><a href="/about">About</a></li>
                        <li className="flex items-center"><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar