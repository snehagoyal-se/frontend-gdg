function Navbar(){
    return(
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-7">
                {/*LOGO*/}
                <h2>Logo</h2>

                <ul className="flex gap-8">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;