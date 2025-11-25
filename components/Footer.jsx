import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050712] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Avniya Cloud Solutions</h3>
          <p className="text-sm text-gray-400">
            Software development, cloud and DevOps services that help modern
            businesses scale with confidence.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Company
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><Link href="/company">About</Link></li>
            <li><Link href="/case-studies">Case studies</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Services
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Web development</li>
            <li>Cloud / DevOps</li>
            <li>Mobile apps</li>
            <li>UI/UX design</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Contact
          </h4>
          <p className="mt-3 text-sm text-gray-300">
            info@avniya.in
            <br />
            +91 98765 43210
            <br />
            Bengaluru, India
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Avniya Cloud Solutions. All rights
            reserved.
          </span>
          <span>Made with passion for modern digital products.</span>
        </div>
      </div>
    </footer>
  );
}
