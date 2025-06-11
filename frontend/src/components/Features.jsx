// Features.jsx
import React from "react";
import { Scissors, FolderKanban, Globe, Search, Cloud, Share2, FileText, Bot } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Clip Video Moments",
      description: "Save specific video segments with just a click instead of writing text notes.",
      icon: <Scissors size={40} className="text-red-500" />
    },
    {
      title: "Organize & Categorize",
      description: "Group related clips and create collections for different topics or projects.",
      icon: <FolderKanban size={40} className="text-red-500" />
    },
    {
      title: "AI-Powered Summaries",
      description: "Get instant AI-generated summaries of video content to quickly understand key points.",
      icon: <Bot size={40} className="text-red-500" />
    },
    {
      title: "Searchable Transcripts",
      description: "Find specific content with fully searchable, time-coded video transcripts.",
      icon: <FileText size={40} className="text-red-500" />
    },
    {
      title: "Cross-Platform Support",
      description: "Works with YouTube, Vimeo, and many other video platforms.",
      icon: <Globe size={40} className="text-red-500" />
    },
    {
      title: "Smart Search",
      description: "Quickly find saved clips using keywords or by browsing categories.",
      icon: <Search size={40} className="text-red-500" />
    },
    {
      title: "Cloud Sync",
      description: "Access your video notes across all your devices with secure cloud storage.",
      icon: <Cloud size={40} className="text-red-500" />
    },
    {
      title: "Sharing Options",
      description: "Share individual clips or collections with friends or colleagues.",
      icon: <Share2 size={40} className="text-red-500" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-soft relative">
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-red-100 rounded-full opacity-60 blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-red-100 text-red-600 font-medium text-sm">Everything You Need</span>
          <h2 className="mb-4 text-3xl font-bold font-display text-gray-900 md:text-4xl lg:text-5xl">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to capture and organize video knowledge
            <span className="font-handwritten text-2xl text-red-500 ml-2">Made for you!</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl bg-white/80 backdrop-blur-sm card-hover p-8">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-red-50 rounded-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold font-display text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
