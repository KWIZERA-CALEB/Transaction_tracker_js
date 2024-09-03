import React from 'react'

const PrincipalMessage = () => {
  return (
    <div className='mt-[30px]'>
      <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Principal's Message</p></div>
      <div className='pr-[25px] pb-[25px] pl-[25px] w-full flex flex-col md:flex-row'>
        <div className='w-full md:w-[50%] flex flex-col items-center justify-center bg-slate-200 p-[20px]'>
            <img src="https://calebkwizera.vercel.app/images/yoo.jpg" className='w-[150px] h-[150px] rounded-[50%] object-fit object-[50% 50%] cursor-pointer' alt="About School" />
            <div className='mt-[10px]'>
                <p className='poppinsBold text-[15px] cursor-pointer'>Caleb Kwizera</p>
                <p className='poppinsRegular text-[12px] cursor-pointer'>Head Teacher</p>
            </div>
        </div>
        <div className='w-full md:w-[50%] mt-[10px] md:mt-[-10px] md:p-[20px]'>
            <p className='poppinsRegular cursor-pointer select-none text-start text-[14px]'>
                The <span className='text-secondary font-bold'>Groupe Scolaire Officiel de Butare (GSOB)</span> Indatwa n’inkesha, also known as the Indatwa n'Inkesha School, is a historic secondary school in Huye District in Butare (formerly Astrida), Rwanda. As well as being the oldest secondary school in the country, it is regarded as one of the most prestigious and successful public schools in Rwanda.
            </p>
            <p className='poppinsRegular cursor-pointer select-none text-start text-[14px]'>
                The Groupe Scolaire Officiel de Butare (GSOB) Indatwa n’inkesha, also known as the Indatwa n'Inkesha School, is a historic secondary school in Huye District in Butare (formerly Astrida), Rwanda. As well as being the oldest secondary school in the country, it is regarded as one of the most prestigious and successful public schools in Rwanda.
            </p>
            <div className='flex flex-row justify-between'>
                <div></div>
                <div>
                    <div>
                        <p className='poppinsBold text-[15px] cursor-pointer'>Caleb Kwizera</p>
                        <p className='poppinsRegular text-[12px] cursor-pointer'>Head Teacher</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipalMessage