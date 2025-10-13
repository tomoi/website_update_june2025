import { NavLink } from 'react-router'
import { useState } from 'react'

export default function NavBar() {
    const [showNav, toggleShowNav] = useState(false)

    return (
        <nav>
            {showNav ?
                <>  <img src="/src/assets/close_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Exit Button" onClick={() => toggleShowNav(false)} className="exit_nav" />
                    <div className="nav_options">
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                        <NavLink to="/about" end>
                            About Me
                        </NavLink>
                        <NavLink to="/projects" end>
                            Projects
                        </NavLink>
                        <NavLink to="/art" end>
                            Art
                        </NavLink>
                        <NavLink to="/photography" end>
                            Photography
                        </NavLink>
                    </div> </> :
                <><img src="/src/assets/menu-icon.svg" alt="menu icon" onClick={() => toggleShowNav(true)} className="menu_button" /></>
            }
        </nav>
    )
}