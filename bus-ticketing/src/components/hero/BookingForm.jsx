import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    navigate("/search-results");
  }

  return (
    <div
      className="
      bg-white/10
      backdrop-blur-lg
      border
      border-white/20
      p-8
      rounded-3xl
      shadow-2xl
      w-full
      max-w-md
    "
    >

      <h2 className="text-3xl font-bold text-white mb-8">
        Search Bus
      </h2>

      <form
        onSubmit={handleSearch}
        className="space-y-5"
      >

        <input
          type="text"
          placeholder="From"
          className="
            w-full
            p-4
            rounded-xl
            bg-white/10
            border
            border-white/20
            text-white
            placeholder-gray-300
            outline-none
          "
        />

        <input
          type="text"
          placeholder="To"
          className="
            w-full
            p-4
            rounded-xl
            bg-white/10
            border
            border-white/20
            text-white
            placeholder-gray-300
            outline-none
          "
        />

        <input
          type="date"
          className="
            w-full
            p-4
            rounded-xl
            bg-white/10
            border
            border-white/20
            text-white
            outline-none
          "
        />

        <button
          className="
          w-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          py-4
          rounded-xl
          font-bold
          text-white
        "
        >
          Search Buses
        </button>

      </form>

    </div>
  );
}