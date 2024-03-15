import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import getData from '../services/fetchService';
import Row from './Rows';
import 'bootstrap/dist/css/bootstrap.css'
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import Error from './Error';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFile } from '../redux/slicer';


const style ={
    width: '80%',
    margin: '20px auto'
  }
function FilesTable() {
    const location = useLocation()
    const fileName = new URLSearchParams(location.search).get('fileName')
    const dispatch = useDispatch()
    const filesData = useSelector(state => state)
    useEffect(() =>{
        dispatch(fetchFile(fileName))
    }, [location] )
    
    if (filesData.file.error) {
        const error = filesData.file.error
        return <Error err={error}></Error>
    }

    if ( !filesData ) {
        return  (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }

    return(
        <Table striped bordered hover style={style} >
            <thead>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
            </thead>
            <tbody>
                { filesData?.file?.data?.map( fileData => <Row key={uuidv4()} fileData = { fileData } /> ) }
            </tbody>
        </Table>
    )
}

export default FilesTable