import axios from "axios"
const baseUrl = 'http://localhost:3000'

async function getData() {
    return (await axios.get(`${baseUrl}/files/data`)).data
}

export default getData