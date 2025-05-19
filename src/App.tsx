import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CurriculumSection from './components/CurriculumSection';
import Testimonials from './components/Testimonials';
import Enroll from './components/Enroll';
import PDFBrochure from './components/PDFBrochure';
import { FileText } from 'lucide-react';

function App() {
  const [showPDF, setShowPDF] = useState(false);

  if (showPDF) {
    return <PDFBrochure />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CurriculumSection />
        <Testimonials />
        <Enroll />
      </main>
      <button
        onClick={() => setShowPDF(true)}
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
        aria-label="Download PDF Brochure"
      >
        <FileText className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;