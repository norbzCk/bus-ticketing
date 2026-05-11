import Navbar from "../components/layouts/Navbar";
import PassengerForm from "../components/booking/PassengerForm";

export default function PassengerDetails() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold mb-12 text-center">
            Passenger Details
          </h1>

          <PassengerForm />

        </div>

      </section>
    </>
  );
}