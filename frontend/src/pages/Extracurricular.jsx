import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/molecules/Navigation'
import Footer from '../components/molecules/Footer'

const Extracurricular = () => {
  const games = [
    {
      image: "/images/volleyball.png",
      title: "Volley Ball",
      description: "One of the most popular and admired sports here."
    },
    {
      image: "/images/volleyball.png",
      title: "Basket Ball",
      description: "One of the most popular and admired sports here."
    },
    {
      image: "/images/volleyball.png",
      title: "FootBall",
      description: "One of the most popular and admired sports here."
    },
    {
      image: "/images/volleyball.png",
      title: "Net Ball",
      description: "One of the most popular and admired sports here."
    },
  ]

  const appendedGames = []
  games.map((game, index) => (
    appendedGames.push(
      <div key={index} className='rounded-[20px] bg-white hover:text-white hover:bg-secondary cursor-pointer transition ease-in border-slate-200 border-solid border-[2px] p-[20px] flex flex-col justify-center items-center'>
        <div className='w-[60px] h-[60px] p-[4px] bg-white rounded-full border-slate-200 border-solid border-[2px]'>
          <img src={game.image} className='w-full h-full object-cover object-center cursor-pointer' alt="VolleyBall" />
        </div>
        <div className='p-[20px]'>
          <p className='poppinsBold text-center text-[15px] cursor-pointer'>{game.title}</p>
          <p className='poppinsMedium text-center text-[11px] cursor-pointer'>{game.description}.</p>
        </div>
      </div>
    )
  ))
  return (
    <>
      <Helmet>
        <title>Extracurricular</title>
      </Helmet>
      <Navigation />
      <div className='mb-[30px] relative'>
        <img src="/images/banner1.jfif" className='w-full h-[400px] object-cover object-center' alt="Banner School Updates" />
        <div className='absolute flex inset-0 items-center justify-center'>
            <p className='poppinsBold text-[#fff] select-none text-[18px] md:text-[28px] text-start'>Extracurricular.</p>
        </div>
      </div>

      <div className='mt-[30px]'>
        <div className='pr-[25px] pl-[25px]'>
          <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Sports</p></div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>
              {appendedGames}
          </div>
        </div>
      </div>

      <div className='mt-[30px]'>
        <div className='pr-[25px] pl-[25px]'>
          <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Religions</p></div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>
              {appendedGames}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Extracurricular
