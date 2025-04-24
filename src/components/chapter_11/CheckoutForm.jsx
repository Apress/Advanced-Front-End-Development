import React from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.address) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
      <div className="w-full max-w-5xl bg-white p-12 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Checkout Form
        </h2>

        {/* Form with Two-Column Layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Name:
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            {errors.name && <p className="text-red-500 text-md mt-2">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Email:
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            {errors.email && <p className="text-red-500 text-md mt-2">{errors.email}</p>}
          </div>

          {/* Address Field - Full Width */}
          <div className="md:col-span-2">
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              Address:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
              rows="4"
            />
            {errors.address && <p className="text-red-500 text-md mt-2">{errors.address}</p>}
          </div>

          {/* Submit Button - Properly Centered */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-blue-600 text-white text-xl font-bold py-4 rounded-md hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
