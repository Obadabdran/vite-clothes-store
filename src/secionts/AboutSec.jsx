import pic_01 from '../assets/hom.webp'
import pic_02 from '../assets/brands/bur.jpg'
import pic_03 from '../assets/brands/cha.jpeg'
import pic_04 from '../assets/brands/coa.jpg'
import pic_05 from '../assets/brands/dg.jpg'
import pic_07 from '../assets/brands/fas.jpg'
import pic_08 from '../assets/brands/giv.jpeg'
import pic_09 from '../assets/brands/guc.jpg'
import pic_10 from '../assets/brands/hol.jpg'
import pic_11 from '../assets/brands/lac.webp'
import pic_12 from '../assets/brands/nik.png'
import pic_13 from '../assets/brands/pra.jpg'
import pic_14 from '../assets/brands/ral.jpg'
import { Link } from 'react-router-dom'

const AboutSec = () => {
  const brands=[pic_02,pic_03,pic_04,pic_05,pic_07,pic_08,pic_09,pic_11,pic_10,pic_12,pic_13,pic_14]
  return (
    <>
    <div className='p-6 flex flex-col md:flex-row justify-center bg-white '>
        <img src={pic_01} className='w-full md:w-[50%]'/>
        <div className='w-[500px] flex flex-col py-24 px-12'>
            <h1 className='text-zinc-400 font-roboto font-medium text-2xl'>About Us</h1>
           <span className='inline-block w-full text-3xl  font-medium font-cinzel text-cyan-700 mt-8 '>Mollyjogger Story</span>
            <h3 className='font-garmond mt-8 leading-7'>Mollyjogger™ is an authentic American heritage brand, based in the Ozark Mountains, celebrating the region’s unique history of outdoor recreation, sporting and folklore.</h3>
            <Link to='/about'><button className='flex justify-start px-4 py-1 mt-4 w-36 border border-cyan-500 text-cyan-600'> Read Our Story</button></Link>
        </div>

    </div>
    <div className='flex flex-row sm:justify-center md:ml-[0.5px] flex-wrap '>
     {brands?.map((b)=>(
      <img src={b} className='w-[33%] h-[120px] md:w-[224px] md:h-[120px]'/>
     ))}
    </div>
    </>
  )
}

export default AboutSec