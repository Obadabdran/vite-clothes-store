import { ClothesCard } from "../components/index"
import jeans_01 from '../assets/jeanse/jeans1.jpg'
import jeans_02 from '../assets/jeanse/jeans2.jpg'
import jeans_03 from '../assets/jeanse/jeans3.jpg'
import jeans_04 from '../assets/jeanse/jeans4.jpg'
import jeans_05 from '../assets/jeanse/jeans5.jpg'

const Jeans = () => {
    const jeans=[{img:jeans_01,price:39.99},
        {img:jeans_02,price:32.99},
        {img:jeans_03,price:47.99},
        {img:jeans_04,price:57.99},
        {img:jeans_05,price:85.99}
]
return (
<div className="flex flex-row justify-center flex-wrap ">
{jeans.map((j)=>
<div className="p-2 ml-2 mt-2 bg-blue-50 w-[40%] md:w-[25%] flex items-center justify-center ">
<ClothesCard imageSrc={j.img} price={j.price} />
</div>

)}

</div> 
)
}

export default Jeans