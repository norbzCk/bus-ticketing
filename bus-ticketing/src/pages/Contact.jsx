import Navbar from "../components/layouts/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-8">
            Contact Us
          </h1>

          <p className="text-gray-300 text-lg mb-12">
            Reach us anytime for support and booking assistance.
          </p>

          <div className="space-y-6 text-xl">
            <p>📞 +255 700 000 000</p>
            <p>📧 support@busgo.com</p>
            <p>📍 Dar es Salaam, Tanzania</p>
          </div>

        </div>

      </section>
    </>
  );
}