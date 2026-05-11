export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-12">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Bookings</h2>
          <p className="text-5xl mt-4">120</p>
        </div>

        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Revenue</h2>
          <p className="text-5xl mt-4">8M</p>
        </div>

        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Routes</h2>
          <p className="text-5xl mt-4">18</p>
        </div>

      </div>

    </section>
  );
}