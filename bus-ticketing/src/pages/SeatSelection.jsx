import Navbar from "../components/layouts/Navbar";
import SeatMap from "../components/booking/SeatMap";

export default function SeatSelection() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold mb-12 text-center">
            Select Your Seat
          </h1>

          <SeatMap />

        </div>

      </section>
    </>
  );
}