import axios from "axios"
import { formatDate } from "../../utils/time"


const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const fetchEvents = async () => {
    try {
        const events = await api.get(`/api/events?populate=*&sort=startDate:ASC`)
        return { response: events.data, error: null }
    } catch (error) {
        console.log('error fetching events', error)
        return { response: null, error: error }
    }
}

export const fetchSermons = async () => {
    try {
        const sermons = await api.get(`/api/sermons?populate=*`)
        return { response: sermons.data, error: null }
    } catch (error) {
        console.log('error fetching sermons', error)
        return { response: null, error: error }
    }
}

export const fetchEventDetails = async (id) => {
    console.log('fetch details')
    try {
        const events = await api.get(`/api/events/${id}?populate=*&sort=startDate:ASC`)
        return { response: events.data, error: null }
    } catch (error) {
        console.log('error fetching events', error)
        return { response: null, error: error }
    }
}

export const fetchUpcomingEvents = async (noOfUpcomingEvents) => {
    try {
        const currentDate = new Date().toISOString();

        const events = await api.get(`/api/events?populate=image&sort=startDate:asc&filters[startDate][$gte]=${currentDate}&pagination[start]=0&pagination[limit]=${noOfUpcomingEvents}`)
        console.log(events)

        if (events.data.data.length < 1) {
            // console.log('no upcoming events')
            const recentEvents = await api.get(`/api/events?populate=*&sort=startDate:ASC`)
            // console.log(recentEvents.data)
            return { response: recentEvents.data, error: null }
        }
        else {
            return { response: events.data, error: null }
        }

    } catch (error) {
        console.log('error fetching upcoming events', error)
        return { response: null, error: error }
    }
}

// export const fetchLatestEvents = async (noOfUpcomingEvents) => {
//     try {
//         const currentDate = new Date().toISOString();

//         const events = await api.get(`/api/events?populate=image&sort=startDate:asc&filters[startDate][$lte]=${currentDate}&pagination[start]=0&pagination[limit]=${noOfUpcomingEvents}`)
//         console.log(events)

//         // if(events.data.data.length < 1) {
//         //     console.log('no upcoming events')
//         //     const recentEvents = await api.get(`/api/events?populate=*&sort=startDate:ASC`)
//         //     console.log(recentEvents.data)
//         //     return { response: recentEvents.data, error: null }
//         // }
//         return { response: events.data, error: null }

//     } catch (error) {
//         console.log('error fetching upcoming events', error)
//         return { response: null, error: error }
//     }
// }

export const getEventVideo = async (id) => {
    try {
        // const events = await axios.get(`http://192.168.5.197:1337/api/events/${id}?populate=image`)
        const events = await api.get(`/api/events/${id}?populate=video&fields=id`)
        const eventVideoData = events.data.data.attributes.video.data

        if (eventVideoData) {
            return events.data.data.attributes.video.data.attributes.url
        }
        else {
            return null
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export const createPrayerRequestEntry = async (data) => {
    try {
        const response = await api.post(`/api/prayer-requests`, { data })
        return { response: response.data, message: 'Prayer Request Made Successfuly', error: null }

    } catch (error) {
        // console.error('Error creating prayer request:', error);
        return { response: null, message: 'Problem Sending Prayer Request', error }
    }
}

export const createMemberEntry = async (data) => {
    try {
        const response = await api.post(`/api/members`, { data })
        return response.data

    } catch (error) {
        console.error('Error creating member:', error);
        throw error
    }
}

export const getLatestSermon = async () => {
    try {
        const response = await api.get(`/api/latest-sermon`);
        return ({ latestSermon: response.data.data.attributes, error: null })
    } catch (error) {
        console.log(error)
        return ({ latestSermon: null, error })

    }
}