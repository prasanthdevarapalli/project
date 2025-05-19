import React from 'react';
import { Database, Code, Layers, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Data Engineering School?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive, industry-focused education that prepares you for real-world success in the data engineering field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Relevant Curriculum</h3>
            <p className="text-gray-600">
              Our curriculum is designed in collaboration with industry experts to focus on in-demand skills and technologies.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Code className="h-7 w-7 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Learning</h3>
            <p className="text-gray-600">
              Build real-world projects that you can add to your portfolio, with hands-on practice for every concept.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Layers className="h-7 w-7 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Coverage</h3>
            <p className="text-gray-600">
              From Python fundamentals to advanced cloud architectures, our program covers the full spectrum of data engineering.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Job Guarantee</h3>
            <p className="text-gray-600">
              We stand behind our program with a job guarantee, including interview prep and personalized career coaching.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/919391946765?text=I'm%20interested%20in%20learning%20more%20about%20Data%20Engineering%20School`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;