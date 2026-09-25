/* Portfolio content for Rahul Dhiman — keep facts identical to the CV (see resume-work/ALIGNMENT_PACK.md). */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title:
    "Rahul Dhiman | Mining Technology Lead — FMS, Mine Control & AHS Readiness",
  description:
    "Rahul Dhiman, mining technology lead at Weda Bay Nickel: fleet management systems (Wenco), dispatch and mine control, autonomous haulage readiness, operational technology and in-house digital tools. 11+ years in Indonesia and the UAE.",
  og: {
    title: "Rahul Dhiman | Mining Technology Lead",
    type: "website",
    url: "https://lucky0000123.github.io/rahuldhiman-portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Rahul Dhiman",
  logo_name: "RahulDhiman",
  subTitle:
    "Mining technology lead with 11+ years in open-pit mining and mineral processing in Indonesia and the UAE. I own the fleet management, dispatch, mine-control and safety platform at Weda Bay Nickel, the world's largest nickel mine: 891+ dump trucks, 4 mine sites, 60+ km of haul roads and 7 mining contractors. I lead Autonomous Haulage System (AHS) readiness and build the tools my operations run on: a production simulator, a QR identity system, an FMS prototype and live control-room dashboards. Wenco Dynamic Dispatch certified · Lean Six Sigma Black Belt · doctoral researcher in AI and autonomous mining.",
  role: "Mining Technology Lead",
  // Rotates next to the role, one at a time (like a ticker).
  disciplines: [
    "FMS & Dispatch",
    "Mine Control",
    "AHS Readiness",
    "Automation & OT",
    "Mining Data & AI",
  ],
  summary:
    "11+ years in open-pit mining and mineral processing across Indonesia and the UAE. I run the fleet management, dispatch and safety platform at Weda Bay Nickel, lead autonomous haulage readiness, and build the digital tools the operation runs on.",
  highlights: [
    { value: "891+", label: "dump trucks on one dispatch platform" },
    { value: "15–20 → 2–3 min", label: "dispatch response time" },
    {
      value: "64k → 80–91k t/day",
      label: "quarry production after FMS go-live",
    },
    { value: "~40%", label: "fewer speeding violations" },
  ],
  // Swap this file for the professional portrait when it is ready.
  location: "Weda Bay, Indonesia · open to relocation",
  resumeLink:
    "https://lucky0000123.github.io/rahuldhiman-portfolio/Rahul_Dhiman_Mining_Technology_CV.pdf",
  portfolio_repository: "https://github.com/Lucky0000123/rahuldhiman-portfolio",
  githubProfile: "https://github.com/Lucky0000123",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rahul-dhiman2024/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/Lucky0000123",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:work.rahuldhiman@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Home page photos (Wikimedia Commons, Creative Commons licences; credit shown under each photo).
const homePhotos = {
  dispatch: {
    file: "skill-dispatch-loading.jpg",
    alt:
      "Ultra-class haul truck being loaded by an electric shovel at a surface mine",
    caption: "Shovel-truck loading, the core of every dispatch decision",
    author: "Peabody Energy, Inc.",
    license: "CC BY 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Coal_Haul_Truck_at_North_Antelope_Rochelle.png",
  },
  autonomy: {
    file: "skill-autonomous-haul-truck.jpg",
    alt:
      "Autonomous-ready mining haul truck with sensor mast at an iron ore mine",
    caption: "Autonomous haul truck at an iron ore mine",
    author: "RobSimmons223311",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Ferrexpo_autonomous_truck.jpg",
  },
  controlRoom: {
    file: "skill-scada-control-room.jpg",
    alt: "Operator at SCADA screens in a mineral processing control room",
    caption: "SCADA control room at a mineral processing plant",
    author: "photosmith2011",
    license: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:MCM_Mufilira_-_Smelter_control_room.jpg",
  },
};

const skills = {
  data: [
    {
      title: "Fleet Management, Dispatch & Mine Control",
      fileName: "DataScienceImg",
      photo: "dispatch",
      skills: [
        "🚚 Technical owner of the dispatch and safety platform at Weda Bay Nickel: 891+ dump trucks, 4 mine sites, 60+ km of haul roads, 7 mining contractors, ~3,000 operators.",
        "⏱️ Replaced manual dispatch with real-time GPS, speed and onboard payload telemetry; dispatch response time cut from 15–20 minutes to 2–3.",
        "🏗️ Delivered a greenfield Wenco FMS from tower survey to go-live at Stevin Rock; daily production rose from 64,000 to 80,000–91,000 tonnes (+25–42%).",
        "🖥️ Designed and ran 24/7 mine control rooms at 95%+ platform uptime; Wenco Dynamic Dispatch certified; short interval control with hourly Power BI plan revision.",
        "🛡️ Cut speeding violations ~40% with geofenced automated speed enforcement, AI driver monitoring (fatigue, seatbelt) and ADAS forward collision warning.",
      ],
      softwareSkills: [
        {
          skillName: "Wenco FMS",
          fontAwesomeClassname: "mdi:truck",
          style: { color: "#0A5DAB" },
        },
        {
          skillName: "Dynamic Dispatch",
          fontAwesomeClassname: "mdi:swap-horizontal-bold",
          style: { color: "#0E6BA8" },
        },
        {
          skillName: "Mine Control Room",
          fontAwesomeClassname: "mdi:monitor-dashboard",
          style: { color: "#37474F" },
        },
        {
          skillName: "Microsoft Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { color: "#CC2927" },
        },
        {
          skillName: "Trimble GNSS",
          fontAwesomeClassname: "mdi:satellite-variant",
          style: { color: "#00539F" },
        },
        {
          skillName: "Geofencing & Telematics",
          fontAwesomeClassname: "mdi:map-marker-radius",
          style: { color: "#D00000" },
        },
      ],
    },
    {
      title: "Autonomy Readiness, Networks & Safety Technology",
      fileName: "CloudInfraImg",
      photo: "autonomy",
      skills: [
        "🤖 Leads Autonomous Haulage System (AHS) operational readiness: network coverage, high-precision positioning, zone design, semi-autonomous workflows and remote allocation logic.",
        "📡 Built site-wide Rajant Kinetic Mesh networks (solar-powered towers, radios, repeaters), VHF/UHF and 4G/LTE coverage, and fibre backbones with RSTP, Ethernet/IP and Modbus TCP.",
        "📻 Built a site digital radio network with thousands of radios, each tied to a verified operator record; a QR identity system verifies permit, training, vehicle and job in one scan.",
        "📷 Rolled out fleet cameras, IoT sensors, haul-road CCTV and a 58-camera crusher network; trained 3,000+ operators and ~50 technical staff.",
        "🛩️ Automated DJI M300 RTK drone stockpile surveys processed in Pix4D at ±2% volumetric accuracy.",
      ],
      softwareSkills: [
        {
          skillName: "Autonomous Haulage (AHS)",
          fontAwesomeClassname: "mdi:robot-industrial",
          style: { color: "#1B5E20" },
        },
        {
          skillName: "Rajant Kinetic Mesh",
          fontAwesomeClassname: "mdi:access-point-network",
          style: { color: "#0078D7" },
        },
        {
          skillName: "4G / LTE",
          fontAwesomeClassname: "mdi:signal-4g",
          style: { color: "#1DA1F2" },
        },
        {
          skillName: "Fibre / RSTP / Modbus TCP",
          fontAwesomeClassname: "mdi:lan",
          style: { color: "#455A64" },
        },
        {
          skillName: "CCTV & Cameras",
          fontAwesomeClassname: "mdi:cctv",
          style: { color: "#6A1B9A" },
        },
        {
          skillName: "DJI M300 RTK / Pix4D",
          fontAwesomeClassname: "mdi:quadcopter",
          style: { color: "#EF6C00" },
        },
        {
          skillName: "ISO 45001 / ISO 13849",
          fontAwesomeClassname: "mdi:shield-check",
          style: { color: "#2E7D32" },
        },
      ],
    },
    {
      title: "Automation, OT & Digital Builds",
      fileName: "FullStackImg",
      photo: "controlRoom",
      skills: [
        "⚙️ 15,000+ lines of Siemens TIA Portal Structured Text and Function Block logic across 30+ conveyors, crushers and screens, sustaining 96%+ availability.",
        "🔩 Allen-Bradley ControlLogix safety interlocks (EN ISO 13849-1 Cat 3), PID feed control (±5%), 75+ VFDs commissioned with regenerative braking (~10% energy saving).",
        "🧮 Built a production simulator on 170,899 measured haul-truck shifts: trip times, tonnes per route and trucks to roster, with scenario comparison (Python, SQL Server).",
        "🧩 Built an in-house FMS prototype (React, TypeScript) that became the benchmark for vendor trials, plus FastAPI telematics dashboards for the control room.",
        "📈 Power BI (certified) with DAX, predictive-maintenance dashboards integrated with SAP PM; Lean Six Sigma Black Belt (DMAIC, root cause analysis).",
      ],
      softwareSkills: [
        {
          skillName: "Siemens TIA Portal",
          fontAwesomeClassname: "simple-icons:siemens",
          style: { color: "#009999" },
        },
        {
          skillName: "Allen-Bradley ControlLogix",
          fontAwesomeClassname: "mdi:chip",
          style: { color: "#C62828" },
        },
        {
          skillName: "SCADA / HMI",
          fontAwesomeClassname: "mdi:view-dashboard-outline",
          style: { color: "#37474F" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "Metso VisioRock OCS-4D",
          fontAwesomeClassname: "mdi:eye-check",
          style: { color: "#5D4037" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "UCAM",
      iconifyClassname: "mdi:school",
      style: { color: "#0B2A4A" },
      profileLink: "https://www.ucam.edu/",
    },
    {
      siteName: "BITS Pilani",
      iconifyClassname: "mdi:school",
      style: { color: "#2A73CC" },
      profileLink: "https://www.bits-pilani.ac.in/",
    },
    {
      siteName: "University of Derby",
      iconifyClassname: "mdi:university",
      style: { color: "#FF6F00" },
      profileLink: "https://www.derby.ac.uk/",
    },
    {
      siteName: "Wenco (Hitachi)",
      iconifyClassname: "mdi:truck",
      style: { color: "#0A5DAB" },
      profileLink: "https://www.wencomine.com/",
    },
    {
      siteName: "Siemens Training",
      iconifyClassname: "simple-icons:siemens",
      style: { color: "#009999" },
      profileLink: "https://www.siemens.com/",
    },
    {
      siteName: "Microsoft Power BI",
      iconifyClassname: "simple-icons:powerbi",
      style: { color: "#F2C811" },
      profileLink: "https://powerbi.microsoft.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UCAM Universidad Católica de Murcia",
      subtitle: "Doctorate in Management — AI & Autonomous Systems in Mining",
      logo_path: "ucam_logo.png",
      alt_name: "UCAM",
      duration: "In progress",
      descriptions: [
        "⚡ Doctoral research on artificial intelligence and autonomous systems in open-pit mining: readiness, dispatch decision support and safety.",
        "⚡ Builds on live operational data from a fleet of 891+ dump trucks and the in-house production simulator.",
      ],
      website_link: "https://www.ucam.edu/",
    },
    {
      title: "BITS Pilani — Work Integrated Learning Programme",
      subtitle: "M.Tech. in Manufacturing Management",
      logo_path: "bits_pilani_logo.png",
      alt_name: "BITS Pilani",
      duration: "Completed 2024",
      descriptions: [
        "⚡ Lean manufacturing, project management, operations research and Six Sigma methodology.",
        "⚡ Applied coursework to crushing-plant throughput and fleet productivity problems at work.",
      ],
      website_link: "https://www.bits-pilani.ac.in/",
    },
    {
      title: "University of Derby",
      subtitle: "University Diploma in Mineral Extractives Studies",
      logo_path: "university_of_derby_logo.png",
      alt_name: "University of Derby",
      duration: "Completed 2024",
      descriptions: [
        "⚡ Minerals management, blasting, transportation systems and production planning for open-pit operations.",
        "⚡ Safety, environmental and industry standards applied to fleet management and productivity.",
      ],
      website_link: "https://www.derby.ac.uk/",
    },
    {
      title: "Kalinga University",
      subtitle: "MBA in Operations & Management",
      logo_path: "kalinga_university_logo.png",
      alt_name: "Kalinga University",
      duration: "Completed 2015",
      descriptions: [
        "⚡ Operations management, business strategy and leadership for high-stakes operational environments.",
      ],
      website_link: "https://www.kalingauniversity.ac.in/",
    },
    {
      title: "Punjab Technical University",
      subtitle: "B.Tech. in Electronics & Communication Engineering",
      logo_path: "ptu_logo.png",
      alt_name: "PTU",
      duration: "Completed 2013",
      descriptions: [
        "⚡ Signal processing, digital systems, control systems, embedded systems and wireless communication.",
      ],
      website_link: "https://www.ptu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Advanced Certification in Data Science, Machine Learning & IoT (Aug 2025)",
      subtitle:
        "- Indian Institute of Technology, Guwahati · Credential ID EICT/2425/007/05/105",
      logo_path: "iit_guwahati_logo.png",
      certificate_link: "https://www.iitg.ac.in/",
      alt_name: "IIT Guwahati",
      color_code: "#2B399099",
    },
    {
      title: "Databases and SQL for Data Science (Dec 2024)",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.credly.com/go/0IdD1FPS",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Lean Six Sigma Black Belt (ICBB, CPD Certified, Aug 2024)",
      subtitle: "- IMC Certifications · Credential ID C-2024-60119",
      logo_path: "imc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10EVO8qZ_QifUHSzTxz3VrDjV42dT9lyh/view?usp=drive_link",
      alt_name: "IMC Institute",
      color_code: "#1F70C199",
    },
    {
      title: "Certified Lean Six Sigma Green Belt (CPD Accredited, Aug 2024)",
      subtitle: "- IMC Certifications · Credential ID A022072-59912",
      logo_path: "imc_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CmfpgjicABWEdGf6u-4Q14EQuaKeZpxJ/view?usp=drive_link",
      alt_name: "IMC Institute",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft Power BI Data Analyst Specialization (Jul 2024)",
      subtitle: "- Microsoft · Credential ID CMCKBHP5B5FH",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/CMCKBHP5B5FH",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Internet of Things (Jul 2024)",
      subtitle:
        "- Indian Institute of Technology, Bombay · Credential ID MCHSL86BKJB7",
      logo_path: "iit_bombay_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/MCHSL86BKJB7",
      alt_name: "IIT Bombay",
      color_code: "#FF6F0099",
    },
    {
      title:
        "Certified Automation Professional: Siemens & Rockwell PLCs (Jun 2024)",
      subtitle: "- Arabian InfoTech Training Institute · Credential ID 62621",
      logo_path: "arabian_info_tech_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CBx69chuYajKW5bpBBvlCur8r0v1C3or/view?usp=drive_link",
      alt_name: "Arabian InfoTech",
      color_code: "#0073E699",
    },
    {
      title:
        "Project Management Professional (PMP) training — 35 contact hours (2024)",
      subtitle: "- PMI member",
      logo_path: "pmi_logo.png",
      certificate_link: "https://www.pmi.org/",
      alt_name: "PMI",
      color_code: "#1E3A8A99",
    },
    {
      title: "Emergency First Aid, Defibrillation and CPR (2024)",
      subtitle: "- Highfield",
      logo_path: "highfield_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vF6Sht1_mF2A1omr95rc_drygvutrO1i/view?usp=drive_link",
      alt_name: "Highfield",
      color_code: "#FF000099",
    },
    {
      title: "McKinsey Forward Program (Nov 2023)",
      subtitle: "- McKinsey & Company",
      logo_path: "mckinsey_logo.png",
      certificate_link:
        "https://www.credly.com/badges/88cbde2d-4506-4dd8-98d6-53f4c2dc6876/linked_in_profile",
      alt_name: "McKinsey & Company",
      color_code: "#00000099",
    },
    {
      title: "Wenco Fleet Management System — Dynamic Dispatch (Nov 2022)",
      subtitle: "- Wenco International Mining Systems (Hitachi)",
      logo_path: "wenco_logo.png",
      certificate_link: "https://www.wencomine.com/",
      alt_name: "Wenco",
      color_code: "#0A5DAB99",
    },
    {
      title: "Machine Application Performance Training (Feb 2022)",
      subtitle: "- Caterpillar Inc.",
      logo_path: "caterpillar_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19ePl7rddoSAPoarV1F6QL27ZFgOtd7EH/view?usp=drive_link",
      alt_name: "Caterpillar",
      color_code: "#FFBB0099",
    },
    {
      title: "Diploma in Quarry Management (2018)",
      subtitle: "- Institute of Quarrying",
      logo_path: "ioq_logo.png",
      certificate_link: "https://www.quarrying.org/",
      alt_name: "Institute of Quarrying",
      color_code: "#5C3B1E99",
    },
    {
      title: "ISO 45001 — Occupational Health & Safety Management Systems",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HnttHqbjOjy-r-dE7t9vwJWRxzB7VbY2/view?usp=drive_link",
      alt_name: "Udemy",
      color_code: "#A435F099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "11+ years across open-pit mining and mineral processing",
  description:
    "From PLC programmer on a 16-plant crushing complex to the technical owner of the dispatch and safety platform at the world's largest nickel mine. Every role below carries a number a hiring manager can check: production lifted, downtime cut, violations reduced, systems commissioned.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Project FMS Engineer | Technical Adviser, Mining Technology",
          company: "PT Eramet Indonesia — Weda Bay Nickel",
          company_url: "https://www.wedabaynickel.com/",
          logo_path: "eramet_logo.png",
          duration: "Oct 2024 – Present",
          location: "Weda, North Maluku, Indonesia",
          description:
            "Technical owner of the integrated dispatch, mine-control and safety platform across 4 mine sites, 891+ dump trucks, 60+ km of haul roads and 7 mining contractors at the world's largest nickel mine (project team ~120). Replaced manual dispatch with real-time GPS, speed and payload telemetry, cutting dispatch response time from 15–20 minutes to 2–3; stood up 24/7 control rooms at 95%+ uptime; cut speeding violations ~40% across 3,000+ operators with geofenced enforcement, AI driver monitoring and ADAS. Leads Autonomous Haulage System (AHS) operational readiness and builds the site's own tools: a production simulator on 170,899 measured shifts, a QR identity system, an FMS prototype used as the vendor-trial benchmark, and live telematics dashboards.",
          color: "#00539F",
        },
        {
          title: "Production Control & Automation Lead Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "Feb 2024 – Sep 2024",
          location: "Ras Al Khaimah, UAE",
          description:
            "Led reliability and safety across PLC-automated crushing operations with ~200 personnel in scope. Cut unplanned downtime ~50% with real-time monitoring and automatic feed-rate logic, more than halved weekly emergency stops, designed and commissioned the crusher control room and a 58-camera monitoring network, and synchronised quarry truck movements with crusher demand alongside the FMS team.",
          color: "#4CAF50",
        },
        {
          title: "Fleet Management System (FMS) Shift Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "Jan 2022 – Feb 2024",
          location: "Ras Al Khaimah, UAE",
          description:
            "The site's first FMS engineer. Delivered a greenfield Wenco FMS end to end: tower survey, solar-powered Rajant mesh network, onboard hardware, Dynamic Dispatch commissioning and shift-by-shift rule tuning for Cat 6030/6020B, 993K/994K and Komatsu PC2000 loaders against Terex TR100 and Komatsu HD785 trucks. Daily production rose from 64,000 to 80,000–91,000 tonnes, excavator queues held under 2 minutes, and FMS data moved into SQL and Power BI for hourly plan revision with supervisors.",
          color: "#4CAF50",
        },
        {
          title: "Automation & Production Engineer / Electrical Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "Jan 2016 – Jan 2022",
          location: "Ras Al Khaimah, UAE",
          description:
            "Owned automation and daily crushing production across a 16-plant crushing complex: 15,000+ lines of Siemens TIA Portal logic coordinating 30+ conveyors at 96%+ availability, Allen-Bradley ControlLogix safety interlocks (EN ISO 13849-1 Cat 3) and PID feed control (±5%), 75+ VFDs commissioned with regenerative braking (~10% energy saving), and Metso VisioRock OCS-4D optical rock-sizing integration over Modbus TCP (±0.5% product tolerance).",
          color: "#4CAF50",
        },
        {
          title: "Senior Field Coordinator and Trainer",
          company: "PerfectUS Educational & Training Solutions",
          company_url: "https://focalyt.com/",
          logo_path: "perfectus_logo.png",
          duration: "Mar 2014 – Apr 2015",
          location: "Chandigarh, India",
          description:
            "Delivered training and technical guidance on electrical and automation systems to engineering teams; managed field projects and contributed hands-on training modules.",
          color: "#FF6F00",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "OFC Training Engineer Intern",
          company: "Bharat Sanchar Nigam Limited (BSNL)",
          company_url: "https://www.bsnl.co.in/",
          logo_path: "bsnl_logo.png",
          duration: "Jan 2012 – Apr 2012",
          location: "Una, Himachal Pradesh, India",
          description:
            "Optical fibre communication systems: installation, splicing, testing and maintenance of fibre networks.",
          color: "#0071C5",
        },
        {
          title: "Power Line Carrier Control Intern",
          company: "Punjab Communication Limited",
          company_url: "https://www.pclindia.in/",
          logo_path: "pcl_logo.png",
          duration: "Nov 2012 – May 2013",
          location: "Mohali, Punjab, India",
          description:
            "Power line carrier communication (PLCC) systems and PCB circuit design, implementation and testing for industrial control.",
          color: "#FFBB00",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Systems I have delivered on live mine sites and tools I have built for them. Code for the open-source builds is on GitHub.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description:
    "Systems delivered on live mine sites and the tools built to run them. Where the code is public, the card links to GitHub; otherwise it links to the operation or vendor.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "wbn-dispatch-safety-platform",
      name:
        "Weda Bay Nickel — dispatch, mine-control and safety platform (891+ dump trucks)",
      createdAt: "2025-06-01T00:00:00Z",
      description:
        "Technical owner of the integrated dispatch and safety platform across 4 mine sites, 60+ km of haul roads and 7 contractors: real-time GPS, speed and payload telemetry, 24/7 control rooms, geofenced speed enforcement, AI driver monitoring and ADAS. Dispatch response 15–20 min → 2–3 min; speeding violations −40%.",
      url: "https://www.wedabaynickel.com/",
    },
    {
      id: "ahs-operational-readiness",
      name: "Autonomous Haulage System (AHS) operational readiness programme",
      createdAt: "2025-09-01T00:00:00Z",
      description:
        "Network coverage, high-precision positioning, zone design, semi-autonomous workflows and remote allocation logic: the readiness roadmap a site must complete before autonomy can run.",
      url: "https://www.wedabaynickel.com/",
    },
    {
      id: "wbn-fms-simulator",
      name:
        "wbn-fms-simulator — production simulator on 170,899 measured haul-truck shifts",
      createdAt: "2025-08-01T00:00:00Z",
      description:
        "Python + SQL Server. Forecasts trip times, tonnes per route and trucks to roster from measured shift history, with scenario comparison before a plan is committed. Audit against shift data found and corrected a cycle-time definition error that overstated forecasts.",
      url: "https://github.com/Lucky0000123/wbn-fms-simulator",
    },
    {
      id: "wbn-fms-ui",
      name:
        "wbn-fms-ui — in-house FMS prototype (dispatch, loading, dump management)",
      createdAt: "2025-05-01T00:00:00Z",
      description:
        "React + TypeScript. Became the benchmark for FMS vendor trials and the blueprint for the production system.",
      url: "https://github.com/Lucky0000123/wbn-fms-ui",
    },
    {
      id: "qr-identity-system",
      name: "QR identity and permit verification system",
      createdAt: "2025-03-01T00:00:00Z",
      description:
        "One scan verifies a worker's permit validity, training, assigned vehicle and current job. Replaced paper checks across the workforce and all contractors; every site radio ID is tied to a verified operator record.",
      url: "https://github.com/Lucky0000123",
    },
    {
      id: "werci-mobile",
      name: "WERCI — fleet inspection mobile app (iOS/Android)",
      createdAt: "2026-01-16T00:00:00Z",
      description:
        "React + TypeScript + Capacitor. QR/barcode scanning, camera capture and offline sync for fleet inspectors; backend on Flask + SQL Server (PRISM).",
      url: "https://github.com/Lucky0000123/werci-mobile",
    },
    {
      id: "control-room-telematics-dashboard",
      name: "Live control-room telematics dashboard",
      createdAt: "2025-04-01T00:00:00Z",
      description:
        "FastAPI + ECharts over fleet telematics: overspeed intensity, intervention effectiveness and risk mix, replacing manual daily reporting. Power BI (DAX) predictive-maintenance dashboards on mileage, tonnage, fuel and service intervals.",
      url: "https://github.com/Lucky0000123/FMS_STREAMLIT_APP",
    },
    {
      id: "wenco-fms-greenfield",
      name: "Greenfield Wenco FMS — Stevin Rock (64,000 → 80,000–91,000 t/day)",
      createdAt: "2023-06-01T00:00:00Z",
      description:
        "Site's first FMS: tower survey, solar-powered Rajant Kinetic Mesh network, onboard hardware with Wenco engineers, Dynamic Dispatch commissioning and shift-by-shift rule tuning. Excavator queues held under 2 minutes; predictive-maintenance alerts integrated with SAP PM.",
      url: "https://www.wencomine.com/",
    },
    {
      id: "crusher-control-room",
      name: "Crusher control room and 58-camera monitoring network",
      createdAt: "2024-06-01T00:00:00Z",
      description:
        "Designed, established and commissioned the control room (video walls, dual-monitor SCADA consoles) and camera network across the primary crusher, conveyors and tipping points. Unplanned downtime −50%; noise-exposure complaints −60%.",
      url: "https://www.stevinrock.ae/",
    },
    {
      id: "plc-automation-crushing-complex",
      name: "PLC automation of a 16-plant crushing complex",
      createdAt: "2021-01-01T00:00:00Z",
      description:
        "15,000+ lines of Siemens TIA Portal Structured Text and Function Block logic across 30+ conveyors, crushers and screens (96%+ availability); Allen-Bradley ControlLogix safety interlocks and PID feed control; 75+ VFDs with regenerative braking; Metso VisioRock OCS-4D optical sizing over Modbus TCP.",
      url: "https://new.siemens.com/",
    },
  ],
};

// Product showcase (Projects page): screenshots of the in-house builds,
// captured from each app running locally on demo / sample data.
const productShowcaseHeader = {
  title: "Products I built",
  description:
    "Screens from the in-house tools I designed and built for mine operations. Each screenshot was taken from the app running locally on demo or sample data, not live site data.",
};

const productShowcase = [
  {
    id: "production-simulator",
    name: "Production simulator",
    stack: "Python · Flask · SQL Server · scikit-learn",
    description:
      "Trained on 170,899 measured haul-truck shifts. Forecasts trip times, tonnes per route and the trucks to roster for any plan, shows fleet capability against target, and compares scenarios before a plan is committed.",
    url: "https://github.com/Lucky0000123/wbn-fms-simulator",
    images: [
      {
        file: "production-simulator.jpg",
        caption:
          "Haulage capability: tonnes per day, trips per truck and trucks needed to hit a tonnage target",
      },
    ],
  },
  {
    id: "fms-prototype",
    name: "In-house FMS prototype",
    stack: "React · TypeScript · Vite",
    description:
      "A working fleet management system prototype with shovel-column, shovel-to-dump, full dispatch and operator-screen views. It became the benchmark for FMS vendor trials and the blueprint for the production system.",
    url: "https://github.com/Lucky0000123/wbn-fms-ui",
    images: [
      {
        file: "fms-prototype-shovel-columns.jpg",
        caption:
          "Shovel columns: every excavator with its trucks, cycle, productivity and utilisation",
      },
      {
        file: "fms-prototype-dispatch.jpg",
        caption: "Full dispatch: pit → loading area → excavator → dump routing",
      },
      {
        file: "fms-prototype-operator-screen.jpg",
        caption:
          "Operator onboard screen: haul-cycle state and next action for the driver",
      },
    ],
  },
  {
    id: "control-room-dashboard",
    name: "Control-room safety dashboard",
    stack: "FastAPI · ECharts · SQL Server (read-only)",
    description:
      "Live, read-only dashboard over the FMS database: overspeed intensity ratio, automated vs dispatcher interventions, risk mix and a haul-road heatmap. Built to replace manual daily reporting.",
    images: [
      {
        file: "control-room-dashboard.jpg",
        caption:
          "Overspeed intensity trend, intervention analysis and risk mix",
      },
    ],
  },
  {
    id: "qr-identity-inspection",
    name: "QR identity, permit and inspection system",
    stack: "Flask · SQL Server · React + Capacitor mobile app",
    description:
      "One QR scan shows the person, their operating permit, training, assigned vehicle and current job. The same platform runs vehicle inspections, pre-use checklists and deviations, with an offline-first mobile app for the field.",
    url: "https://github.com/Lucky0000123/werci-mobile",
    linkLabel: "View mobile app code",
    images: [
      {
        file: "qr-identity-driver-authorizations.jpg",
        caption:
          "Driver authorisations: triple validation with pass / warn / fail per check",
      },
      {
        file: "inspection-mobile-app-preview.jpg",
        caption:
          "Mobile flow: scan a vehicle QR, open the pre-use checklist, sync offline",
      },
    ],
  },
];

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Rahul.png",
    description:
      "Open to Mining Technology Manager, Mine Control / Dispatch Superintendent, FMS Lead, AHS Readiness Lead, OT Lead and mining-technology product or implementation roles, in Indonesia or internationally (KITAS holder; relocation and FIFO welcome). Happy to talk fleet management systems, autonomy readiness, control rooms and the tools that make dispatch decisions faster.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Weda, North Maluku, Indonesia",
    locality: "Weda",
    country: "Indonesia",
    region: "North Maluku",
    postalCode: "97853",
    streetAddress: "Weda Bay Nickel Project",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ykDET3s5GhYeUph49",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+62 811 9007 4995 · +91 78079 37748",
  },
};

export {
  settings,
  seo,
  greeting,
  homePhotos,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  productShowcaseHeader,
  productShowcase,
  contactPageData,
};
