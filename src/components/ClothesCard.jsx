import {useSelector,useDispatch}from 'react-redux'
import { addClothes, removeClothes } from '../redux/cartReducer'

const ClothesCard = ({ imageSrc, price }) => {
  const cartList=useSelector(state=>state.cart.cartList)
  const dispatch=useDispatch()
  console.log(cartList)
  return (
    <div className="w-full  bg-white  shadow-emerald-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img className="w-full h-52 md:h-64 object-cover" src={imageSrc} alt="Clothes" />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">${price}</span>
        <div className="relative group">
          <button  onClick={()=>dispatch(addClothes({imageSrc,price}))} className="text-blue-200 hover:text-blue-500 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-200 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add to my list
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ClothesCard