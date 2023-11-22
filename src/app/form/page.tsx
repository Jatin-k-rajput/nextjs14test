import React, { useState } from 'react';
const SimpleForm: React.FC = () => {
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSubmitted(true);
};
return (
  <div className="relative">
    {/* SVG Animation */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#4d6c90"
        fillOpacity="1"
        d="M0,96L34.3,106.7C68.6,117,137,139,206,165.3C274.3,192,343,224,411,224C480,224,549,192,617,160C685.7,128,754,96,823,80C891.4,64,960,64,1029,69.3C1097.1,75,1166,85,1234,112C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1406.7,320C1373.3,320,1306.7,320,1239,320C1171.4,320,1104.7,320,1037,320C970.3,320,903.7,320,836,320C768,320,701,320,634,320C566.9,320,499,320,431,298.7C362.9,277,294,235,226,213.3C157.7,192,89,192,45,192L0,192L0,96Z"
      ></path>
    </svg>
    <div className="container mx-auto mt-8 relative z-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        {submitted ? (
          <div className="text-center">
            <p className="text-2xl text-green-600 font-bold mb-4">
              Thank you for submitting the form!
            </p>
          </div>

        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border  rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
);
};
export default SimpleForm;
