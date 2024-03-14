import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import getData from '../services/fetchService';
import Row from './Rows';
import 'bootstrap/dist/css/bootstrap.css'

const style ={
    width: '80%',
    margin: '20px auto'
  }
function FilesTable() {
    const [filesData, setFilesData] = useState()

    useEffect(() =>{
        getData().then(res => setFilesData(res))
    }, [] )

    if ( !filesData ) return null

    console.log("FIles data:", filesData)
    
    return(
        <Table striped bordered hover style={style} >
            <thead>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
            </thead>
            <tbody>
                { filesData?.map( fileData => <Row fileData = { fileData } /> ) }
            </tbody>
        </Table>
    )
}

export default FilesTable