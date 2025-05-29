import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#f3f8e9] py-16 px-4 sm:px-6 lg:px-8">
      {/* Contact Section */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-[#74a92a] tracking-wide uppercase mb-2 transition-opacity duration-500 ease-in-out">Let's Talk</h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 transition-transform duration-500 hover:scale-105">Contact Us</h2>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {[
          { icon: '✉️', type: 'Email Address', value: 'sippure.tea@gmail.com' },
          { icon: '📍', type: 'Address', value: 'Khusibu.Nayabazar' },
          { icon: '📞', type: 'Phone Number', value: '+977 9804328885' },
        ].map((info, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 w-60 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-3xl text-[#74a92a] mb-3 animate-bounce">{info.icon}</div>
            <h4 className="text-[#74a92a] font-bold mb-2">{info.type}</h4>
            <p className="text-gray-700">{info.value}</p>
          </div>
        ))}
      </div>

      {/* Message Form Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="bg-[#e6d9ca] rounded-xl p-6 flex justify-center items-center w-full lg:w-1/2 transition-transform duration-500 hover:scale-105">
          <img src="/Label.png" alt="Sippure Herbal Tea Product" className="max-w-full h-auto rounded-lg" />
        </div>

        <div className="bg-white rounded-xl p-8 w-full lg:w-1/2 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-center mb-6 transition-transform duration-500 hover:scale-105">Send Us Message</h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input type="text" className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#a4d977] transition duration-300" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Phone Number</label>
              <input type="tel" className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#a4d977] transition duration-300" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Your Message</label>
              <textarea className="w-full p-3 h-32 bg-gray-100 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#a4d977] transition duration-300"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-[#a4d977] text-[#333] px-8 py-3 text-lg rounded-full shadow hover:shadow-lg transition-all duration-300 hover:bg-[#94c967]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
