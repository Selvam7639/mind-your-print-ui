import react, { useState } from 'react'

const Navbar = () =>{

    const [moduleName, setmoduleName] = useState('Test');
    return(
        <>
            <div >
                <nav className="navbar navbar-light bg-light shadow-lg rounded ">
                    <div className="container-fluid p-1">
                        <a className="navbar-brand mb-0 h1 ps-5" href="#">{moduleName}</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;