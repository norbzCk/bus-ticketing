import { useNavigate } from "react-router-dom";

export default function BusCard({ bus }) {
  const navigate = useNavigate();

  return (
    <div
      className="
      bg-white/10
      border border-white/10
      backdrop-blur-lg
      rounded-3xl
      overflow-hidden
      grid md:grid-cols-3
    "
    >

      <img
        src={bus.image}
        className="h-full w-full object-cover"
      />

      <div className="p-8 md:col-span-2 flex flex-col justify-between">

        <div>

          <h2 className="text-3xl font-bold mb-4">
            {bus.company}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">

            <div>
              <p className="text-sm">Departure</p>
              <h3 className="text-xl font-semibold">
                {bus.departure}
              </h3>
            </div>

            <div>
              <p className="text-sm">Arrival</p>
              <h3 className="text-xl font-semibold">
                {bus.arrival}
              </h3>
            </div>

            <div>
              <p className="text-sm">Seats Left</p>
              <h3 className="text-xl font-semibold">
                {bus.seats}
              </h3>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between mt-8">

          <h2 className="text-3xl font-black text-blue-400">
            {bus.price}
          </h2>

          <button
            onClick={() => navigate("/seat-selection")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Select Seat
          </button>

        </div>

      </div>

    </div>
  );
}