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
        <source src="videos/hero-background.mp4" type="video/mp4" />
        <source src="videos/hero-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="px-default absolute z-10 flex w-full max-w-section justify-center md:justify-start lg:-mt-[10%] xl:-mt-[20%]">
      <div className="flex flex-col items-center md:items-start">
        <h1
          className="flex flex-col gap-1 text-center text-2xl md:text-3xl font-normal text-white md:gap-4 md:text-left"
          style={{ textShadow: "3px -1px 5px rgba(0, 0, 0, 0.5);" }}
        >
          Velkommen til Nordic
          <span className="text-4xl md:text-6xl text-app-orange">Xpress</span>
          Limousine Service
        </h1>

        <button
          aria-label="book now"
          className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] mt-8 rounded-full bg-app-orange px-6 md:px-7 py-2 md:py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150 xl:px-7"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  </section>
);
