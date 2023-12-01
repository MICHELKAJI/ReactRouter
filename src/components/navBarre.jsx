import { NavLink } from "react-router-dom";

function NavBarr (){
    return (
        <nav>
      <ul>
        <li><NavLink to= '/'>Login</NavLink></li>
        <li><NavLink to= '/home'>Home</NavLink></li>
        <li><NavLink to= '/about'>About</NavLink></li>
        <li><NavLink to= '/Product'>Product</NavLink></li>
        
        
      </ul>
     </nav>
    )
}
export default NavBarr;