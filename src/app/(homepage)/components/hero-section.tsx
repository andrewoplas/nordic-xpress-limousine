export const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#A3A7AD]">
    <div className="w-full">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-bl from-zinc-500 to-zinc-800 opacity-50"></div>

      <video
        // className="min-h-full w-auto min-w-full max-w-none"
        className="w-full"
        loop
        autoPlay
        muted
        playsInline
        preload="none"
      >
        <source src="videos/hero-background-v2.mp4" type="video/mp4" />
        <source src="videos/hero-background-v2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="px-default absolute z-10 flex w-full max-w-section justify-center md:justify-start lg:-mt-[10%] xl:-mt-[20%]">
      <div className="flex flex-col items-center md:items-start">
        <h1
          className="flex flex-col gap-1 text-center text-2xl font-normal text-white md:gap-4 md:text-left md:text-3xl"
          style={{ textShadow: "3px -1px 5px rgba(0, 0, 0, 0.5)" }}
        >
          Velkommen til Nordic
          <span className="text-4xl text-app-orange md:text-6xl">Xpress</span>
          Limousine Service
        </h1>

        <button
          aria-label="book now"
          className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] mt-8 rounded-full bg-app-orange px-6 py-2 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 md:px-7 md:py-3 xl:px-7"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  </section>
);
