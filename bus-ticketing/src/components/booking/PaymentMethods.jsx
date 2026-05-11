export default function PaymentMethods() {
  return (
    <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-lg border border-white/10">

      <h2 className="text-3xl font-bold mb-8">
        Select Payment Method
      </h2>

      <div className="grid gap-6">

        <button className="bg-green-600 py-4 rounded-xl font-bold">
          M-Pesa
        </button>

        <button className="bg-red-600 py-4 rounded-xl font-bold">
          Airtel Money
        </button>

        <button className="bg-blue-700 py-4 rounded-xl font-bold">
          Tigo Pesa
        </button>

      </div>

      <button className="w-full mt-10 bg-cyan-600 py-4 rounded-xl font-bold">
        Complete Booking
      </button>

    </div>
  );
}