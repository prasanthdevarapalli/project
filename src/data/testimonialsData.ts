export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Data Engineer at Microsoft",
    comment: "The curriculum at Data Engineering School is top-notch. I went from knowing basic SQL to implementing complex data pipelines. The job guarantee was fulfilled within 2 months of graduation.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Senior Data Engineer at Amazon",
    comment: "The hands-on projects were the highlight for me. Working on real-world problems prepared me for the challenges I now face in my role. The mentorship was invaluable.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Cloud Data Engineer at Google",
    comment: "I had attempted to learn data engineering on my own but struggled with the practical implementation. This program bridged that gap perfectly. Worth every rupee!",
    rating: 5
  },
  {
    name: "Ananya Krishnan",
    role: "Data Engineer at Flipkart",
    comment: "The job preparation module was exceptional. The mock interviews and feedback sessions helped me secure multiple offers. I'm now earning 3x my previous salary.",
    rating: 5
  },
  {
    name: "Arjun Reddy",
    role: "Data Engineer at PhonePe",
    comment: "Coming from a non-CS background, I was worried about keeping up. The progressive curriculum and supportive instructors made the transition smooth. Now I'm confidently building data pipelines.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    role: "Big Data Engineer at Swiggy",
    comment: "The GCP and Airflow modules were particularly valuable. I was able to implement what I learned immediately in my new role. The project-based learning approach really works!",
    rating: 4
  }
];