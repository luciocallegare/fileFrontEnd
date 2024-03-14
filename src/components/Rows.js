
function Row({ fileData }) {
    return(
        <tr>
            <td>{ fileData.file }</td>
            <td>{ fileData.lines?.text }</td>
            <td>{ fileData.lines?.number }</td>
            <td>{ fileData.lines?.hex }</td>
        </tr>
    )
}

export default Row