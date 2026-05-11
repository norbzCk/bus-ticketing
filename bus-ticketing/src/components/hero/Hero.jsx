import BookingForm from "./BookingForm";
import bus1 from "../../assets/bus1.png";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
    "
      style={{
        backgroundImage: `url(${bus1})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        px-6
        py-20
      "
      >

        {/* Left */}

        <div className="text-white">

          <p className="text-blue-400 font-semibold mb-4">
            PREMIUM BUS BOOKING
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
          "
          >
            Travel Comfortably Across Tanzania
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Book tickets online quickly, choose your seats,
            and enjoy a premium travel experience.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-3
              rounded-xl
              font-semibold
            "
            >
              Book Now
            </button>

            <button
              className="
              border
              border-white/20
              bg-white/10
              backdrop-blur-lg
              px-6
              py-3
              rounded-xl
            "
            >
              View Routes
            </button>

          </div>

        </div>

        {/* Right */}

        <BookingForm />

      </div>

    </section>
  );
}