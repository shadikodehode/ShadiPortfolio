import { NavLink } from "react-router"

export function NavBar() {
  
  return(
    <nav>
      <div>
        
        <NavLink to="/">
          <div>Landing</div>
        </NavLink>

        <NavLink to="/about">
          <div>About</div>
        </NavLink>

        <NavLink to="/art">
          <div>Art</div>
        </NavLink>

        <NavLink to="/contact">
          <div>Contact</div>
        </NavLink>

        <NavLink to="/projects">
          <div>Projects</div>
        </NavLink>

      </div>
    </nav>
  )
}