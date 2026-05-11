import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeatMap() {
  const navigate = useNavigate();

  const seats = [
    "A1", "A2",
    "B1", "B2",
    "C1", "C2",
    "D1", "D2",
    "E1", "E2",
  ];

  const [selectedSeat, setSelectedSeat] = useState(null);

  return (
    <div className="bg-white/10 p-10 rounded-3xl border border-white/10 backdrop-blur-lg">

      <div className="bg-gray-700 rounded-xl text-center py-3 mb-12">
        DRIVER
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">

        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => setSelectedSeat(seat)}
            className={`
              h-16
              rounded-xl
              font-bold
              transition
              ${selectedSeat === seat
                ? "bg-blue-600"
                : "bg-green-600 hover:bg-green-700"
              }
            `}
          >
            {seat}
          </button>
        ))}

      </div>

      <button
        onClick={() => navigate("/passenger-details")}
        className="w-full mt-12 bg-blue-600 py-4 rounded-xl font-bold"
      >
        Continue
      </button>

    </div>
  );
}