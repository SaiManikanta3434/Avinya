import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    title: "Machine control",
    category: "Mobile app",
    img: "/mobile.jpg",
  },
  {
    title: "Furniture store",
    category: "E-commerce",
    img: "/commerce.jpg",
  },
  {
    title: "Analytics dashboard",
    category: "Web design",
    img: "/web.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#050712] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8 animate-fade-up">
          <div>
            <h2 className="text-3xl font-semibold">Case studies</h2>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              Our case studies describe design and development solutions we’ve
              implemented for our clients.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden sm:inline-flex rounded-full border border-gray-500/60 px-4 py-2 text-xs font-medium hover:border-blue-400 hover:text-blue-300 transition"
          >
            Explore more projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {cases.slice(0, 3).map((item, i) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-card-dark border border-white/5 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-52">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  {item.category}
                </p>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}

          {/* Large right card like screenshot */}
          
        </div>
      </div>
    </section>
  );
}
