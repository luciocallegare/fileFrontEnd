import { Link } from "react-router-dom"
function Row({ fileData }) {
    return(
        <tr>
            <Link to={{pathname:'/', search:`?fileName=${fileData.file}`}} ><td>{ fileData.file }</td></Link>
            <td>{ fileData.lines?.text }</td>
            <td>{ fileData.lines?.number }</td>
            <td>{ fileData.lines?.hex }</td>
        </tr>
    )
}

export default Row