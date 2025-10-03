import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    setSubmittedData(formData); // save submitted data
    setFormData({ name: "", email: "", password: "" }); // clear form
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-gray-100 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold text-center">Registration Form</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div className="mt-6 p-4 border rounded bg-white shadow-md w-80">
          <h3 className="font-bold text-lg mb-2">Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
