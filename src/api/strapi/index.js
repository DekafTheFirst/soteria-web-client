import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const fetchEvents = async () => {
    try{
        const events = await api.get(`/api/events?populate=*&sort=date:ASC`)
        return events.data
    } catch(error) {
        console.log(error)
        return error
    }
}

export const fetchUpcomingEvents = async (noOfUpcomingEvents) => {
    try{
        const events = await api.get(`/api/events?populate=image&sort=date:asc&pagination[start]=0&pagination[limit]=${noOfUpcomingEvents}`)
        return events.data
    } catch(error) {
        console.log(error)
        return error
    }
}

export const getEventVideo = async (id) => {
    try{
        // const events = await axios.get(`http://192.168.5.197:1337/api/events/${id}?populate=image`)
        const events = await api.get(`/api/events/${id}?populate=video&fields=id`)
        const eventVideoData = events.data.data.attributes.video.data
        
        if(eventVideoData) {
            return events.data.data.attributes.video.data.attributes.url
        }
        else{
            return null
        }
    } catch(error) {
        console.log(error)
        return error
    }
}

export const createPrayerRequestEntry = async (data) => {
    try{
        const response = await api.post(`/api/prayer-requests`, {data})
        return response.data        
        
    } catch(error) {
        console.error('Error creating prayer request:', error);
        throw error
    }
}

export const createMemberEntry = async (data) => {
    try{
        const response = await api.post(`/api/members`, {data})
        return response.data        
        
    } catch(error) {
        console.error('Error creating member:', error);
        throw error
    }
}

export const getLiveStream = async () => {
    try{
        const response = await api.get(`/api/live-stream`);
        const liveStreamID = response.data.data.attributes.youtubeVideoID
        return liveStreamID
    } catch(error) {
        console.log(error)
        return error
    }
}