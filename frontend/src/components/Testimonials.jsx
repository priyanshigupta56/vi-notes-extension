// Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VidioNotes has completely changed how I study. I can save key parts of lecture videos and review them before exams without rewatching hours of content.",
      name: "Alex Johnson",
      title: "Computer Science Student",
      image: "https://placehold.co/100x100/e2e8f0/475569?text=Alex"
    },
    {
      quote: "As a researcher, I need to analyze hours of video interviews. VidioNotes lets me bookmark important moments and organize them by theme. It's saved me countless hours.",
      name: "Dr. Sarah Chen",
      title: "Social Sciences Researcher",
      image: "https://placehold.co/100x100/e2e8f0/475569?text=Sarah"
    },
    {
      quote: "I use VidioNotes daily to save inspiration for my YouTube videos. Being able to collect video clips instead of just links or notes has been a game-changer for my creative process.",
      name: "Marcus Lee",
      title: "Content Creator",
      image: "https://placehold.co/100x100/e2e8f0/475569?text=Marcus"
    },
    {
      quote: "Our team uses VidioNotes to capture key moments from customer interviews. The ability to share specific video clips has improved our product development process tremendously.",
      name: "Priya Patel",
      title: "Product Manager",
      image: "https://placehold.co/100x100/e2e8f0/475569?text=Priya"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-red-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Thousands of people are already using VidioNotes to capture and organize video knowledge
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex -ml-4 gap-6 flex-wrap">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="md:w-[calc(50%-1rem)] pl-4 mb-6">
                  <div className="border-0 shadow-md h-full bg-white rounded-lg">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-6 flex-grow">
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="relative mr-2 translate-y-0 left-0 h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span className="sr-only">Previous slide</span>
            </button>
            <button className="relative ml-2 translate-y-0 right-0 h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
