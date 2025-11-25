export default function ContactSection() {
  return (
    <section className="bg-bg-dark py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="animate-fade-up">
          <h2 className="text-3xl font-semibold mb-4">
            Let&apos;s talk about your project
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Tell us about your goals, timeline and challenges. Our consultants
            will come back with a tailored approach and estimations.
          </p>
          <p className="text-sm text-gray-400">
            Email: <span className="text-gray-200">hello@avniya.in</span>
            <br />
            Phone: <span className="text-gray-200">+91 98765 43210</span>
          </p>
        </div>

        <form
          className="space-y-4 rounded-2xl bg-card-dark/90 border border-white/10 p-6 shadow-xl shadow-black/40 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400">Your full name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg bg-[#050814] border border-gray-600/60 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Email address</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg bg-[#050814] border border-gray-600/60 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400">Project details</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg bg-[#050814] border border-gray-600/60 px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">Upload file</label>
            <input
              type="file"
              className="mt-1 block w-full text-xs text-gray-300 file:mr-3 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-1.5 file:text-xs file:font-medium file:text-white hover:file:bg-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-600/30"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
