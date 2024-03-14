import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import getData from '../services/fetchService';
import Row from './Rows';
import 'bootstrap/dist/css/bootstrap.css'
import { v4 as uuidv4 } from 'uuid';

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
    
    return(
        <Table striped bordered hover style={style} >
            <thead>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
            </thead>
            <tbody>
                { filesData?.map( fileData => <Row key={uuidv4()} fileData = { fileData } /> ) }
            </tbody>
        </Table>
    )
}

export default FilesTable