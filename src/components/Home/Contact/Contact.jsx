import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div>
      <section class="mt-6  py-12">
        <div class="mx-auto px-10 py-8 mt-5 bg-gradient-to-r from-indigo-200 to-purple-200">
          <h2
            data-aos="fade-up"
            class="text-4xl font-bold text-center bg-gradient-to-r animate-text from-gray-500 via-orange-600 to-gray-600 bg-clip-text text-transparent "
          >
            Contact Us
          </h2>
          <p
            data-aos="fade-up"
            class="text-gray-500 text-sm mt-2 text-center md:w-[500px] mx-auto"
          >
            Have a question or want to give feedback? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
          <div class="max-w-2xl mx-auto mb-12"></div>
          <form data-aos="fade-up" class="max-w-xl mx-auto">
            <div class="flex flex-wrap -mx-2 mb-4">
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Your Mail"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button
              class="bg-violet-700 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
