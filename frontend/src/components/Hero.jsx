// Hero.jsx
import React from "react";
import { Play, Bookmark, Video, Bot, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full mb-12 text-center md:w-1/2 md:text-left md:mb-0">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-red-100 text-red-600 font-medium text-sm">
              <span className="flex items-center">
                <Bookmark size={16} className="mr-2" />
                Video bookmarking, reimagined
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold font-display leading-tight text-gray-900 md:text-5xl xl:text-6xl">
              Bookmark Video Moments,<br />
              <span className="text-gradient">Not Just Text Notes</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              VidioNotes lets you save key video moments as clips so you can revisit 
              important information instantly. With AI-powered summaries and searchable transcripts,
              finding what you need has never been easier.
              <span className="font-handwritten text-xl text-red-500 ml-2">Super easy!</span>
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300 text-white rounded-md">
                <span className="mr-2">Add to Chrome - It's Free</span>
              </button>
              <button className="px-8 py-6 text-lg border border-red-400 text-red-600 hover:bg-red-50 group rounded-md">
                <Play size={20} className="mr-2 inline group-hover:translate-x-1 transition-transform" />
                Watch Demo
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Bot size={16} className="text-red-500 mr-1" />
                <span className="text-sm text-gray-600">AI Summaries</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <FileText size={16} className="text-red-500 mr-1" />
                <span className="text-sm text-gray-600">Searchable Transcripts</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto" style={{ maxWidth: "550px" }}>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full animate-float z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-red-100 rounded-full animate-float animation-delay-1000 z-0"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl gradient-border z-10">
                <img
                  src="https://placehold.co/600x400/e2e8f0/475569?text=VidioNotes+Demo"
                  alt="VidioNotes in action"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-700 shadow-xl animate-pulse-soft">
                    <span className="sr-only">Play video</span>
                    <Play className="w-10 h-10 ml-1 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg animate-float z-20">
                <Video className="w-6 h-6 text-red-500" />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg animate-float animation-delay-500 z-20">
                <Bot className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
