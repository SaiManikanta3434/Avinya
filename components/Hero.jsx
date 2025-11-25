import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050814] via-[#050814] to-[#0a1022]">
      {/* animated background shapes */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl animate-slow-blob" />
      <div className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-slow-blob" />

      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
            Software Development • Cloud • DevOps
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Software Development
            <br />
            <span className="text-blue-400">For Business Growth</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-xl">
            We provide custom digital solutions that help enterprises modernize
            their infrastructure, optimize operations and build products users
            love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-600/30">
              Let&apos;s talk
            </button>
            <button className="rounded-full border border-gray-500/70 px-6 py-2.5 text-sm font-medium hover:border-blue-400 hover:text-blue-300 transition">
              View more
            </button>
          </div>

          <div className="mt-10 flex gap-6 text-xs text-gray-400">
            <div>
              <p className="text-lg font-semibold text-white">2015+</p>
              <p>Experience since</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">70+</p>
              <p>Projects delivered</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">24/7</p>
              <p>Support & Monitoring</p>
            </div>
          </div>
        </div>

        {/* Right visual / office photo mock */}
        <div className="relative animate-float">
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-card-dark shadow-2xl shadow-black/50">
            <Image
              src="/prof.jpg" 
              alt="Team working in modern office"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-3xl bg-card-dark/90 border border-white/10 px-4 py-3 text-xs text-gray-300 backdrop-blur">
            <p className="font-semibold text-sm text-white">
              Dedicated delivery squads
            </p>
            <p>Cloud architects • DevOps engineers • Product designers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
