import { ClothesCard } from "../components/index"
import sh_01 from '../assets/shoes/sh1.jpg'
import sh_02 from '../assets/shoes/sh2.jpg'
import sh_03 from '../assets/shoes/sh3.jpg'
import sh_04 from '../assets/shoes/sh4.jpg'
import sh_05 from '../assets/shoes/sh5.jpg'

const Shoeses = () => {
    const Shoeses=[{img:sh_01,price:39.99},
        {img:sh_02,price:32.99},
        {img:sh_03,price:47.99},
        {img:sh_04,price:57.99},
        {img:sh_05,price:85.99}
]
  return (
    <div className="flex flex-row justify-center flex-wrap ">
    {Shoeses.map((h)=>
    <div className="p-2 ml-2 mt-2 bg-blue-50 w-[40%] md:w-[25%] flex items-center justify-center ">
    <ClothesCard imageSrc={h.img} price={h.price} />
    </div>
    
    )}
    
    </div> 
  )
}

export default Shoeses