import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_API_URL

export const fetchAllEvents = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/events/`)
        return response.data
    } catch(error) {
        console.log(error)
        throw error
    }
}

export const fetchSingleEvent = async (id) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/event/${id}`)
        return response.data
    } catch(error) {
        console.log(error)
        throw error
    }
}