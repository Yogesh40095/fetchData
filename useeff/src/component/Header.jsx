
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <div className="header">
        <Link to={'/'}><h1>Home</h1></Link>
        <Link to={'/About'}><h1>About</h1></Link>
        <Link to={'/Contact'}><h1>Contact</h1></Link>

        </div>
        </>
    )
}

export default Header;