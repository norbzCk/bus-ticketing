import Navbar from "../components/layouts/Navbar";
import PaymentMethods from "../components/booking/PaymentMethods";

export default function Checkout() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold mb-12 text-center">
            Payment
          </h1>

          <PaymentMethods />

        </div>

      </section>
    </>
  );
}