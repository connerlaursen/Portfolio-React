import React, { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Footer from './Footer'
import "../App.css"


function Navbar() {
    const [page, setPage] = useState("Home")
    const handleClick = (click) => {
        const {target} = click
        setPage (target.textContent)
    }
  return (
    <div>
        <nav>
            <div className="navWrapper">
                <ul className="navLinks">
                {page === "Home" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Home</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Home</a></li>)}
                {page === "About" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>About</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>About</a></li>)}
                {page === "Projects" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Projects</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Projects</a></li>)}
                {page === "Resume" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Resume</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Resume</a></li>)}
                </ul>
            </div>
        </nav>
        {
            {
                "Home":<Home/>, 
                "About":<About/>,
                "Projects":<Projects/>,
                "Resume":<Resume/>
            }
            [page]
        }
        <Footer/>
    </div>
  )
}

export default Navbar
