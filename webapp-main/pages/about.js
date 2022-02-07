import Head from "next/head";
import OnboardingNavBar from "../components/navbar_onboarding";

export default function About() {
  return (

    <div className="h-screen">
    <Head>
      <title>About | AGAP</title>
    </Head>
    <OnboardingNavBar />


    {/* Section 1 */}

    <div class="container items-center max-w-6xl mx-auto xl:px-5 px-2 py-32 md:px-0">
    <div class="flex flex-wrap items-center sm:-mx-3">
      <div class="w-full md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline text-[#308C8F]">AGAP keeps you up with what's going on in the Metro,</span>
            <span class="block text-[#10B4DA] xl:inline">right here and right now.</span>
          </h1>
          <div class="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#login" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#308C8F] rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Go To AGAP Home
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://firebasestorage.googleapis.com/v0/b/agap-3fe00.appspot.com/o/About%20Us%2FAmazon%201999.jpg?alt=media&token=b93ce659-3721-4f9d-bb60-2a98de5fab66"></img>
          </div>
      </div>
    </div>
  </div>


    {/* Section 2 */}



  </div>
  );
}
