import { ClothesCard } from "../components/index"
import tshirt_01 from '../assets/t-shirt/t1.jpg'
import tshirt_02 from '../assets/t-shirt/t2.jpg'
import tshirt_03 from '../assets/t-shirt/t3.jpg'
import tshirt_04 from '../assets/t-shirt/t4.jpg'
import tshirt_05 from '../assets/t-shirt/t5.jpg'


const Tshirts = () => {

    const Tshirt=[{img:tshirt_01,price:39.99},
        {img:tshirt_02,price:32.99},
        {img:tshirt_03,price:47.99},
        {img:tshirt_04,price:57.99},
        {img:tshirt_05,price:85.99}
]
  return (
    <div className="flex flex-row justify-center flex-wrap ">
    {Tshirt.map((t)=>
    <div className="p-2 ml-2 mt-2 bg-blue-50 w-[40%] md:w-[25%] flex items-center justify-center ">
    <ClothesCard imageSrc={t.img} price={t.price} />
    </div>
    
    )}
    
    </div> 
  )
}

export default Tshirts