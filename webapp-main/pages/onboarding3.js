import Head from "next/head";

export default function Onboarding3() {
  return (
    <div className="h-screen w-screen relative">
      <Head>
        <title>Onboarding | AGAP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
 <div className=" flex flex-col items-center mr-auto ml-auto
   relative lg:flex-row">

  {/* Pic Section */}

  <div className="bg-[#308C8F] flex w-full h-full justify-center items-center  overflow-hidden
    lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"><img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/Onboarding%2F3.png?alt=media&token=35f15105-0388-434d-b0bd-8ee126b60909"
    className="h-auto w-full  object-contain object-top lg:w-auto lg:h-full"/></div>

    {/* Text Section */}

  <div className="flex justify-end mr-auto ml-auto  relative max-w-xl xl:pr-32
    lg:max-w-screen-xl">
   <div className="mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
    <div className="mb-6  max-w-xl">
     <div className="text-gray-900 mb-6  max-w-lg sm:text-4xl sm:leading-none">
      <p className="font-bold text-3xl tracking-tight  text-gray-900 sm:text-4xl
        sm:leading-none">Real Time</p>
      <p className="inline-block font-bold text-3xl tracking-tight  text-[#10B4DA]
        sm:text-4xl sm:leading-none">Map</p>
     </div>
     <p className="text-base  text-gray-700 md:text-lg">Check out our real-time map to keep track with the reported incidents and share it to notify other local citizens.</p>
    </div>

    <div className="flex items-center mt-4 "><a href="/login">
    <button className="h-12 rounded-lg mr-6 mb-0
      pr-6 pl-6 text-medium font-semibold tracking-wide shadow-md inline-flex items-center justify-center
      bg-[#308C8F] text-white transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
      >Get Started!</button></a></div>
      
   </div>
  </div>
 </div>
</div>




    </div>
  );
}
