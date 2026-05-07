/**
 * =====================================================
 *  SHUVO WEBSITE — CENTRAL CONTENT FILE
 *  Edit this file to update all pages automatically.
 *  After editing, just re-upload to GitHub.
 * =====================================================
 */
const SITE_DATA = {

  /* ---------- SIDEBAR (shared on every page) ---------- */
  profile: {
    name:       "A.K.M. Aktaruzzaman Shuvo",
    role:       "Research Enthusiast | B.Sc in EEE,AUST | MS in BME,DU",
    subtitle:   "Former Lecturer @ BUFT",
    photo:      "../assets/images/profile.jpg",   // path relative to sub-folders
    photoRoot:  "assets/images/profile.jpg",      // path from root (index.html)
    affiliation:"University of Dhaka",
    location:   "Dhaka, Bangladesh",
    phone:      "+880 174-3470498",
    phoneLink:  "tel:+8801743470498",
    email:      "aktrzzmn.shuvo@gmail.com",
    scholar:    "https://scholar.google.com/citations?user=sFiY980AAAAJ&hl=en",
    cv:         "assets/images/cv.pdf",
    social: {
      facebook:  "https://www.facebook.com/aktrzmn.shuvo/",
      instagram: "https://www.instagram.com/aktrzzmn.shuvo/",
      linkedin:  "https://www.linkedin.com/in/aktaruzzaman-shuvo/",
      twitter:   "#",
      youtube:   "#"
    }
  },

  /* ---------- HOME PAGE ---------- */
  home: {
    bio: [
      "I am an Electrical Engineer with a <strong>Bachelor of Science in Electrical and Electronic Engineering (EEE)</strong> from <strong>Ahsanullah University of Science and Technology</strong>, completed in November 2023. During my undergraduate studies, I specialized in power systems, control systems, VLSI, digital logic design, electronics, electromagnetism, and programming, while building strong expertise in electrical networks, biosensor design, photonics, renewable energy integration, and sustainable power solutions.",
      "Most recently, I served as a <strong>Lecturer</strong> at <strong>BGMEA University of Fashion & Technology (BUFT)</strong>, where I taught and mentored students in engineering disciplines. My academic journey began at Gaibandha Boys' High School (SSC, 2016) and continued at Gaibandha Government College (HSC, 2018).",
      "I'm passionate about energy systems and research, and I hope to make a difference in sustainable power by learning, innovating, and sharing knowledge with others."
    ],
    interests: [
      "2D Materials",
      "Photonics",
      "Material Science",
      "Sensors",
      "Renewable Energy Systems"
    ],
    updates: [
      "Looking for new project on Photonics!",
      "One Journal Published at Next Materials 2026!",
      "Started Working on Green Energy [Hydrogen fuel cell] with Prof. Dr. Omar Farrok!",
      "One paper accepted at ICEARS 2025!",
      "Recently participated at ICEARS 2025 organized by St. Mother Theresa Engineering College, Tuticorin, Tamil Nadu, India!"
    ],
    recentPubs: [
      {
        badge: "ICEARS 2025",
        type:  "conference",
        title: "Comparative Techno-Economic Feasibility Analysis of Hybrid Renewable Energy-based EV Charging Stations in a Developing Country",
        cite:  "M. S. Islam, A. K. M. A. Shuvo*, S. Haque, A. M. Rizvi and S. Hasan, 2025 ICEARS, Tuticorin, India, pp. 32–37, doi: 10.1109/ICEARS64219.2025.10940582."
      },
      {
        badge: "Next Materials 2026",
        type:  "journal",
        title: "Influence of annealing temperature on the structural, dielectric, and impedance properties of Sm and Co co-doped BiFeO₃ for advanced electronic and energy applications",
        cite:  "Shuvo, A. A., Adnan, M. M. R., Islam, M. S., & Rhaman, M. M. (2026). Next Materials, 11, 101967."
      }
    ]
  },

  /* ---------- RESEARCH PAGE ---------- */
  research: {
    intro: "You can also find my articles on my <a href='https://scholar.google.com/citations?user=sFiY980AAAAJ&hl=en' target='_blank'>Google Scholar profile</a>.",
    papers: [
      {
        type:  "conference",
        badge: "ICEARS 2025 · IEEE",
        title: "Comparative Techno-Economic Feasibility Analysis of Hybrid Renewable Energy-based EV Charging Stations in a Developing Country",
        venue: "Published in IEEE, 2025",
        desc:  "This paper explores the integration of hybrid renewable energy sources (HRES), specifically solar and wind power, into electric vehicle (EV) charging stations in Bangladesh, focusing on Cox's Bazar and the Sirajganj Economic Zone. The study evaluates the technical feasibility, cost-effectiveness, and environmental impact of using HRES for EV charging.",
        cite:  "M. S. Islam, A. K. M. A. Shuvo, S. Haque, A. M. Rizvi, and S. Hasan, in Proc. 2025 Int. Conf. Electron. Renew. Syst. (ICEARS), Tuticorin, India, 2025, pp. 32–37.",
        doi:   "https://doi.org/10.1109/ICEARS64219.2025.10940582"
      },
      {
        type:  "journal",
        badge: "Next Materials 2026",
        title: "Influence of annealing temperature on the structural, dielectric, and impedance properties of Sm and Co co-doped BiFeO₃ for advanced electronic and energy applications",
        venue: "Published in Next Materials, 2026",
        desc:  "This paper focuses on improving the properties of a specially engineered material for use in modern electronic and energy-related devices. The results show improved charge transport and dielectric response, suggesting this material as a strong candidate for future applications.",
        cite:  "Shuvo, A. A., Adnan, M. M. R., Islam, M. S., & Rhaman, M. M. (2026). Next Materials, 11, 101967.",
        doi:   "https://doi.org/10.1016/j.nxmate.2026.101967"
      }
    ]
  },

  /* ---------- ACADEMIC PAGE ---------- */
  academic: {
    levels: [
      {
        id:     "undergrad",
        label:  "Undergraduate",
        badge:  "undergrad",
        title:  "B.Sc. in Electrical & Electronic Engineering",
        school: "Ahsanullah University of Science and Technology (AUST)",
        period: "Spring 2019 – November 2023",
        mapLink: "https://www.google.com/maps/place/Ahsanullah+University+of+Science+and+Technology",
        webLink: "https://www.aust.edu",
        body: [
          "I completed my undergraduate studies (165 credit hours) at AUST. My thesis — <em>\"Investigation of Electric Properties of Bismuth Ferrite Nanoparticles at Various Temperatures\"</em> — was conducted under <strong>Prof. Dr. Meganur Rahman</strong> and awarded the highest grade (4.00/4.00).",
          "My academic performance placed me in the top 5% of my batch, earning tuition-fee waivers in many semesters. I actively participated in seminars, technical competitions, sports events, and cultural programs."
        ],
        courses: [
          "Electric Circuit Analysis I & II","Electronics I & II","Energy Conversion I, II & III",
          "Electromagnetics","Solid State Devices","Signals and Linear Systems",
          "Digital Electronics (DLD)","Digital Signal Processing","Power Systems I & II",
          "Power Electronics","Power System Protection","Microprocessor & Interfacing",
          "Computer Architecture","Optical Fiber Communication","VLSI I","Control Systems"
        ],
        tools: "OrCAD/PSPICE · Proteus · Quartus · MATLAB/Simulink · AutoCAD · PowerWorld · Cadence Virtuoso · HOMER Pro · Origin",
        hardware: "Arduino Uno · Arduino Nano · ESP8266 NodeMCU · MPU 8086 · FPGA Board · Various sensor systems",
        slides: ["../assets/images/slide1.jpg","../assets/images/slide2.jpg","../assets/images/slide3.jpg","../assets/images/slide4.jpg","../assets/images/slide5.jpg"]
      },
      {
        id:     "hsc",
        label:  "Higher Secondary Certificate",
        badge:  "hsc",
        title:  "HSC — Science Group",
        school: "Gaibandha Government College",
        period: "2016 – 2018",
        mapLink: "https://maps.google.com/?q=Gaibandha+Government+College",
        webLink: "https://ggc.edu.bd",
        body: [
          "I completed my Higher Secondary Certificate from Gaibandha Government College in 2018. Those two years were intense yet formative — demanding schedules, regular tests, and relentless academic pressure that shaped my resilience.",
          "Class Day and college camaraderie remain cherished memories. After successfully passing HSC in 2018, I shifted focus toward engineering admission preparation."
        ],
        slides: ["../assets/images/slide6.jpg","../assets/images/slide7.jpg"]
      },
      {
        id:     "ssc",
        label:  "Secondary School Certificate",
        badge:  "ssc",
        title:  "SSC — Science Group",
        school: "Gaibandha Govt. Boys' High School",
        period: "2011 – 2016",
        mapLink: "https://www.google.com/maps/place/Gaibandha+Government+Boys+High+School",
        webLink: "https://ggbhs.edu.bd/",
        body: [
          "My school journey began at Gaibandha Govt. Boys' High School in 2011. I sat for the Junior School Certificate (JSC) and earned a scholarship for academic performance. I then chose the Science group for SSC (session 2014–2015, exam 2016).",
          "Those school years were the most cherished — exploration, friendship, sports, competitions, and memories that laid the foundation for my personal growth."
        ],
        slides: ["../assets/images/slide8.jpg","../assets/images/slide9.jpg"]
      }
    ]
  },

  /* ---------- PROJECTS PAGE ---------- */
  projects: {
    levels: [
      {
        label:    "Graduate Level",
        badge:    "graduate",
        projects: []   // Add graduate projects here when ready
      },
      {
        label: "Undergraduate Level",
        badge: "undergrad",
        projects: [
          {
            title: "Notch Filter to Eliminate Noise from an ECG Signal",
            desc:  "Designed a 110 Hz notch filter using pole-zero placement in MATLAB to remove power-line interference from ECG signals. Conducted FFT analysis to evaluate signal clarity.",
            drive: "",
            slides:["../assets/images/slide10.jpg","../assets/images/slide11.jpg"]
          },
          {
            title: "Microcontroller-based Energy Efficient Escalator using Arduino Uno",
            desc:  "Built an Arduino-controlled escalator prototype that activates only when passengers are detected. Integrated sensors and relays to control motor operation.",
            drive: "",
            slides:["../assets/images/slide12.jpg"]
          },
          {
            title: "IoT-Based Automatic Fish Feeder",
            desc:  "Developed an IoT-based automatic fish feeder using the ESP8266 microcontroller, enabling remote control through the Blynk app. The system synchronizes feeding times via NTP.",
            drive: "",
            slides:[]
          },
          {
            title: "Optimum Power Control at Different Loading Using Current Injector Device",
            desc:  "Developed a power balancing system using current injectors, relays, and MCBs for smart substation control. Optimized load distribution across phases.",
            drive: "",
            slides:["../assets/images/slide14.jpg","../assets/images/slide15.jpg"]
          },
          {
            title: "PID Controller Design for Electric Traction Motor",
            desc:  "Modeled and tuned PID controllers in MATLAB/Simulink to improve electric traction motor performance. Applied pole-zero analysis, root locus methods, and transfer function modeling.",
            drive: "",
            slides:["../assets/images/slide16.jpg","../assets/images/slide17.jpg","../assets/images/slide18.jpg"]
          },
          {
            title: "Different CMOS SRAM Circuits' Implementation and Performance Analysis — Cadence Virtuoso",
            desc:  "Designed and simulated 7T–10T CMOS SRAM circuits in Cadence Virtuoso. Evaluated performance metrics such as delay, power consumption, and area.",
            drive: "",
            slides:["../assets/images/slide19.jpg","../assets/images/slide20.jpg","../assets/images/slide21.jpg","../assets/images/slide22.jpg"]
          },
          {
            title: "SG3525 PWM Inverter 12V to 220V, 300W using two IRF-520 transistors",
            desc:  "Constructed a PWM inverter circuit using the SG3525 IC and IRF-520 transistors to convert 12V DC to 220V AC. Focused on efficient transistor switching and performance testing.",
            drive: "",
            slides:["../assets/images/slide25.jpg","../assets/images/slide26.jpg"]
          },
          {
            title: "2D Illustration of 800 sq ft Flat and Electrical Load Connection Design using AutoCAD",
            desc:  "Created a 2D flat layout in AutoCAD with complete electrical load design — load calculation, cable sizing, MCB/RCB selection, and switchboard placement.",
            drive: "",
            slides:["../assets/images/slide27.jpg","../assets/images/slide28.jpg"]
          }
        ]
      }
    ]
  },

  /* ---------- BLOG PAGE ---------- */
  blog: {
    posts: []   // Add blog posts here: { title, date, body }
  }

};
