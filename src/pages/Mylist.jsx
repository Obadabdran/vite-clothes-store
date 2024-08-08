import { useSelector,useDispatch } from "react-redux"
import { removeClothes,removeall } from "../redux/cartReducer"
import { useState } from "react"

const Mylist = () => {
  const mylist=useSelector((state)=>{return state.cart.cartList})
  const dispatch=useDispatch()
  console.log(mylist)
 const total = mylist?.reduce((acc,m)=>{
   return acc += m.price
  },0)
  console.log(total)
  
  return (
    <div className=" flex flex-col md:flex-row items-center md:items-start md:justify-center ">
      <div className="  flex flex-col  mb-12 w-[300px] md:w-[300px] mt-12">
        <h2 className=" font-roboto text-pink-600">"Our products are worth every penny. Don't worry about the price—focus on the quality that truly matters."</h2>
        <h1 className="font-bold font-garmond text-gray-700 mt-6" >TOTAL: ${total}</h1>
        <button onClick={()=>{dispatch(removeall())}} className="border  text-emerald-900 text-lg md:text-xl font-medium font-cinzel p-1  mt-4  ">Clear All</button>
      </div>
      <div>
      {mylist?.map((m)=>
        <div className=" md:ml-24 mb-2 flex flex-row space-x-24 place-items-center">
         <img className="w-28 h-32 object-cover shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-150" src={m.imageSrc}/>
         <div className="flex place-items-center">${m.price}</div>
         <div> <button onClick={()=>{dispatch(removeClothes(m.price))}}  className="border font-cinzel  text-emerald-900 text-sm p-1    ">remove</button></div>
      </div>)}
      </div>
    </div>
  )
}

export default Mylist