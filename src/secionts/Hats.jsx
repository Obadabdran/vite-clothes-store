import { ClothesCard } from "../components/index"
import hat_01 from '../assets/hats/h1.jpg'
import hat_02 from '../assets/hats/h2.jpg'
import hat_03 from '../assets/hats/h3.jpg'
import hat_04 from '../assets/hats/h4.jpg'
import hat_05 from '../assets/hats/h5.jpg'

const Hats = () => {
    const Hats=[{img:hat_01,price:39.99},
        {img:hat_02,price:32.99},
        {img:hat_03,price:47.99},
        {img:hat_04,price:57.99},
        {img:hat_05,price:85.99}
]
  return (
    <div className="flex flex-row justify-center flex-wrap ">
    {Hats.map((h)=>
    <div className="p-2 ml-2 mt-2 bg-blue-50 w-[40%] md:w-[25%] flex items-center justify-center ">
    <ClothesCard imageSrc={h.img} price={h.price} />
    </div>
    
    )}
    
    </div> 
  )
}

export default Hats