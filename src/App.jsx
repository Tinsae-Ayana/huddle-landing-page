import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

export default function App() {
   return (
      <div className='md:bg-desktop bg-mobile w-screen h-screen bg-contain bg-violet md:pl-12 pl-8 md:pr-20 pr-8 md:py-12 py-8  flex flex-col justify-between'>
         <div>
            <img src='logo.svg' alt='' className='md:h-12 h-8' />
         </div>
         <div className='flex md:h-[70%] md:flex-row flex-col items-center md:items-start'>
            <img className='md:h-full md:basis-1/2' src='illustration-mockups.svg' alt='' />
            <div className='md:basis-1/2 md:pt-8 md:pl-12 pt-4'>
               <div className='pb-6'>
                  <h1 className='font-poppin font-semibold text-white lg:text-4xl text-xl text-center md:text-left leading-snug'>
                     Build The Community Your Fans Will Love
                  </h1>
                  <p className='font-openSans text-gray-50 md:pt-4 text-sm md:text-lg text-center md:text-left'>
                     Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you
                     engage in genuine discussion.
                  </p>
               </div>
               <div className='lg:w-1/3 w-[80%] m-auto md:m-0 rounded-3xl bg-white hover:bg-softMagenta md:py-3 py-2 px-4 text-center text-violet hover:text-white duration-200 shadow-2xl cursor-pointer'>
                  <h1>Register</h1>
               </div>
            </div>
         </div>
         <div className='flex md:justify-end justify-center'>
            <TiSocialTwitterCircular className='w-10 h-10 fill-white hover:fill-softMagenta'></TiSocialTwitterCircular>
            <AiOutlineInstagram className='w-10 h-10 fill-white hover:fill-softMagenta'></AiOutlineInstagram>
            <CiFacebook className='w-10 h-10 fill-white hover:fill-softMagenta'></CiFacebook>
         </div>
      </div>
   );
}
