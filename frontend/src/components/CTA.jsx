// CTA.jsx
import React from "react";
import { Chrome, ArrowRight, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container px-4 mx-auto text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="font-handwritten text-yellow-200 text-2xl mb-4 -rotate-2">Ready to get started?</div>
          <h2 className="mb-6 text-3xl font-bold font-display md:text-4xl lg:text-5xl">
            Start Saving Video Moments Today
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Join thousands of students, professionals, researchers, and creators who use VidioNotes to capture and organize video knowledge.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
            <button className="px-8 py-6 text-lg font-medium bg-white text-red-600 hover:bg-gray-100 shadow-lg shadow-red-700/20 group rounded-md">
              <Chrome className="mr-2 w-5 h-5 inline" />
              <span>Add to Chrome - It's Free</span>
              <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-6 text-lg border border-white text-white hover:bg-white/10 rounded-md">
              Learn More
            </button>
          </div>
          <div className="mt-10 flex justify-center items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-300 fill-yellow-300"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-yellow-200">
              4.9/5 from 1,000+ users in the Chrome Web Store
            </span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Students', 'Researchers', 'Professionals', 'Creators'].map((user, i) => (
                <div key={i} className="text-center">
                  <div className="font-handwritten text-lg text-yellow-200">Perfect for</div>
                  <div className="font-medium text-white">{user}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
