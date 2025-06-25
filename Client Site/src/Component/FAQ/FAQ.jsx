import React, { useEffect, useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("faq.json") // adjust the path if needed
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Failed to load FAQ data:", error));
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 bg-white dark:bg-base-100">
      <h2 className="text-2xl text-base-content sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions ❓
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow bg-base-200 rounded-box shadow hover:shadow-md transition-shadow duration-200"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-base sm:text-lg md:text-xl font-medium peer-checked:text-[#1ed61e]">
              {faq.question}
            </div>
            <div className="collapse-content text-sm sm:text-base">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;