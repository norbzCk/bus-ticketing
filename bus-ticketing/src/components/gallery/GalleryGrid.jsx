import Navbar from "../layouts/Navbar";

const images = [
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
  "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e",
];

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white px-6 py-32">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-16">
            Gallery
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl"
              >

                <img
                  src={image}
                  className="
                  w-full
                  h-80
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                "
                />

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}