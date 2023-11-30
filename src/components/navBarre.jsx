import { NavLink } from "react-router-dom";

function NavBarr (){
    return (
        <nav>
      <ul>
        <li><NavLink to= '/'>Home</NavLink></li>
        <li><NavLink to= '/about'>About</NavLink></li>
        <li><NavLink to= '/Product'>Product</NavLink></li>
        <li><NavLink to= '/login'>Login</NavLink></li>
        
      </ul>
     </nav>
    )
}
export default NavBarr;