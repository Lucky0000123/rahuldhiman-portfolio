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
    "Rahul Dhiman, mining technology lead at Weda Bay Nickel: fleet management systems (Wenco), dispatch and mine control, autonomous haulage readiness, operational technology and in-house digital tools. Experience across Indonesia and the UAE.",
  og: {
    title: "Rahul Dhiman | Mining Technology Lead",
    type: "website",
    url: "https://lucky0000123.github.io/rahuldhiman-portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Rahul Dhiman",
  logo_name: "Rahul Dhiman",
  subTitle:
    "Mining technology and fleet management leader with 11+ years across open-pit mining and quarrying in Indonesia and the UAE.",
  role: "Mining Technology Lead",
  focus: "Fleet management · Mine control · Operational technology",
  credential:
    "Wenco Dynamic Dispatch training | Doctorate in Management in progress",
  // Rotates next to the role, one at a time (like a ticker).
  disciplines: [
    "FMS & Dispatch",
    "Mine Control",
    "AHS Readiness",
    "Automation & OT",
    "Mining Data & AI",
  ],
  summary:
    "I have 11+ years in open-pit mining and quarrying. At Weda Bay Nickel I lead 24 direct reports and own the fleet dispatch and safety platforms across four mine sites.",
  highlights: [
    { value: "15 to 2–3 min", label: "dispatch response time" },
    {
      value: "+32%",
      label: "daily production gain the FMS rollout helped deliver",
    },
    { value: "~40%", label: "fewer speeding violations" },
  ],
  location: "Based in Indonesia. Open to relocation or site rotation.",
  resumeLink:
    "mailto:work.rahuldhiman@gmail.com?subject=CV%20request%20%E2%80%94%20Mining%20Technology",
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
    file: "dispatch-mine-control.jpg",
    small: "dispatch-mine-control-720.jpg",
    webp: "dispatch-mine-control.webp",
    webpSmall: "dispatch-mine-control-720.webp",
    wide: true,
    alt:
      "Illustration of a mine control room with dispatch dashboards, overlooking haul trucks, a mesh radio tower and a crushing plant",
    caption:
      "Fleet management, dispatch and mine control, from the pit to the control room",
  },
  autonomy: {
    file: "autonomy-network-safety.jpg",
    small: "autonomy-network-safety-720.jpg",
    webp: "autonomy-network-safety.webp",
    webpSmall: "autonomy-network-safety-720.webp",
    aspectRatio: "3 / 2",
    alt:
      "Illustration of autonomy readiness at an open-pit mine: connected haul trucks, solar-powered radio towers, geofenced haul roads, operator verification, CCTV and drone surveying",
    caption:
      "Autonomy readiness, connected mine infrastructure and safety technology · Illustrative composite",
  },
  controlRoom: {
    file: "automation-ot-digital.jpg",
    small: "automation-ot-digital-720.jpg",
    webp: "automation-ot-digital.webp",
    webpSmall: "automation-ot-digital-720.webp",
    aspectRatio: "3 / 2",
    alt:
      "Illustration of mining automation and operational technology: an engineer using SCADA plant controls, dispatch maps and planning dashboards beside a PLC cabinet overlooking a crushing plant",
    caption:
      "Plant automation, operational technology and in-house decision tools · Illustrative composite",
  },
};

