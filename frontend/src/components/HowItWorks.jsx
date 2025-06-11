// HowItWorks.jsx
import React from "react";
import { Download, Play, Bookmark, Bot, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description: "Add VidioNotes to Chrome in just one click. No signup required.",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Install",
      icon: <Download className="text-red-500" size={24} />
    },
    {
      number: "2",
      title: "Watch Any Video",
      description: "VidioNotes works with YouTube, Vimeo, and many other video platforms.",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Watch",
      icon: <Play className="text-red-500" size={24} />
    },
    {
      number: "3",
      title: "Bookmark Key Moments",
      description: "Click the bookmark button when you find an important moment.",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=Bookmark",
      icon: <Bookmark className="text-red-500" size={24} />
    },
    {
      number: "4",
      title: "Access AI Features",
      description: "Get AI summaries and searchable transcripts for all your saved videos.",
      image: "https://placehold.co/400x300/e2e8f0/475569?text=AI+Features",
      icon: <Bot className="text-red-500" size={24} />,
      secondaryIcon: <FileText className="text-blue-500" size={18} />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-24 h-80 bg-red-50 rounded-r-full opacity-70"></div>
      <div className="absolute top-1/4 right-0 w-24 h-80 bg-red-50 rounded-l-full opacity-70"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-red-100 text-red-600 font-medium text-sm">Simple Process</span>
          <h2 className="mb-4 text-3xl font-bold font-display text-gray-900 md:text-4xl lg:text-5xl">
            How <span className="text-gradient">VidioNotes</span> Works
          </h2>
          <p className="text-xl text-gray-600">
            Capture and organize video moments in just a few clicks
            <span className="font-handwritten text-2xl text-red-500 ml-2">No more endless searching!</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="overflow-hidden border-0 shadow-lg rounded-xl card-hover bg-white">
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 text-center relative">
                <span className="text-2xl font-bold font-display">Step {step.number}</span>
                <div className="absolute -bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                  {step.icon}
                  {step.secondaryIcon && (
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                      {step.secondaryIcon}
                    </div>
                  )}
                </div>
              </div>
              <img 
                src={step.image} 
                alt={`Step ${step.number}: ${step.title}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold font-display">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
