import { NavLink } from 'react-router'
import { useState } from 'react'

export default function NavBar() {
    const [showNav, toggleShowNav] = useState(false)

    return (
        <nav>
            {showNav ?
                <>  <img src="/src/assets/menu-icon.svg" alt="Exit Button" onClick={() => toggleShowNav(false)} className="exit_nav" />
                    <div className="nav_options">
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                        <NavLink to="/about" end>
                            About Me
                        </NavLink>
                        <NavLink to="/webdev" end>
                            Web Development
                        </NavLink>
                        <NavLink to="/3dart" end>
                            3D Art
                        </NavLink>
                        <NavLink to="/photography" end>
                            Photography
                        </NavLink>
                        <NavLink to="/destiny" end>
                            Destiny
                        </NavLink>
                    </div> </> :
                <><img src="/src/assets/menu-icon.svg" alt="menu icon" onClick={() => toggleShowNav(true)} className="menu_button" /></>
            }
        </nav>
    )
}