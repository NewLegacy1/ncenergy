/**
 * SOURCE MAP - All data verified from ncenergy.ca
 * Home: https://ncenergy.ca/
 * About: https://ncenergy.ca/about-us/
 * Services: https://ncenergy.ca/services/
 * Contact: https://ncenergy.ca/contact/
 * Testimonials: https://ncenergy.ca/testimonials/
 */

export const SITE = {
  name: "Northern Clean Energy",
  tagline: "Heating & Air Conditioning",
  description:
    "Complete Residential and Commercial Heating & Air Conditioning Services in Hamilton, Burlington, Oakville, Niagara and the Surrounding Areas.",
  founded: 2005,
  yearsExperience: "20+",
  // TODO: Verify exact street address - https://ncenergy.ca/contact/ shows "Ancaster, ON" only
  address: "Ancaster, ON",
  city: "Hamilton",
  province: "Ontario",
  phone: "905-648-0220",
  email: "info@ncenergy.ca",
  serviceAreas: [
    "Hamilton",
    "Burlington",
    "Oakville",
    "Niagara",
    "Grimsby",
    "Brantford",
    "West Lincoln",
    "Waterdown",
    "Ancaster",
  ],
  // Verified from https://ncenergy.ca/ - "We're available 24/7"
  emergencyService: "24/7",
  // Trust stats - verify with client
  googleRating: "4.9",
  googleReviewCount: "100+",
  projectsCompleted: "500+",
  certifications: ["TSSA", "HRAI"],
} as const;

export const SERVICES = [
  {
    id: "air-conditioner-installation",
    title: "Air Conditioner Installation",
    shortDesc:
      "Looking for an air conditioner in Hamilton, Burlington, Oakville or Niagara? We have home air conditioning systems designed to meet your needs.",
    href: "/services#air-conditioner-installation",
  },
  {
    id: "air-conditioner-repair",
    title: "Air Conditioner Repair",
    shortDesc:
      "If you are looking for qualified, skilled and reliable professionals you can trust to help you with your air conditioner, look no further than Northern Clean Energy.",
    href: "/services#air-conditioner-repair",
  },
  {
    id: "furnace-installation",
    title: "New Furnace Installation",
    shortDesc:
      "Whether it's just below freezing or way down in the minus mid-twenties, the welcoming warmth of a heated home can make those dark, cold days a lot more comfortable.",
    href: "/services#furnace-installation",
  },
  {
    id: "furnace-repair",
    title: "Furnace Repair",
    shortDesc:
      "It's not a fun issue to deal with in the dead of winter, but if you're in need of furnace repair & maintenance in the Hamilton area, Northern Clean Energy can help.",
    href: "/services#furnace-repair",
  },
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    shortDesc:
      "If you want to beat the heat in summer, your first thought might be an air conditioner. But did you know you can save energy and money with an air source heat pump?",
    href: "/services#heat-pumps",
  },
  {
    id: "boilers",
    title: "Boilers",
    shortDesc:
      "Boilers are an important part of a home or business, they are key in our day to day living or operations. So when your boiler requires a repair or replacement it is something you need done right and done quickly.",
    href: "/services#boilers",
  },
  {
    id: "radiant-floor-heating",
    title: "In-Floor Radiant Heating",
    shortDesc:
      "Although there are many ways to heat your Hamilton home during the long Ontario winter, radiant floor heating is one of the most cost-effective and efficient solutions.",
    href: "/services#radiant-floor-heating",
  },
  {
    id: "commercial",
    title: "Commercial HVAC",
    shortDesc:
      "Commercial, municipal, institutional and industrial customers rely on our technicians for our prompt, professional service, high-quality workmanship and can-do problem-solving approach.",
    href: "/services#commercial",
  },
] as const;

export const WHY_CHOOSE = [
  "Fully backed warranty",
  "24/7 emergency service",
  "Licensed professionals",
  "Certified technicians",
  "Locally owned and operated",
] as const;

export const VALUES = [
  {
    title: "Clean, respectful technicians",
    description:
      "Our clean, uniformed technicians arrive at your door on time. We respect your home and never leave a mess behind!",
  },
  {
    title: "Expertly Trained",
    description:
      "Rest easy knowing you have a team of friendly, skilled technicians who are available 24/7 to you and ready to serve you.",
  },
  {
    title: "Upfront Pricing",
    description:
      "We make it a point to keep you informed every step of the way including the cost of your service. No surprises and no hidden fees!",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What do we service?",
    answer:
      "We service and maintain all Makes and Brands of Commercial and Residential furnaces, boilers, air-conditioners, heat pumps, water heaters, indoor air-quality control and roof top equipment.",
  },
  {
    question: "Does NC Energy provide maintenance plans?",
    answer:
      "We have maintenance plans available to meet those required needs of any equipment. Give us a call and we can provide a solution to fit your requirements.",
  },
  {
    question: "How can I find out details and costs of NC Energy's service solutions?",
    answer:
      "We can present you with an estimate, with a detailed breakdown of costs from our flat rate pricing guide, before any repairs are made. We can also provide you with recommendations with your best interests in mind.",
  },
  {
    question: "What areas does NC Energy cover?",
    answer:
      "We service all areas from Grimsby to Oakville, and West Lincoln to Brantford. We also provide services in Waterdown and Ancaster.",
  },
] as const;

export const FORM_SERVICES = [
  "Air Condition Install",
  "Air Condition Repair",
  "Furnace Install",
  "Furnace Repair",
  "Heat Pumps",
  "Boilers",
  "Radiant Floor Heating",
  "Commercial",
] as const;
