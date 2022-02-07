import Head from "next/head";

export default function Onboarding() {
  return (
    <div className="h-screen w-screen relative">
      <Head>
        <title>Onboarding | AGAP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div class="px-2 pt-32 bg-white md:px-0">

      <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span class="block">Welcome To <span class="block mt-1 text-[#10B4DA] lg:inline lg:mt-0">AGAP</span></span>
        </h1>
        <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            An Incident Web-Reporting App that updates you with alarming events and happenings within Metro Manila, Philippines.
        </p>
        <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#308C8F] rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>
    <div class="w-auto pt-7 pb-7 bg-[#308C8F] mt-7">

    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class=" sm:mx-auto sm:space-y-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/Onboarding%2F1.png?alt=media&token=ad9f9271-c467-4aeb-a6ab-1e2fbe6a8e2f" class=" "></img>
        </div>

    </div>
    </div>
      </div>
    </div>
  );
}
