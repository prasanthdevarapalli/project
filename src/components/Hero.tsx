import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Become a <span className="text-blue-300">Data Engineering</span> Professional
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Master the tools, technologies, and skills needed to succeed in the high-demand field of Data Engineering. Comprehensive curriculum with job guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/919391946765?text=I'm%20interested%20in%20enrolling%20for%20Data%20Engineering%20School`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center bg-white text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center group"
              >
                Enroll Now 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#curriculum" 
                className="flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Explore Curriculum
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Program Highlights:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Comprehensive 10-module curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Hands-on real-world projects</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Expert instruction and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Interview preparation and career coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>100% job guarantee with placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;