const skills = {
  data: [
    {
      title: "Fleet Management, Dispatch & Mine Control",
      fileName: "DataScienceImg",
      photo: "dispatch",
      skills: [
        "Technical owner of the dispatch and safety platform at Weda Bay Nickel: 1,000+ mobile assets across four mine sites, working with 10 mining contractors.",
        "Replaced manual dispatch with real-time GPS, speed and onboard payload telemetry; dispatch response time fell from 15 minutes to 2–3.",
        "Helped lead Stevin Rock’s greenfield Wenco FMS rollout, which contributed to a 32% increase in daily production.",
        "Designed and ran 24/7 mine control rooms at 95%+ platform uptime; Wenco Dynamic Dispatch training; short interval control with hourly Power BI plan revision.",
        "Cut speeding violations ~40% with geofenced automated speed enforcement, AI driver monitoring (fatigue, seatbelt) and ADAS forward collision warning.",
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
        "Leads Autonomous Haulage System (AHS) operational readiness: network coverage, high-precision positioning, zone design, semi-autonomous workflows and remote allocation logic.",
        "Built site-wide Rajant Kinetic Mesh networks (solar-powered towers, radios, repeaters), VHF/UHF and 4G/LTE coverage, and fibre backbones with RSTP, Ethernet/IP and Modbus TCP.",
        "Built a site digital radio network with thousands of radios, each tied to a verified operator record; a QR identity system verifies permit, training, vehicle and job in one scan.",
        "Rolled out fleet cameras, IoT sensors, haul-road CCTV and a 58-camera crusher network; trained 3,000+ operators and ~50 technical staff.",
        "Automated DJI M300 RTK drone stockpile surveys processed in Pix4D at ±2% volumetric accuracy.",
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
        "Led delivery of Siemens TIA Portal Structured Text and Function Block logic across 30+ conveyors, crushers and screens, sustaining 96%+ availability.",
        "Allen-Bradley ControlLogix safety interlocks (EN ISO 13849-1 Cat 3), PID feed control (±5%), Commissioned 35+ VFDs and soft starters, including regenerative braking on decline conveyors.",
        "Built a production simulator on 170,899 measured haul-truck shifts: trip times, tonnes per route and trucks to roster, with scenario comparison (Python, SQL Server).",
        "Built an in-house FMS prototype (React, TypeScript) that became the benchmark for vendor trials, plus FastAPI telematics dashboards for the control room.",
        "Power BI with DAX, predictive-maintenance dashboards integrated with SAP PM; Lean Six Sigma Black Belt (DMAIC, root cause analysis).",
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
        "Doctoral research on artificial intelligence and autonomous systems in open-pit mining: readiness, dispatch decision support and safety.",
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
        "Lean manufacturing, project management, operations research and Six Sigma methodology.",
        "Applied coursework to crushing-plant throughput and fleet productivity problems at work.",
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
        "Minerals management, blasting, transportation systems and production planning for open-pit operations.",
        "Safety, environmental and industry standards applied to fleet management and productivity.",
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
        "Operations management, business strategy and leadership for high-stakes operational environments.",
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
        "Signal processing, digital systems, control systems, embedded systems and wireless communication.",
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
  subtitle: "Field delivery across mining and mineral processing",
  description:
    "11+ years across quarry production, plant automation, fleet management and mine control in Indonesia and the UAE.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fleet Management System Engineer / Technical Advisor",
          company: "PT Eramet Indonesia Mining — Weda Bay Nickel",
          company_url: "https://www.wedabaynickel.com/",
          logo_path: "eramet_logo.png",
          duration: "Oct 2024 – Present",
          location: "Weda, North Maluku, Indonesia",
          description:
            "Technical owner of dispatch and safety platforms across four sites and 1,000+ mobile assets. I lead 24 direct reports and work with 10 mining contractors. Real-time dispatch cut response from 15 minutes to 2–3, and speeding events fell about 40% after we introduced geofencing and automatic speed limits. I also lead autonomy readiness work and migrated shift reporting from SQL Server and Power BI to a PostgreSQL/TimescaleDB warehouse and eight web views.",
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
            "Designed and commissioned the central crusher control room and a 58-camera network. Worked with operators and maintenance to add real-time monitoring and automatic feed control; weekly emergency stops fell from 12–15 to 5–7. Matched quarry truck arrivals to crusher demand with the FMS team.",
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
            "The site’s first FMS engineer. Helped lead the greenfield Wenco rollout from solar-powered Rajant towers to onboard hardware and live Dynamic Dispatch, working alongside Wenco engineers. The rollout contributed to a 32% increase in daily production. Tuned dispatch rules to hold excavator queues under two minutes and built Power BI views supervisors used to revise hourly plans.",
          color: "#4CAF50",
        },
        {
          title: "Production Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "Jan 2018 – Jan 2022",
          location: "Ras Al Khaimah, UAE",
          description:
            "Led PLC and SCADA delivery across 30+ conveyors, crushers and screens, with availability above 96%. Planned daily and weekly production and commissioned 35+ VFDs and soft starters, including regenerative braking on decline conveyors.",
          color: "#4CAF50",
        },
        {
          title: "Electrical and Electronics Engineer",
          company: "Stevin Rock LLC",
          company_url: "https://www.stevinrock.ae/",
          logo_path: "stevin_rock_logo.png",
          duration: "Jan 2016 – Jan 2018",
          location: "Ras Al Khaimah, UAE",
          description:
            "Maintained electrical controls, power distribution and Siemens S7-300 PLCs across processing and water treatment plants. Commissioned fibre-optic networks and a 65-camera IP surveillance system.",
          color: "#4CAF50",
        },
        {
          title: "Senior Coordinator",
          company: "PerfectUS Educational & Training Solutions",
          company_url: "https://focalyt.com/",
          logo_path: "perfectus_logo.png",
          duration: "May 2014 – Feb 2015",
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
    "See how I’ve used fleet systems and operational data to help mine teams make shift decisions. Start with the screenshot walkthroughs, then see the field implementations below.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "wbn-dispatch-safety-platform",
      name: "Weda Bay Nickel: dispatch, mine control and fleet safety",
      createdAt: "2025-06-01T00:00:00Z",
      description:
        "Technical owner across four mine sites and 1,000+ mobile assets. Real-time dispatch cut response from 15 minutes to 2–3. Speeding events fell about 40% after we introduced geofencing and automatic speed limits.",
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
      id: "reporting-migration",
      name: "Shift reporting migration",
      description:
        "Moved 28 SQL Server tables (about 22.8 million rows) into PostgreSQL/TimescaleDB with Python. Rebuilt a 28-page Power BI report into eight web views; 37 of 38 metrics matched the legacy report in July 2026.",
    },
    {
      id: "control-room-telematics-dashboard",
      name: "Control-room fleet safety dashboard",
      description:
        "Built a read-only view of overspeed trends, automated and dispatcher interventions, and risk by haul-road zone to replace manual daily reporting.",
    },
    {
      id: "qr-identity-system",
      name: "QR identity, permit and fleet inspections",
      description:
        "One scan brings together a worker’s permit, training, assigned vehicle and current job. The offline-capable field app also handles pre-use checks and vehicle inspections.",
    },
    {
      id: "wenco-fms-greenfield",
      name: "Greenfield Wenco FMS at Stevin Rock",
      createdAt: "2023-06-01T00:00:00Z",
      description:
        "Helped lead the site’s first FMS rollout, from tower surveys and a solar-powered Rajant mesh network to onboard commissioning with Wenco engineers. The rollout contributed to a 32% increase in daily production.",
      url: "https://www.wencomine.com/",
    },
    {
      id: "crusher-control-room",
      name: "Crusher control room and 58-camera monitoring network",
      createdAt: "2024-06-01T00:00:00Z",
      description:
        "Designed and commissioned the control room and camera network. Moved 12 operators out of noisy, dusty field posts; near misses fell 35%.",
      url: "https://www.stevinrock.ae/",
    },
    {
      id: "plc-automation-crushing-complex",
      name: "PLC automation for crushing and screening",
      createdAt: "2021-01-01T00:00:00Z",
      description:
        "Led delivery of Siemens TIA Portal Structured Text and Function Block logic across 30+ conveyors, crushers and screens (96%+ availability); Allen-Bradley ControlLogix safety interlocks and PID feed control; 35+ VFDs and soft starters; Metso VisioRock OCS-4D optical sizing over Modbus TCP.",
      url: "https://new.siemens.com/",
    },
    {
      id: "wenco-fleet-management",
      name: "WENCO Fleet Management System Integration",
      createdAt: "2022-11-01T00:00:00Z",
      description:
        "Implemented WENCO FMS to optimize fleet operations and enhance real-time monitoring in large-scale mining environments.",
      url: "https://www.wencomine.com/",
    },
    {
      id: "Visio-rock-integration",
      name: "VISIO ROCK On-Conveyor Stone Detection System",
      createdAt: "2021-08-15T00:00:00Z",
      description:
        "Integrated VISIO ROCK system for real-time material analysis, improving production efficiency and minimizing waste.",
    },
    {
      id: "Central-control-room",
      name: "Central Control Room Optimization",
      createdAt: "2023-03-10T00:00:00Z",
      description:
        "Designed and optimized a centralized control room to enhance operational monitoring and decision-making.",
    },
    {
      id: "plc-automation-siemens",
      name: "Siemens PLC Automation",
      createdAt: "2024-06-20T00:00:00Z",
      description:
        "Troubleshoot and maintained Siemens PLC systems to automate crusher plants, ensuring system reliability and efficiency.",
      url: "https://new.siemens.com/",
    },
    {
      id: "rajant-mesh-network",
      name: "Rajant Mesh Network for Mining Operations",
      createdAt: "2020-02-05T00:00:00Z",
      description:
        "Deployed a wireless mesh network to enhance communication and connectivity across mining sites.",
      url: "https://rajant.com/", // Replace with a relevant URL if needed
    },
  ],
};

// Only publish original-app screenshots reviewed for public use.
const productShowcaseHeader = {
  title: "Project walkthroughs",
  description:
    "The original apps, running with fictional fleet and site inputs. Open a walkthrough to see each step at full size.",
};

const productShowcase = [
  {
    id: "production-simulator",
    name: "Haulage Digital Twin: 3D Fleet Analysis and Shift Planning",
    stack: "Python · Flask · SQL Server · scikit-learn",
    description:
      "I built this tool to test fleet assignments before a shift. The original model, developed on 170,899 measured truck shifts, forecasts trips and tonnes or estimates trucks from a target. A separate capacity simulation checks whether the loader can handle the plan. The demo shows forecasts and simulations, not measured production.",
    url: "/showcases/haulage-digital-twin.pdf",
    linkLabel: "Read the eight-page walkthrough (PDF)",
    images: [
      {
        file: "haulage-demo.webp",
        caption:
          "Original 3D view showing a fictional haul route and fleet assignment",
      },
    ],
  },
  {
    id: "fms-prototype",
    name: "Fleet Management System Prototype: From Dispatch to the Cab",
    stack: "React · TypeScript · Vite",
    description:
      "Wenco’s fleet management design inspired this independent prototype, which I used as a reference for vendor evaluations. The demo follows a fictional truck from dispatch to the cab. Confirming the full weighbridge moves it to Full Travel, displays the next sampling checkpoint and records an audit event.",
    url: "/showcases/fms-dispatch-to-cab.pdf",
    linkLabel: "Read the five-page walkthrough (PDF)",
    images: [
      {
        file: "fms-dispatch-demo.webp",
        caption: "Full Dispatch: tracing a truck assignment from pit to dump",
      },
      {
        file: "fms-operator-demo.webp",
        caption:
          "Operator screen after weighbridge confirmation: Full Travel and the next checkpoint",
      },
    ],
  },
];

// Current case-study facts. Results describe observed operational changes.
const featuredWork = [
  {
    id: "greenfield-fms",
    context: "Stevin Rock · UAE",
    title: "Greenfield fleet management",
    result: "The FMS rollout contributed to a 32% increase in daily production",
    problem:
      "Establish fleet dispatch and a reliable site network where no FMS existed.",
    role:
      "The site's first FMS engineer and a main lead of the implementation.",
    delivery:
      "Tower surveys, solar-powered Rajant mesh, onboard installation with Wenco engineers, commissioning and shift-by-shift dispatch optimisation.",
    stack: "Wenco Dynamic Dispatch · Rajant · SQL · Power BI",
    href: "#/experience",
    linkLabel: "Read the experience",
  },
  {
    id: "dispatch-safety",
    context: "Weda Bay Nickel · Indonesia",
    title: "Dispatch and safety at scale",
    result: "Dispatch response time fell from 15 minutes to 2–3",
    problem:
      "Replace manual dispatch and connect fleet visibility, safety interventions and mine control across four sites.",
    role:
      "Technical owner of the dispatch and safety platforms across four sites, leading 24 direct reports and working with 10 mining contractors.",
    delivery:
      "Real-time GPS, speed and payload telemetry, 24/7 control rooms, geofenced speed enforcement, driver monitoring and ADAS.",
    stack: "Telematics · Mine control · Geofencing · Safety systems",
    href: "#/experience",
    linkLabel: "Read the experience",
  },
  {
    id: "simulation",
    context: "In-house digital build",
    title: "Production planning simulator",
    result: "Built on 170,899 measured haul-truck shifts",
    problem:
      "Understand truck requirements and route capacity before committing a production plan.",
    role:
      "Built the simulator and checked its forecasts against measured operating data.",
    delivery:
      "Trip-time and tonnage forecasts, truck requirements and scenario comparison; corrected a cycle-time definition that overstated production forecasts.",
    stack: "Python · Flask · SQL Server · Measured shift history",
    href: "#/projects",
    linkLabel: "See the product screenshots",
  },
];

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Rahul.png",
    description:
      "Open to mining technology leadership, FMS, mine control, AHS readiness and operational technology roles. Based in Indonesia and open to relocation and FIFO. If you are building a fleet platform, improving dispatch or preparing a site for autonomy, I would welcome a conversation. My CV is available on request.",
  },
  addressSection: {
    title: "Based in",
    subtitle: "Indonesia. Open to relocation or site rotation.",
  },
};

export {
  settings,
  seo,
  greeting,
  featuredWork,
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
