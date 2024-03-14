import { Link } from "react-router-dom"


export default function Header(){
    return(
        <div className="banner">
            <h1> <Link to={'/'}>React Test App</Link> </h1>         
        </div>
    )
}