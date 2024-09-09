import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'

const AdminManage = () => {
    const news = [
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
        {
            image: "/images/banner1.jfif",
            title: "Basket Ball",
            description: "Providing inclusive and Wholistic education grounded in Christian values..."
        },
    ]

    const appendedNews = []
    news.map((news, index) => (
        appendedNews.push(
            <div key={index} className='drop-shadow-md border-[1px] border-solid cursor-pointer border-slate-200 p-[6px]'>
                <div className='w-full h-[170px]'>
                    <img src={news.image} className='w-full h-full object-fit object-center' alt="Post" />
                </div>
                <div className='mt-[10px]'>
                    <p className='poppinsBold text-[15px] cursor-pointer'>{news.title}</p>
                    <p className='poppinsRegular text-[12px] cursor-pointer'>
                        {news.description}
                    </p>
                    <Link to={'/event'} className='poppinsRegular mt-[4px] text-[12px] text-secondary'>View More</Link>
                </div>
            </div>
        )
    ))
  return (
    <div>
        <Helmet>
            <title>Admin-Manage</title>
        </Helmet>
        <div className='w-full z-50 h-[70px] bg-white shadow-md fixed top-0 flex justify-between items-center pr-[25px] pl-[25px]'>
            <div>
                <p className='poppinsMedium text-[12px] cursor-pointer select-none'>Admin Manage</p>
            </div>
            <div>
              <p className='poppinsBold text-[15px] cursor-pointer'>GSO BUTARE</p>
              <p className='poppinsRegular text-[6px] cursor-pointer'>S'INSTRUIRE POUR MIEUX SERVIR</p>
            </div>
            <div className='flex flex-row space-x-[4px] items-center'>
                <div className='bg-secondary text-white flex justify-center items-center w-[40px] h-[40px] p-[12px] rounded-full'>
                    <p className='poppinsMedium text-[12px] cursor-pointer'>A</p>
                </div>
                <div>
                    <p className='poppinsMedium text-[12px] cursor-pointer'>Caleb</p>
                </div>
            </div>
        </div>

        <div className='w-full pt-[30px] pb-[30px] pr-[25px] pl-[25px] flex flex-col space-x-[0px] md:space-x-[6px] md:space-y-[0px] space-y-[6px] md:flex-row'>
            <div className='w-full h-[420px] overflow-y-scroll relative md:w-[50%] rounded-[12px] border-slate-200 border-solid border-[2px]'>
                <div className='w-full h-[50px] bg-[#000] absolute top-0 rounded-[12px] flex flex-row items-center justify-between pr-[15px] pl-[15px]'>
                    <p className='poppinsMedium text-[12px] text-white cursor-pointer'>Notifications</p>
                    <div className='flex flex-row space-x-[4px] items-center'>
                        <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
                        <p className='poppinsMedium text-[12px] text-white cursor-pointer'>20 New</p>
                    </div>
                </div>

                <div className='pt-[50px]'>
                    <div className='w-full h-[50px] bg-slate-200 flex flex-row items-center justify-between pr-[15px] pl-[15px]'>
                        <p className='poppinsMedium text-[12px] cursor-pointer'>Hi, there can i get place for my student</p>
                    </div>
                    <div className='w-full h-[50px] bg-slate-200 flex flex-row items-center justify-between pr-[15px] pl-[15px]'>
                        <p className='poppinsMedium text-[12px] cursor-pointer'>Happy to contact you</p>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:w-[50%] rounded-[12px] border-slate-200 border-solid border-[2px]'>
                <div className='w-full h-[50px] bg-[#000] absolute top-0 rounded-[12px] flex flex-row items-center justify-between pr-[15px] pl-[15px]'>
                    <p className='poppinsMedium text-[12px] text-white cursor-pointer'>Add new event</p>
                </div>
                <div className='pt-[55px] pb-[20px] pr-[15px] pl-[15px]'>
                    <form className='flex flex-col space-y-[10px]'>
                        <div>
                            <p className='poppinsMedium text-[12px] cursor-pointer'>Event Title</p>
                            <Input placeholder="Event Title" />
                        </div>
                        <div>
                            <p className='poppinsMedium text-[12px] cursor-pointer'>Event decsription</p>
                            <textarea name="" id="" placeholder='Write description' className='w-full poppinsMedium text-[14px] h-[70px] pl-[7px] pr-[14px] pt-[7px] placeholder-poppinsMedium placeholder-text[14px] pb-[7px] border-slate-200 border-[2px] border-solid focus:border-secondary focus:outline-none'></textarea>
                        </div>
                        <div>
                            <p className='poppinsMedium text-[12px] cursor-pointer'>Event Photos</p>
                            <div className='w-full border-slate-200 border-solid border-[2px] h-[70px] flex justify-center items-center'>
                                <p className='poppinsMedium text-[12px] cursor-pointer'>Select to choose photos</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex space-x-[4px]'>
                                <input type="checkbox" />
                                <p className='poppinsMedium text-[12px] cursor-pointer'>Appear on website welcome</p>
                            </div>
                        </div>
                        <Button type='submit' buttonTitle='Add Event' backgroundColor='#1d4ed8' color='#fff' />
                    </form>
                </div>
            </div>
        </div>

        <div className='pb-[30px]'>
            <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Recently Added Events</p></div>
            <div className='w-full pr-[25px] pl-[25px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>
                {appendedNews}
            </div>
        </div>
      
    </div>
  )
}

export default AdminManage
