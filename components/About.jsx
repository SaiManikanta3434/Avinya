import Image from "next/image";

export default function About() {
  return (
    <section className="bg-bg-dark py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="relative animate-fade-up">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-card-dark">
            <Image
              src="/sware.webp"
              alt="Our delivery center"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-6 flex gap-4 text-xs text-gray-200">
            <div className="rounded-2xl bg-bg-dark/90 px-4 py-3 border border-white/10 backdrop-blur">
              <p className="text-lg font-semibold text-white">2k</p>
              <p>Branches</p>
            </div>
            <div className="rounded-2xl bg-bg-dark/90 px-4 py-3 border border-white/10 backdrop-blur">
              <p className="text-lg font-semibold text-white">1k</p>
              <p>Happy clients</p>
            </div>
            <div className="rounded-2xl bg-bg-dark/90 px-4 py-3 border border-white/10 backdrop-blur">
              <p className="text-lg font-semibold text-white">7k+</p>
              <p>Projects done</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-semibold mb-4">
            Your dedicated technology partner
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Since 2015, our dedicated team has been providing software
            development services across the globe and multiple industries.
          </p>
          <p className="text-sm text-gray-300 mb-4">
            Our development center supports time-sensitive projects, including
            web, mobile, analytics and cloud-native platforms. We combine
            engineering excellence with stable, agile project delivery.
          </p>
          <button className="mt-2 rounded-full border border-gray-500/70 px-5 py-2 text-xs font-medium hover:border-blue-400 hover:text-blue-300 transition">
            Get to know us better
          </button>
        </div>
      </div>
    </section>
  );
}
