import Navbar from "../components/layouts/Navbar";
import BusCard from "../components/buses/BusCard";
import bus1 from "../assets/bus1.png";

const buses = [
  {
    id: 1,
    company: "BusGo Premium",
    departure: "06:00 AM",
    arrival: "02:00 PM",
    price: "45,000 TZS",
    seats: 12,
    image: bus1,
  },
  {
    id: 2,
    company: "Royal Express",
    departure: "08:00 AM",
    arrival: "04:00 PM",
    price: "50,000 TZS",
    seats: 8,
    image: bus1,
  },
];

export default function SearchResults() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-12">
            Available Buses
          </h1>

          <div className="grid gap-8">

            {buses.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}