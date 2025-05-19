import React, { useState } from 'react';
import { curriculumData } from '../data/curriculumData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CurriculumSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    if (expandedModule === index) {
      setExpandedModule(null);
    } else {
      setExpandedModule(index);
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum is designed to transform beginners into industry-ready data engineers through a structured learning path.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {curriculumData.map((module, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                className={`w-full text-left p-6 flex justify-between items-center focus:outline-none
                  ${expandedModule === index ? 'bg-blue-700 text-white' : 'bg-white text-gray-900'}`}
                onClick={() => toggleModule(index)}
              >
                <h3 className="text-xl font-bold">Module {index + 1}: {module.title}</h3>
                {expandedModule === index ? 
                  <ChevronUp className={`h-5 w-5 ${expandedModule === index ? 'text-white' : 'text-gray-600'}`} /> : 
                  <ChevronDown className={`h-5 w-5 ${expandedModule === index ? 'text-white' : 'text-gray-600'}`} />
                }
              </button>
              
              {expandedModule === index && (
                <div className="p-6 border-t border-gray-200 bg-white">
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 text-blue-700 font-bold text-sm">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>

                  {module.problems && (
                    <div className="mt-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Practice Problems:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.problems.map((problem, problemIndex) => (
                          <div key={problemIndex} className="bg-blue-50 p-3 rounded text-gray-700">
                            {problem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {module.projects && (
                    <div className="mt-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Projects:</h4>
                      {module.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="mb-4">
                          <h5 className="font-bold text-gray-900 mb-2">{project.title}</h5>
                          <ul className="space-y-2 ml-5">
                            {project.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="list-disc text-gray-700">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={`https://wa.me/919391946765?text=I'm%20interested%20in%20enrolling%20for%20Data%20Engineering%20School`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Enroll Now & Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;