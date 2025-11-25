import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Application of AI and ML in cloud monitoring",
    img: "/ai.jpg",
  },
  {
    title: "Top 5 scalable solutions for fintech engagement",
    img: "/fintech.jpg",
  },
  {
    title: "UX/UI design tips for SaaS applications",
    img: "/saas.jpg",   // FIXED
  },
  {
    title: "5 stereotypes about design myths and reality",
    img: "/stero.jpg",  // FIXED
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#050712] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-end justify-between gap-4 mb-8 animate-fade-up">
          <div>
            <h2 className="text-3xl font-semibold">Sharing knowledge</h2>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              On our blog we write about technology trends and provide valuable
              insights on how to digitize businesses.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden sm:inline-flex rounded-full border border-gray-500/60 px-4 py-2 text-xs font-medium hover:border-blue-400 hover:text-blue-300 transition"
          >
            Read more articles
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className="group rounded-2xl overflow-hidden bg-card-dark border border-white/5 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-40">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold group-hover:text-blue-300 transition">
                  {a.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
