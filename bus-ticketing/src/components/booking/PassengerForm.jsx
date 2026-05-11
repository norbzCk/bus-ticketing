import { useNavigate } from "react-router-dom";

export default function PassengerForm() {
  const navigate = useNavigate();

  return (
    <form className="bg-white/10 p-10 rounded-3xl backdrop-blur-lg border border-white/10 space-y-6">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
      />

      <button
        type="button"
        onClick={() => navigate("/checkout")}
        className="w-full bg-blue-600 py-4 rounded-xl font-bold"
      >
        Continue To Payment
      </button>

    </form>
  );
}