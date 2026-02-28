const projects = [

  {
    title: "TimeTable Pro",
    subtitle: "Smart Academic Timetable Management System",
    category: "Web",
    overview:
      "A full-stack timetable automation platform built with React and REST APIs that enables colleges to manage departments, subjects, rooms, and semester-based schedules efficiently.",

    features: [
      "JWT-based Authentication (Admin & Teacher roles)",
      "Department, Subject & Room Management",
      "Odd/Even & Custom Timetable Creation",
      "Smart Room Allocation with Capacity Validation",
      "Real-time Room Availability Finder",
      "Weekly, Day-wise & Full Schedule Views",
      "Cloneable & Multi-Academic-Year Support"
    ],

    tech: [
      "React.js",
      "REST API",
      "JWT",
      "Dynamic Filtering Engine",
      "Responsive Dashboard UI"
    ],

    highlights:
      "Designed with advanced filtering logic, defensive API handling, and intelligent scheduling rules to simulate a real-world university timetable system."
  },

  {
    title: "Course Seat Finder",
    subtitle: "Mobile-First Android Seat Availability App",
    category: "app",
    overview:
      "A React + Capacitor Android application that provides real-time course seat availability by integrating directly with Google Sheets.",

    features: [
      "Live seat calculation from Google Sheets",
      "Remote Config system",
      "Smart course search with dynamic suggestions",
      "Android app build using Capacitor",
      "Floating config reload system",
      "Intelligent seat counting logic",
      "Yearly sheet update support via config sheet"
    ],

    tech: [
      "React (Vite)",
      "Capacitor",
      "Google Sheets API",
      "Local Cache with TTL",
      "Responsive Mobile UI"
    ],

    highlights:
      "Eliminates manual seat tracking and yearly app updates by allowing administrators to change sheet sources remotely via a config sheet."
  },

  {
    title: "Smart Pump & Tank Monitoring System",
    subtitle: "Advanced Embedded Monitoring & Automation Platform",
    category: "Embedded",
    overview:
      "A real-time embedded control and monitoring system built using ESP32 that automates tank level management, pump control, and electrical parameter monitoring.",

    features: [
      "Real-Time Tank Level Monitoring",
      "Automated Multi-Pump & Valve Control",
      "Live Status Display on ILI9341 TFT",
      "Voltage & Current Monitoring",
      "Dry Run Protection System",
      "EEPROM-Based Settings Storage",
      "ESP32 ↔ STM8 I2C Communication",
      "Animated Pump UI with Data Visualization"
    ],

    tech: [
      "ESP32",
      "ILI9341 TFT",
      "I2C Communication",
      "HLW8032",
      "ZMPT101B",
      "STM8S003F3P",
      "EEPROM",
      "Embedded C (Arduino)"
    ],

    highlights:
      "Engineered with industrial-style safety logic, real-time sensor monitoring, electrical tracking, and modular architecture to simulate a smart industrial water management system."
  },

  {
    title: "Smart Car Parking System",
    subtitle: "Automated Multi-Slot Parking & Booking Platform",
    category: "IoT",
    overview:
      "An intelligent 4-slot automated parking system integrating embedded hardware with a web-based booking interface and QR access control.",

    features: [
      "Real-Time 4-Slot Availability Monitoring",
      "IR & Ultrasonic Sensor Detection",
      "QR Code-Based Booking System",
      "Web Dashboard for Slot Management",
      "Servo Motor Gate Automation",
      "Pre-Booking & Reservation Validation"
    ],

    tech: [
      "Arduino",
      "Raspberry Pi",
      "IR Sensors",
      "Ultrasonic Sensors",
      "Servo Motors",
      "QR Code System",
      "Web Technologies"
    ],

    highlights:
      "A hybrid hardware-software system demonstrating real-time monitoring, automated control, and web-based reservation logic."
  },

  {
    title: "Skin Disease Prediction System",
    subtitle: "AI-Powered Medical Image Classification Platform",
    category: "AI",
    overview:
      "A deep learning-based web application that analyzes uploaded skin images to predict potential skin diseases using a trained CNN model.",

    features: [
      "Image Upload & Real-Time Prediction",
      "Deep Learning-Based Disease Classification",
      "Confidence Score Display",
      "Pre-Trained Model (.h5)",
      "End-to-End ML Pipeline"
    ],

    tech: [
      "Python",
      "TensorFlow/Keras",
      "CNN",
      "Flask",
      "Image Preprocessing"
    ],

    highlights:
      "Built with a complete ML pipeline from dataset preprocessing and model training to deployment in a Flask web interface."
  },

  {
    title: "Cattle Disease Detection System",
    subtitle: "AI-Based Livestock Health Monitoring Platform",
    category: "AI",
    overview:
      "A machine learning-powered image classification system that detects cattle diseases from uploaded images.",

    features: [
      "Cattle Image Upload & Analysis",
      "Deep Learning-Based Classification",
      "Prediction with Confidence Score",
      "Custom Model Training",
      "Web Deployment Integration"
    ],

    tech: [
      "Python",
      "TensorFlow/Keras",
      "CNN",
      "Flask",
      "Image Processing"
    ],

    highlights:
      "Demonstrates practical AI deployment for agriculture and livestock health management."
  },

  {
    title: "IoT Smart RGB Bulb",
    subtitle: "Web-Controlled Smart Lighting System",
    category: "IoT",
    overview:
      "An ESP32-based smart lighting system enabling real-time ON/OFF control and RGB color customization via web interface.",

    features: [
      "Web-Based ON/OFF Control",
      "Real-Time RGB Color Selection",
      "Wi-Fi Enabled ESP32 Communication",
      "Live State Synchronization",
      "Responsive Control Dashboard"
    ],

    tech: [
      "ESP32",
      "Wi-Fi Communication",
      "Flask",
      "HTML/CSS",
      "JavaScript"
    ],

    highlights:
      "Demonstrates real-time IoT device control integrated with web technologies."
  },

  {
    title: "Respiratory Disorder Detection System",
    subtitle: "AI-Based Lung Sound Classification Platform",
    category: "AI",
    overview:
      "A machine learning healthcare application that analyzes uploaded lung sound recordings to detect respiratory disorders.",

    features: [
      "Lung Sound File Upload",
      "Audio Feature Extraction (MFCC)",
      "Machine Learning Classification",
      "Confidence Score Output",
      "Web-Based Interface"
    ],

    tech: [
      "Python",
      "Librosa",
      "NumPy",
      "Machine Learning",
      "Flask"
    ],

    highlights:
      "Built using a complete audio processing pipeline demonstrating AI-based biomedical signal analysis."
  },

  {
  title: "Driver Drowsiness Detection & Alert System",
  subtitle: "AI-Powered Real-Time Driver Safety & Active Alert Mechanism",
  category: "Embedded",
  overview:
    "A computer vision–based driver safety system that detects drowsiness in real time using facial landmark analysis and automatically activates a water spray mechanism via submersible pump to alert the driver and prevent accidents.",

  features: [
    "Real-Time Face & Eye Detection",
    "Eye Aspect Ratio (EAR) Based Drowsiness Detection",
    "Continuous Live Webcam Monitoring",
    "Intelligent Alert System (Buzzer + Water Spray)",
    "Automatic Water Spray Using Submersible Pump",
    "Hardware-Controlled Alert Mechanism",
    "Low-Latency Real-Time Processing",
    "Continuous Frame-by-Frame Fatigue Monitoring"
  ],

  tech: [
    "Python",
    "OpenCV",
    "Dlib",
    "Facial Landmark Detection",
    "CNN / Haar Cascade",
    "Arduino",
    "Relay Module",
    "Submersible Pump",
    "NumPy",
    "Real-Time Video Processing"
  ],

  highlights:
    "Designed as a real-world accident-prevention system combining AI-based computer vision with embedded hardware control. When prolonged eye closure is detected, the system triggers both an alarm and a submersible pump-based water spray mechanism to instantly wake the driver."
}
  

];

export default projects;