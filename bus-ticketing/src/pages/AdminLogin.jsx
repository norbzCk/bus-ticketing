import Navbar from "../components/layouts/Navbar";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white/10 p-10 rounded-3xl border border-white/10 backdrop-blur-lg text-white">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Admin Login
          </h1>

          <div className="space-y-6">

            <input
              type="email"
              placeholder="Admin Email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
            />

            <button
              onClick={() => navigate("/admin-dashboard")}
              className="w-full bg-blue-600 py-4 rounded-xl font-bold"
            >
              Login
            </button>

          </div>

        </div>

      </section>
    </>
  );
}