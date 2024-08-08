import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <div className="py-8 flex flex-col items-center justify-center bg-fuchsia-50 bg-opacity-50 mb-12">
      <div className='border border-t-0 w-[80%] border-teal-600 mb-14  '></div>
      <div className="text-center ">
        <h1 className="text-xl md:text-3xl font-bold text-teal-900 font-cinzel mb-4">LOGIN</h1>
      </div>
      <form className="w-full pl-20 md:pl-0 md:px-0  max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-4">
          <label className="block font-cinzel text-gray-500 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-[80%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email@example.com"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-cinzel text-gray-500 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-[80%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Your passsword"
            {...register('phone', {
              required: 'Phone number is required',
              })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
        </div>
        <div className='flex justify-center mr-14 md:mr-0 text-blue-800 font-garmond underline mb-4'><Link>Forgot your password ?</Link></div>
        <div className="flex items-center justify-center mr-12 md:mr-0 mt-12">
          <button
            className="bg-teal-600 hover:bg-blue-700 text-white font-garmond font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login