export interface PhaseData {
  id: number;
  animal: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  stats: { value: string; label: string }[];
  highlight: string;
}

export const HUD_PHASES: PhaseData[] = [
  {
    id: 0,
    animal: "Dog",
    category: "01 / PRIMARY VETERINARY CARE",
    title: "Welcome to Adorables Pet Clinic",
    subtitle: "Your One-Stop Destination for Complete Pet Care",
    tagline: "Preventive Care & Consultations",
    description: "Nestled in Banjara Hills, Hyderabad, Adorables Pet Clinic stands as a premier beacon of advanced medicine and gentle care. We provide comprehensive outpatient checkups, immunizations, and proactive nutrition guidelines to ensure your companion lives a long, joyful life.",
    highlight: "24/7 CRITICAL EMERGENCY CARE AVAILABLE",
    stats: [
      { value: "15+", label: "Veterinary Doctors" },
      { value: "12,000+", label: "Happy Pet Patients" }
    ]
  },
  {
    id: 1,
    animal: "Cat",
    category: "02 / SURGERY & DIAGNOSTICS",
    title: "Advanced Diagnostics & Surgeries",
    subtitle: "Honest treatments by experienced veterinary doctors",
    tagline: "Ultra-precise Diagnostic Imaging",
    description: "Our state-of-the-art diagnostic wing includes low-radiation digital radiography, high-resolution ultrasound, and complete in-house blood pathology labs. From routine spaying to critical orthopedic or soft-tissue surgeries, we maintain the highest sterile medical standards.",
    highlight: "STERILE ISO-CLASS SURGICAL THEATRES",
    stats: [
      { value: "99.8%", label: "Surgical Success Rate" },
      { value: "24/7", label: "Diagnostic Lab Hours" }
    ]
  },
  {
    id: 2,
    animal: "Rabbit",
    category: "03 / PREMIUM SPA & GROOMING",
    title: "Luxurious Grooming",
    subtitle: "Premium styling leaving your pets looking and feeling their best",
    tagline: "Therapeutic Bathing & Styling",
    description: "Hygiene is key to animal wellness. Our luxurious spa treatments are customized for all coat types, featuring deep-cleaning warm water baths, sanitary clipping, breed-specific styling, blowouts, and stress-free nail trimming led by certified, gentle experts.",
    highlight: "ORGANIC, HYPOALLERGENIC CLINICAL SHAMPOOS",
    stats: [
      { value: "5+", label: "Certified Pet Stylists" },
      { value: "4", label: "Private Grooming Bays" }
    ]
  },
  {
    id: 3,
    animal: "Birds",
    category: "04 / BOARDING & RECOVERY STAY",
    title: "Cage-Free Boarding",
    subtitle: "A comfortable, stress-free, and homely environment",
    tagline: "Socializing & 24/7 Supervision",
    description: "Say goodbye to stressful metal cages. We offer spacious, climate-controlled play suites. Under continuous residential supervision, pets enjoy structured playtimes, custom-tailored diet plans, and daily health audits from our certified veterinary nurses.",
    highlight: "CLIMATE-CONTROLLED, STRESS-FREE ROOMS",
    stats: [
      { value: "100%", label: "Cage-Free Boarding" },
      { value: "24h", label: "Continuous Care Staff" }
    ]
  },
  {
    id: 4,
    animal: "All Pets",
    category: "05 / COMPLETE PHARMACY & DISPENSARY",
    title: "Premium Pet Pharmacy",
    subtitle: "Treating every pet like family with dedicated follow-up",
    tagline: "Authentic Medicines & Supplements",
    description: "Our fully-stocked in-house pharmacy stocks international-grade prescription drugs, critical care supplements, cardiac medicines, and premium veterinary diets. Our commitment extends beyond the counter with dedicated post-treatment follow-up and home care coordination.",
    highlight: "100% GENUINE VETERINARY MEDICATIONS",
    stats: [
      { value: "100%", label: "Prescription Authenticity" },
      { value: "Daily", label: "Recovery Follow-ups" }
    ]
  }
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "outpatient",
    title: "General Outpatient Checkups",
    description: "Comprehensive medical evaluations, vital checks, and preventative health counsels for dogs, cats, and exotic pets.",
    iconName: "Stethoscope"
  },
  {
    id: "surgery",
    title: "Advanced Surgical Procedures",
    description: "Soft tissue, orthopedic, and emergency trauma surgeries conducted in sterile, positive-pressure surgical suites.",
    iconName: "Scissors"
  },
  {
    id: "diagnostics",
    title: "In-House Lab & Imaging",
    description: "Digital X-Ray, ultrasound imaging, and complete blood cell counts (CBC) with results in under 30 minutes.",
    iconName: "Activity"
  },
  {
    id: "grooming",
    title: "Premium Grooming & Spa",
    description: "Breed-specific haircuts, ticks control treatments, deep-cleaning baths, nail dremeling, and ears cleaning.",
    iconName: "Sparkles"
  },
  {
    id: "boarding",
    title: "Cage-Free Luxury Stay",
    description: "Homely, cage-free boarding for boarding, complete with continuous vet nurse oversight and indoor play parks.",
    iconName: "Home"
  },
  {
    id: "pharmacy",
    title: "Fully-Equipped Pharmacy",
    description: "Direct retail access to genuine veterinary vaccines, prescription medicines, cardiac care drugs, and clinical diets.",
    iconName: "PlusSquare"
  }
];

export interface TestimonialItem {
  id: number;
  name: string;
  petName: string;
  role: string;
  text: string;
  doctorMentioned: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Vikram Reddy",
    petName: "Bruno (Golden Retriever)",
    role: "Pet Parent",
    text: "Adorables is hands-down the best pet clinic in Hyderabad! When Bruno had an emergency stomach issue at midnight, the emergency staff was ready. They did an ultrasound instantly and solved the issue with so much love.",
    doctorMentioned: "Dr. K. Srinivas",
    rating: 5
  },
  {
    id: 2,
    name: "Aparna Sen",
    petName: "Milo (Persian Cat)",
    role: "Cat Breeder",
    text: "Finding a vet who understands cats is difficult, but the doctors at Adorables are feline experts. Milo's dental cleaning and diagnostic checks were super smooth. The cage-free boarding is also extremely clean and stress-free.",
    doctorMentioned: "Dr. Shruti Sen",
    rating: 5
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    petName: "Coco (Cockatiel)",
    role: "Avian Enthusiast",
    text: "Most clinics only treat dogs and cats, but Adorables has a specialized avian doctor. The bird pharmacy had the exact liquid vitamins Coco needed. Excellent customer care and professional follow-ups!",
    doctorMentioned: "Dr. Anand Kumar",
    rating: 5
  }
];

export const CONTACT_INFO = {
  address: "Road No. 4, Opposite GVK One Mall, Banjara Hills, Hyderabad, Telangana 500034",
  phone: "+91 93815 63739",
  email: "care@adorablespetclinic.com",
  timings: "Open 24/7 (Emergency) | General OPD: 9:00 AM - 9:00 PM",
  mapsLink: "https://maps.google.com"
};
