import Image from "next/image";

export default function CompanyPage() {
  return (
    <div className="bg-bg-dark min-h-screen px-4 py-16 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-semibold">About Our Company</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We are a global software engineering company delivering cloud, DevOps,
            mobile, and web solutions since 2015.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="animate-fade-up">
            <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-card-dark">
              <Image
                src="/Profile.jpg"
                alt="Company office"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-semibold mb-4">
              A technology partner that accelerates your business
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              For over a decade, we have been helping enterprises across the globe
              modernize their software ecosystem, adopt cloud-native practices, and
              build products with world-class engineering excellence.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Our specialty lies in delivering robust web platforms, mobile
              applications, scalable cloud infrastructure, and efficient DevOps
              pipelines, empowering organizations to innovate faster.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              With a strong focus on user experience, maintainability, and
              security, we ensure every solution aligns perfectly with business
              goals while delivering measurable value.
            </p>

            <button className="mt-4 rounded-full border border-gray-500/70 px-6 py-2 text-sm font-medium hover:border-blue-400 hover:text-blue-300 transition">
              Get to know us better
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-16">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "1k+", label: "Projects Delivered" },
            { value: "20+", label: "Global Clients" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card-dark/80 border border-white/10 py-8 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="text-3xl font-semibold text-blue-400">{stat.value}</p>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mt-20 animate-fade-up">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
            Our mission is to empower global businesses with cutting-edge cloud
            technology, scalable platforms, and optimized engineering processes.
            We help companies stay ahead of the curve by providing modern solutions
            built with deep technical expertise and creative problem-solving.
          </p>
        </div>

      </div>
    </div>
  );
}
