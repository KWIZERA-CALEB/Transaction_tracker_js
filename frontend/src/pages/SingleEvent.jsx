import React, { useEffect, useState } from 'react'
import Navigation from '../components/molecules/Navigation'
import { Link } from 'react-router-dom'
import Footer from '../components/molecules/Footer'
import { useParams } from 'react-router-dom'
import { fetchSingleEvent } from '../services/EventService'
import { fetchAllEvents } from '../services/EventService'

const SingleEvent = () => {
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const [news, setNews] = useState([])

    useEffect(() => {
        const getFetchedEvent = async () => {
            try {
                const response = await fetchSingleEvent(id)
                console.log(response.event)
                setEvent(response.event)
            } catch(error) {
                console.log(error)
                throw error
            }
        }
        getFetchedEvent()
    }, [])

    useEffect(() => {
        const getFectchedBooks = async () => {
            try {
                const response = await fetchAllEvents()
                setNews(response.events)
            } catch(error) {
                console.log(error)
                throw error
            }
        }
        getFectchedBooks()
    }, [])


    const appendedNews = []
    news.map((news, index) => (
        appendedNews.push(
            <div key={index} className='drop-shadow-md border-[1px] border-solid cursor-pointer border-slate-200 p-[6px]'>
                <div className='w-full h-[170px]'>
                    <img src='/images/banner1.jfif' className='w-full h-full object-fit object-center' alt="Post" />
                </div>
                <div className='mt-[10px]'>
                    <p className='poppinsBold text-[15px] cursor-pointer'>{news.title}</p>
                    <p className='poppinsRegular text-[12px] cursor-pointer'>
                        {news.description}
                    </p>
                    <Link to={`/event/${news.id}`} className='poppinsRegular mt-[4px] text-[12px] text-secondary'>View More</Link>
                </div>
            </div>
        )
    ))
  return (
    <div>
        <Navigation />
        <div className='w-full pt-[30px] pr-[25px] pl-[25px] flex flex-col md:flex-row space-y-[20px] space-x-[0px] md:space-y-[0px] md:space-x-[6px]'>
            <div className='w-full md:w-[70%]'>
                <img src="/images/banner1.jfif" className='w-full h-[400px] cursor-pointer object-cover object-center' alt="Event" />
                <div className='mt-[20px]'>
                    <p className='poppinsBold text-start text-[15px] cursor-pointer uppercase'>{event.title}</p>
                    <p className='poppinsMedium text-start text-[11px] cursor-pointer'>{event.description}</p>
                </div>
                <div className='grid mt-[20px] grid-cols-1 gap-[4px] sm:grid-cols-2 md:grid-cols-3'>
                    <div className='h-[150px]'>
                        <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center cursor-pointer' alt="Event" />
                    </div>
                    <div className='h-[150px]'>
                        <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center cursor-pointer' alt="Event" />
                    </div>
                    <div className='h-[150px]'>
                        <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center cursor-pointer' alt="Event" />
                    </div>
                    <div className='h-[150px]'>
                        <img src="/images/banner1.jfif" className='w-full h-full object-fit object-center cursor-pointer' alt="Event" />
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[30%]'>
                <div>
                    <p className='poppinsBold text-start text-[15px] cursor-pointer uppercase'>More Events</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[4px]'>
                    {appendedNews}
                </div>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default SingleEvent
