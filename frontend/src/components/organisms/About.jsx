import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

const About = () => {
  return (
    <div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.7}}
       className='pb-[15px]'>
        <p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>About GSO Butare</p>
      </motion.div>

      <div className='pr-[25px] pb-[25px] pl-[25px] w-full flex flex-col md:flex-row'>
        <div className='w-full md:w-[50%] mt-[10px] md:mt-[-10px] md:p-[20px]'>
            <p className='poppinsRegular cursor-pointer select-none text-start text-[14px]'>
                The <span className='text-secondary font-bold'>Groupe Scolaire Officiel de Butare (GSOB)</span> Indatwa n’inkesha, also known as the Indatwa n'Inkesha School, is a historic secondary school in Huye District in Butare (formerly Astrida), Rwanda. As well as being the oldest secondary school in the country, it is regarded as one of the most prestigious and successful public schools in Rwanda.
            </p>
            <p className='poppinsRegular cursor-pointer select-none text-start text-[14px]'>
                The Groupe Scolaire Officiel de Butare (GSOB) Indatwa n’inkesha, also known as the Indatwa n'Inkesha School, is a historic secondary school in Huye District in Butare (formerly Astrida), Rwanda. As well as being the oldest secondary school in the country, it is regarded as one of the most prestigious and successful public schools in Rwanda.
            </p>
            <div className='flex flex-row justify-between'>
                <div></div>
                <div className='flex flex-row space-x-[6px] items-center'>
                    <img src="/images/logos/logo.png" className='w-[60px]' alt="Logo" />
                    <div>
                        <p className='poppinsBold text-[15px] cursor-pointer'>GSO BUTARE</p>
                        <p className='poppinsRegular text-[6px] cursor-pointer'>S'INSTRUIRE POUR MIEUX SERVIR</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full md:w-[50%]'>
            <img src="/images/banner1.jfif" className='w-full h-[300px] rounded-[15px] object-fit object-center cursor-pointer' alt="About School" />
        </div>
      </div>
    </div>
  )
}

export default About
