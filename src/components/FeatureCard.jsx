

const FeatureCard = (props) => {
  return (
    
       <div className=' w-[40%] md:w-[20%] ml-7 md:ml-14 mt-6  flex flex-col '>
            <img src={props.image} className='w-full h-64 md:h-72 mb-2  shadow-emerald-100 shadow-md '/>
            < h1 className="flex justify-center font-bodoni font-bold text-emerald-900">{props.title}</h1>
        </div>
        
    
  )
}

export default FeatureCard