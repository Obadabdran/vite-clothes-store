import pic_01 from "../assets/moly.png"
import pic_02 from "../assets/foo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-teal-900 mt-1 py-8 px-8">
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
        
        {/* العمود الأول */}
        <div className=" flex justify-center md:items-start ">
          <img src={pic_01} className=" "/>
        </div>

        {/* العمود الثاني */}
        <div>
          <h2 className=" text-emerald-200 text-center font-garmond text-lg font-bold mb-4">Newsletter</h2>
          <p className="font-cinzel text-white mb-4">Subscribe for exclusive offers, special events and a good tall fish tale or two.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="px-4 py-2 border border-gray-300  bg-white bg-opacity-20 rounded-l-md w-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">Go</button>
          </div>
        </div>

        {/* العمود الثالث */}
        <div className="md:ml-20 text-center  ">
          <h2 className="text-emerald-200  font-garmond text-lg font-bold  mb-4">Links</h2>
          <ul className="text-white font-cinzel leading-4 space-y-2   ">
            <li>Shop</li>
            <li>About Us</li>
            <li>Our Journal</li>
            <li>Shipping</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* العمود الرابع */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-emerald-200 font-garmond text-lg font-bold mb-2 md:mb-4">Get In Touch</h2>
          <p className="text-white font-cinzel">Contact us</p>
          <p className="text-white font-cinzel">info@mollyjogger.com</p>
          <div className="flex space-x-4 my-2 md:my-4  justify-center md:justify-start">
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </div>
          <img src={pic_02} alt="Image Description" className=" md:mt-4"/>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="text-center mt-16">
        <h2 className=" text-emerald-200 font-garmond text-lg font-bold mb-4">Accepted Payments</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <FaCcVisa size={30} />
          <FaCcMastercard size={30} />
          <FaCcPaypal size={30} />
          {/* يمكنك إضافة المزيد من أيقونات الدفع هنا */}
        </div>
        <p className="text-white font-cinzel">© 2011-2024, Mollyjogger | Site by Element Eleven.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer