import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [step, setStep] = useState(1); // Step 1: Details, Step 2: Payment
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("Payment Success:", paymentMethod);
      alert("Payment Successful!");
      setStep(1); // Reset form after success
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="w-full max-w-3xl bg-white p-12 rounded-xl shadow-2xl">
        
        {/* Step 1: Enter Details */}
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Enter Payment Details</h2>
            <p className="text-gray-600 mt-3 text-lg">Click below to proceed with payment.</p>

            <button
              onClick={() => setStep(2)}
              className="mt-8 w-full bg-blue-600 text-white text-xl font-semibold py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        )}

        {/* Step 2: Payment Processing */}
        {step === 2 && (
          <form onSubmit={handlePayment} className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Payment Form</h2>

            <div className="border border-gray-300 rounded-lg p-6">
              <CardElement className="text-xl" />
            </div>

            {error && <p className="text-red-600 font-semibold text-center">{error}</p>}

            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full bg-green-600 text-white text-xl font-semibold py-4 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Pay"}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full bg-gray-500 text-white text-xl font-semibold py-4 rounded-lg mt-3 hover:bg-gray-600 transition"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default PaymentForm;
