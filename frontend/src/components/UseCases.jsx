// UseCases.jsx
"use client"; // Add this if you're using it in Next.js App Router


import React, { useState } from "react";

const UseCases = () => {
  const useCases = [
    {
      id: "students",
      title: "For Students",
      description: "Capture key moments from lecture videos, tutorials, and educational content to build a personal learning library.",
      scenarios: [
        "Save explanations of complex concepts for exam review",
        "Bookmark step-by-step problem solutions", 
        "Create collections for different subjects and courses"
      ],
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Students+Using+VidioNotes"
    },
    {
      id: "professionals",
      title: "For Professionals",
      description: "Keep track of important information from webinars, training videos, and virtual meetings.",
      scenarios: [
        "Save key insights from industry conferences",
        "Collect product demonstrations and tutorials",
        "Bookmark important moments from team meetings"
      ],
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Professionals+Using+VidioNotes"
    },
    {
      id: "researchers",
      title: "For Researchers",
      description: "Organize video data for studies, interviews, and analysis without tedious transcription.",
      scenarios: [
        "Bookmark relevant segments from recorded interviews",
        "Collect examples for qualitative research",
        "Create a database of video evidence for your studies"
      ],
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Researchers+Using+VidioNotes"
    },
    {
      id: "creators",
      title: "For Content Creators",
      description: "Save inspiration, reference material, and examples for your creative projects.",
      scenarios: [
        "Collect video techniques and effects you want to incorporate",
        "Bookmark strong examples for reference",
        "Create mood boards with video clips"
      ],
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Creators+Using+VidioNotes"
    }
  ];
  
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Who Uses VidioNotes?
          </h2>
          <p className="text-xl text-gray-600">
            Perfect for anyone who learns or works with video content
          </p>
        </div>

        <div className="w-full">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`text-base py-2 px-4 ${
                  activeTab === useCase.id 
                    ? "bg-red-100 text-red-600" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {useCase.title}
              </button>
            ))}
          </div>
          
          {useCases.map((useCase) => (
            <div key={useCase.id} className={activeTab === useCase.id ? "block" : "hidden"}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-red-600">
                    {useCase.title}
                  </h3>
                  <p className="text-lg mb-6">
                    {useCase.description}
                  </p>
                  <div className="border-0 shadow-md rounded-md">
                    <div className="p-6">
                      <h4 className="text-lg font-medium mb-4">Common Use Cases:</h4>
                      <ul className="space-y-2">
                        {useCase.scenarios.map((scenario, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-600 mr-2">✓</span>
                            <span>{scenario}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
