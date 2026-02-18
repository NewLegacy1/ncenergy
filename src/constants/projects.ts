/**
 * SOURCE MAP - Project names from https://ncenergy.ca/ homepage
 * (Ancaster Barracks, Cambridge Mills, Southern Smoke appear in "Why Choose" section)
 * Images: Local placeholders. To use ncenergy.ca images, replace image with full URL
 * e.g. image: "https://ncenergy.ca/wp-content/uploads/..."
 */

export const PROJECTS = [
  {
    id: "ancaster-barracks",
    name: "Ancaster Barracks",
    image: "/projects/project-ancaster-barracks.jpg",
    location: "Ancaster, ON",
    serviceType: "Commercial HVAC",
    outcome: "Full HVAC system installation for multi-unit facility",
  },
  {
    id: "cambridge-mills",
    name: "Cambridge Mills",
    image: "/projects/project-cambridge-mills.jpg",
    location: "Cambridge, ON",
    serviceType: "Heat Pump Installation",
    outcome: "Energy-efficient heat pump — reduced heating costs",
  },
  {
    id: "southern-smoke",
    name: "Southern Smoke",
    image: "/projects/project-southern-smoke.jpg",
    location: "Hamilton, ON",
    serviceType: "Furnace & AC Installation",
    outcome: "Complete heating and cooling system upgrade",
  },
] as const;
