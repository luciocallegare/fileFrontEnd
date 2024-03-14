import axios from "axios"
const baseUrl = 'http://localhost:3000'

async function getData(fileName) {
    const queryParam = fileName? `fileName=${fileName}`: ''
    return (await axios.get(`${baseUrl}/files/data?${queryParam}`)).data
}

export default getData