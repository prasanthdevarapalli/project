import React from 'react';
import { CheckCircle, MessageSquare } from 'lucide-react';

const Enroll: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg opacity-90 mb-8">
              Take the first step towards becoming a professional Data Engineer. Enroll now and benefit from our comprehensive program with a job guarantee.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span>Flexible learning schedule that fits your life</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span>One-on-one mentorship from industry experts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span>Real-world projects to build your portfolio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span>Job guarantee with placement assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span>Access to alumni network and industry connections</span>
              </li>
            </ul>
            
            <a 
              href={`https://wa.me/919391946765?text=I'm%20interested%20in%20enrolling%20for%20Data%20Engineering%20School`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center bg-white text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center max-w-xs"
            >
              <MessageSquare className="mr-2" />
              Enroll via WhatsApp
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">How to Get Started</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Reach Out</h4>
                  <p className="opacity-90">Contact us via WhatsApp to express your interest and schedule a call.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Consultation</h4>
                  <p className="opacity-90">Have a detailed discussion about your goals and how our program fits your needs.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Enrollment</h4>
                  <p className="opacity-90">Complete the enrollment process and secure your spot in the program.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Begin Learning</h4>
                  <p className="opacity-90">Start your journey to becoming a professional Data Engineer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enroll;