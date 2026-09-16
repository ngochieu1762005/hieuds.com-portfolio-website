/*
  hieuds.com portfolio data
  Chỉnh nội dung website chủ yếu ở file này.
  Thêm ảnh: đưa file vào assets/gallery rồi thêm một object mới trong gallery.
  Thêm tài liệu: đưa file vào docs rồi thêm một object mới trong documents.
*/

const profile = {
  siteName: "hieuds.com",
  name: "Nguyen Ngoc Hieu",
  role: "Data Science Undergraduate",
  location: "Hanoi, Vietnam",
  email: "ngochieu1762005@gmail.com",
  phone: "+84 0867700811",
  linkedin: "https://linkedin.com/in/hieu2005",
  github: "https://github.com/ngochieu1762005",
  summary:
    "Data Science undergraduate experienced in building end-to-end ML and analytics pipelines, from data cleaning and feature engineering to modeling and deployment. Delivered a production-style RAG system, customer-review sentiment/recommendation models, and an HR analytics report with Power BI dashboards.",
  avatar: "assets/avatar.png",
  cv: "assets/cv_Hieu.pdf"
};

const skills = [
  { group: "Programming", items: ["Python", "C/C++", "Java", "MATLAB"] },
  { group: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Statistical Analysis", "Feature Engineering"] },
  { group: "AI & NLP", items: ["LLMs", "RAG", "NLP", "Sentiment Analysis", "LangChain", "ChromaDB"] },
  { group: "Visualization", items: ["Power BI", "Excel", "Matplotlib"] },
  { group: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "LaTeX"] },
  { group: "Languages", items: ["Vietnamese (Native)", "English (Working Proficiency)", "French A2 (TCF)"] }
];

const experience = [
  {
    title: "Class Monitor - Data Science Major",
    place: "USTH",
    time: "Sep. 2025 – Present",
    location: "Hanoi, Vietnam",
    points: [
      "Represented Data Science students, coordinated academic activities, and supported communication between students and faculty."
    ]
  },
  {
    title: "Member of Math ICT Department",
    place: "USTH Learning Support Club",
    time: "Nov. 2023 – Dec. 2025",
    location: "Hanoi, Vietnam",
    points: [
      "Developed a grading and online learning platform used by over 1,500 students.",
      "Organized tutorials and supported first-year students in programming, mathematics, and technical subjects."
    ]
  },
  {
    title: "Member of R&D Department",
    place: "USTH Coder Club",
    time: "Dec. 2023 – Jan. 2026",
    location: "Hanoi, Vietnam",
    points: [
      "Mentored students in Basic Programming and Data Structures & Algorithms classes, supporting technical training and problem-solving practice."
    ]
  }

  /*
  Thêm kinh nghiệm mới bằng cách copy mẫu này, nhớ thêm dấu phẩy trước object mới:
  ,{
    title: "Your Role",
    place: "Company / Organization",
    time: "Month Year – Month Year",
    location: "City, Country",
    points: [
      "What you did.",
      "Result or impact."
    ]
  }
  */
];

const projects = [
  {
    name: "USTH Chatbot – Retrieval-Augmented Generation",
    time: "Nov. 2025 – Feb. 2026",
    tags: ["RAG", "LangChain", "ChromaDB", "OCR"],
    description:
      "Built a local academic assistant for USTH students by converting university PDFs into retrievable chunks for document-grounded question answering.",
    link: "https://github.com/MilesDao/USTH_chatbot_Rag"
  },
  {
    name: "Amazon Electronics Customer Feedback",
    time: "Apr. 2025 – Jun. 2025",
    tags: ["NLP", "Random Forest", "XGBoost", "React"],
    description:
      "Built ML and NLP pipelines for satisfaction prediction, sentiment analysis, clustering, and recommendation modeling.",
    link: "https://github.com/Vanduc006/team2-amazon-gdg"
  },
  {
    name: "HR Performance Analysis",
    time: "May 2025 – Jul. 2025",
    tags: ["Excel", "Power BI", "EDA"],
    description:
      "Cleaned and analyzed employee records to support HR decision-making around satisfaction, performance, compensation, and retention.",
    link: "https://drive.google.com/drive/folders/1FB4j0xPv3dLrrlyBFdcHJwKvjP5oKG9b"
  },
  {
    name: "Biodiversity",
    time: "2026",
    tags: ["Machine Learning", "Classification", "Python", "EDA"],
    description:
      "Built machine learning models to predict and classify species from biodiversity data, covering data cleaning, feature engineering, and model evaluation.",
    link: "https://github.com/MilesDao/Biodiversity"
  }

  /*
  Thêm project mới:
  ,{
    name: "Project Name",
    time: "Month Year – Month Year",
    tags: ["Python", "ML"],
    description: "One short professional sentence about the project.",
    link: "https://github.com/.../..."
  }
  */
];

const awards = [
  "Third Prize, Data Science Talent Competition – Vietnam Quant Challenge 2026, Aug. 2026",
  "Champion, USTH Code Championship – USTH Youth Union, Apr. 2025",
  "Second Prize, Summer Data BootCamp 2025 – FTU Youth Union, May 2025",
  "Consolation Prize, Vietnamese Student Informatics Olympiad – Specialized Informatics Division, Dec. 2024",
  "Rector's Certificate for Students with Outstanding Achievement – USTH, Dec. 2024",
  "Top 5 Non-IT, ICPC Asia Regional Contest – ICPC Global, Dec. 2023",
  "Third Prize, Mathematical Modeling Competition, Aug. 2023"
];

const gallery = [
  {
    src: "assets/gallery/innovation-award.jpg",
    title: "Innovation competition award",
    caption: "Award moment from a technology and innovation competition."
  },
  {
    src: "assets/gallery/usth-award-team.jpg",
    title: "USTH academic recognition",
    caption: "Team recognition and academic achievement at USTH."
  },
  {
    src: "assets/gallery/summer-data-bootcamp.jpg",
    title: "Summer Data BootCamp",
    caption: "Second Prize with team The Big Brain."
  },
  {
    src: "assets/gallery/certificate-team.jpg",
    title: "Competition certificate",
    caption: "Certificate and team recognition after project presentation."
  },
  {
    src: "assets/gallery/competition-final.jpg",
    title: "Final round achievement",
    caption: "Award ceremony from a student innovation competition."
  },
  {
    src: "assets/gallery/champion-team.jpg",
    title: "Champion team moment",
    caption: "Team achievement photo from a competition final."
  }

  /*
  Thêm ảnh mới:
  ,{
    src: "assets/gallery/your-image.jpg",
    title: "Photo title",
    caption: "Short caption."
  }
  */
];

const documents = [
  {
    title: "Current CV",
    type: "PDF",
    file: "assets/cv_Hieu.pdf",
    note: "Professional CV with education, experience, projects, skills, awards, and activities."
  }

  /*
  Thêm tài liệu mới:
  ,{
    title: "Certificate / Report / Paper Name",
    type: "PDF",
    file: "docs/your-file.pdf",
    note: "Short note about this document."
  }
  */
];
