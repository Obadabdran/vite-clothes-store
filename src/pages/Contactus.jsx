
import { useForm } from 'react-hook-form';

const Contactus = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors)
  const onSubmit = (data) => {
    console.log(data);
  };
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fuchsia-50 bg-opacity-50 mb-12">
      <div className='border border-t-0 w-[80%] border-teal-600 mb-14 mt-8'></div>
      <div className=" flex flex-col justify-center items-center text-center">
        <h1 className="text-xl md:text-3xl  font-bold text-teal-900 font-cinzel mb-4">CONTACT</h1>
        <p className="  text-base md:text-lg mb-8 w-[80%]  md:w-[500px] font-mono text-teal-700">
          Use the form below to contact us with any questions or comments you may have.
        </p>
      </div>
      <form className="w-full pl-20 md:pl-0 md:px-0  max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block font-cinzel text-gray-500 text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-[80%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>
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
          <label className="block font-cinzel text-gray-500 text-sm mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-[80%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Your phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid phone number, only numbers are allowed',
              },
              minLength: {
                value: 10,
                message: 'Phone number must be at least 10 digits',
              },
              maxLength: {
                value: 15,
                message: 'Phone number cannot exceed 15 digits',
              },
            })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block font-cinzel text-gray-500 text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-[80%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="message"
            placeholder="Your message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
        </div>
        <div className="flex items-center justify-center mr-12 md:mr-0 mt-12">
          <button
            className="bg-teal-600 hover:bg-blue-700 text-white font-garmond font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
