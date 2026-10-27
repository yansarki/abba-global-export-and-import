export interface ProductItem {
  id: string;
  name: string;
  botanicalName?: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  keySpecs: { label: string; value: string }[];
  packagingOptions: string[];
  imageUrl: string;
  imageAlt: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  sourceNote?: string;
}

export const COMPANY_INFO = {
  name: "ABBA GLOBAL EXPORT AND IMPORT",
  tagline: "Connecting Nigerian Agricultural Products to Global Markets",
  phoneDisplay: "+234 703 773 7995",
  phoneRaw: "+2347037737995",
  whatsappUrl: "https://wa.me/2347037737995",
  email: "abbaglobalexport@gmail.com",
  location: "Wudil City, Kano State, Nigeria",
  addressFull: "Wudil Commercial Axis, Kano State, Nigeria",
  country: "Nigeria",
  region: "West Africa",
  businessHours: "Monday – Saturday: 8:00 AM – 6:00 PM (WAT / GMT+1)",
  pinterestVideoUrl: "https://pin.it/6Psm17iuf",
  pinterestVideoThumbnail: "https://i.pinimg.com/videos/thumbnails/originals/a5/13/55/a51355a9b922ef87f5b97049a9dc53bc.0000000.jpg",
  pinterestOrigImage: "https://i.pinimg.com/originals/d9/ed/d9/d9edd94e187690c7907a5e11a3021387.jpg",
  cloudinaryCollections: [
    { title: "Company Logo Collection", url: "https://collection.cloudinary.com/trdqjutt/bb1c407e80742ea3f052c9256c7db5a2" },
    { title: "Hibiscus / Dried Zobo Collection", url: "https://collection.cloudinary.com/trdqjutt/8e432abaf4ef4a2269c4e7d9262a8b72" },
    { title: "Soybeans Collection", url: "https://collection.cloudinary.com/trdqjutt/6d175647d587d8dd677cfdd7eb5e1f94" },
    { title: "Groundnuts Collection", url: "https://collection.cloudinary.com/trdqjutt/2d286a1e313bc51aac46913ed63b9f3c" },
    { title: "Zobo Drink Collection", url: "https://collection.cloudinary.com/trdqjutt/54ff731fbcc6e861b16819546ccaf41c" },
    { title: "Additional Agricultural Product Collection 1", url: "https://collection.cloudinary.com/trdqjutt/5850103d086ce3516053735990e30400" },
    { title: "Additional Agricultural Product Collection 2", url: "https://collection.cloudinary.com/trdqjutt/68b355fe8d91f5679639d9284f912cab" },
    { title: "Additional Agricultural Product Collection 3", url: "https://collection.cloudinary.com/trdqjutt/a7a09e919bae7dc31b2056bf5e687dba" }
  ]
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "hibiscus-flowers",
    name: "Dried Hibiscus Flowers (Zobo)",
    botanicalName: "Hibiscus sabdariffa",
    category: "Botanicals & Herbal Tea",
    badge: "Key Export Commodity",
    shortDesc: "Premium deep-red dried calyces hand-harvested and sun-dried in northern Nigeria, renowned for vibrant color and tart flavor.",
    fullDesc: "Our dried hibiscus flowers (calyces) are sourced directly from farm networks in Kano and neighboring northern agricultural belts. They feature whole calyces, rich dark red to purple pigment, and natural acidity, perfect for herbal tea blenders, beverage processors, and extract manufacturers.",
    keySpecs: [
      { label: "Origin", value: "Kano / Northern Nigeria" },
      { label: "Form", value: "Whole Dried Calyces" },
      { label: "Color", value: "Deep Crimson Red / Dark Purple" },
      { label: "Moisture Level", value: "Standard export dry" }
    ],
    packagingOptions: [
      "25kg / 50kg PP woven export bags",
      "Baled into compressed sacks on buyer specification",
      "Custom buyer labeling available upon request"
    ],
    imageUrl: "https://images.pexels.com/photos/6671884/pexels-photo-6671884.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Dried Hibiscus Flowers (Zobo Calyces) from Kano Nigeria"
  },
  {
    id: "soybeans",
    name: "Soybeans",
    botanicalName: "Glycine max",
    category: "Oilseeds & Grains",
    badge: "High Demand Grain",
    shortDesc: "Clean, high-protein non-GMO dry yellow soybeans sourced from northern Nigerian farming communities for feed, food, and oil processing.",
    fullDesc: "Soybeans represent one of the major cash crops flowing through the agricultural trade corridors of Kano. Sourced with care from Wudil and surrounding producing clusters, our soybeans are well-sorted and dried for commercial milling, animal feed production, and human consumption.",
    keySpecs: [
      { label: "Origin", value: "Kano State & Northern Nigeria" },
      { label: "Crop Year", value: "Current Season Harvest" },
      { label: "Purity", value: "Cleaned and machine-sifted" },
      { label: "Application", value: "Soy oil, feed meal, food processing" }
    ],
    packagingOptions: [
      "50kg PP woven sacks",
      "100kg standard commodity bags",
      "Bulk container liner loading upon arrangement"
    ],
    imageUrl: "https://images.pexels.com/photos/33501330/pexels-photo-33501330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    imageAlt: "Nigerian Soybeans in market sacks"
  },
  {
    id: "groundnuts",
    name: "Groundnuts (Peanuts)",
    botanicalName: "Arachis hypogaea",
    category: "Nuts & Oilseeds",
    badge: "Kano Heritage Crop",
    shortDesc: "Naturally grown, sun-dried Nigerian groundnuts available in-shell or kernel form for oil pressing, roasting, and culinary uses.",
    fullDesc: "Kano has a historic agricultural legacy with groundnuts, supported by the sandy-loam soils and dry harvesting weather of northern Nigeria. We facilitate direct procurement from local aggregate centers in Wudil, ensuring fresh harvest stock for regional and overseas buyers.",
    keySpecs: [
      { label: "Origin", value: "Wudil, Kano State, Nigeria" },
      { label: "Types Available", value: "Raw In-Shell & Raw Shelled Kernels" },
      { label: "Aroma / Taste", value: "Naturally rich nutty flavor" },
      { label: "Drying", value: "Sun-dried to safe export moisture" }
    ],
    packagingOptions: [
      "25kg / 50kg jute or poly bags",
      "Ventilated sacks for in-shell peanuts",
      "Palletized export packing on buyer agreement"
    ],
    imageUrl: "https://images.pexels.com/photos/30107827/pexels-photo-30107827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    imageAlt: "Raw Nigerian Groundnuts in rustic bowl"
  },
  {
    id: "zobo-drink",
    name: "Zobo Drink (Hibiscus Beverage Base)",
    botanicalName: "Roselle Infusion Base",
    category: "Beverage & Value Add",
    badge: "Value-Added Specialty",
    shortDesc: "The refreshing, naturally tart herbal beverage made from steeped hibiscus calyces, enjoyed across West Africa and internationally.",
    fullDesc: "Zobo drink is Nigeria's iconic deep-ruby herbal infusion prepared from steeped dried hibiscus petals, often spiced with ginger, cloves, and natural citrus. We support beverage manufacturers, distributors, and culinary entrepreneurs looking to source whole hibiscus or formulated dry blend mixtures.",
    keySpecs: [
      { label: "Flavor Profile", value: "Cranberry-like tartness, fruity aroma" },
      { label: "Ingredients Base", value: "100% natural dried hibiscus calyces" },
      { label: "Caffeine Status", value: "Naturally 100% caffeine-free" },
      { label: "Usage", value: "Ready-to-brew tea, RTD bottling, concentrates" }
    ],
    packagingOptions: [
      "Bulk dried flower batches for extraction",
      "Blended formulation dried packs",
      "Sample packs provided for beverage testing"
    ],
    imageUrl: "https://images.pexels.com/photos/38293144/pexels-photo-38293144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Refreshing Zobo Drink prepared from dried hibiscus flowers"
  },
  {
    id: "other-agricultural-products",
    name: "Other Agricultural Commodities",
    category: "Agro Commodities",
    badge: "Custom Buyer Inquiries",
    shortDesc: "Facilitating buyer inquiries for other high-value Nigerian crops including sesame seeds, ginger, sorghum, and millet upon request.",
    fullDesc: "Operating from Wudil City in Kano State — one of West Africa's most strategic agricultural trading hubs — ABBA GLOBAL EXPORT AND IMPORT is positioned to handle customized inquiries for seasonal grains, spices, and pulses directly from local farming communities.",
    keySpecs: [
      { label: "Commodities", value: "White Sesame, Dried Split Ginger, Sorghum, Millet" },
      { label: "Sourcing Center", value: "Wudil & Kano Grain Markets" },
      { label: "Fulfillment", value: "Per buyer contract specifications" },
      { label: "Inspection", value: "Coordinated with independent surveyor" }
    ],
    packagingOptions: [
      "Custom buyer-specified export packaging",
      "Burlap or woven polypropylene bags",
      "Full container loads (FCL) or consolidated consignments"
    ],
    imageUrl: "https://images.pexels.com/photos/38830144/pexels-photo-38830144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    imageAlt: "Bags of agricultural seeds and crops in Nigerian market"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dried Hibiscus Flower Calyces",
    category: "Hibiscus / Zobo",
    description: "Carefully sorted dried deep-crimson hibiscus calyces ready for packing and export shipment.",
    imageUrl: "https://images.pexels.com/photos/6671884/pexels-photo-6671884.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: "gal-2",
    title: "Soybean Market Aggregation",
    category: "Soybeans",
    description: "Sun-dried golden soybeans bagged at an agricultural market hub in northern Nigeria.",
    imageUrl: "https://images.pexels.com/photos/33501330/pexels-photo-33501330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "gal-3",
    title: "Groundnuts in Shell",
    category: "Groundnuts",
    description: "Unshelled dry groundnuts freshly harvested from local farmlands surrounding Wudil.",
    imageUrl: "https://images.pexels.com/photos/30107827/pexels-photo-30107827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "gal-4",
    title: "Ruby Red Zobo Herbal Infusion",
    category: "Zobo Drink",
    description: "Natural hibiscus drink served fresh, highlighting the deep rich ruby red hue.",
    imageUrl: "https://images.pexels.com/photos/38293144/pexels-photo-38293144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: "gal-5",
    title: "Northern Nigerian Farmland Harvest",
    category: "Agricultural Field",
    description: "Vibrant agricultural activity and harvest seasons across the agricultural belt of northern Nigeria.",
    imageUrl: "https://images.pexels.com/photos/35175417/pexels-photo-35175417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "gal-6",
    title: "Market Commodity Sacks",
    category: "Commodities & Logistics",
    description: "Grain and seed sacks stacked and prepared for logistics and transportation.",
    imageUrl: "https://images.pexels.com/photos/38830144/pexels-photo-38830144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "gal-7",
    title: "Loose Dried Hibiscus Texture",
    category: "Botanicals",
    description: "Macro close-up showing whole petal structure and natural dehydration texture.",
    imageUrl: "https://images.pexels.com/photos/5987947/pexels-photo-5987947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: "gal-8",
    title: "Export Gateway Logistics",
    category: "Global Trade",
    description: "Connecting local agricultural supply from Kano to international shipping destinations.",
    imageUrl: "https://images.pexels.com/photos/33401363/pexels-photo-33401363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Direct Sourcing from Wudil, Kano",
    description: "Based directly in Wudil City — an established agro-trading center in Kano State — we source crops directly from local farmers and local aggregate markets, minimizing unnecessary broker layers.",
    icon: "MapPin"
  },
  {
    title: "Responsive & Transparent Communication",
    description: "We prioritize honest, swift, and respectful communication with every buyer enquiry. We keep you updated via WhatsApp, phone, and direct email from inquiry to order finalization.",
    icon: "MessageSquareCheck"
  },
  {
    title: "Clear Product Information & Samples",
    description: "We provide realistic specifications, honest descriptions of current harvest conditions, and clear sample coordination so buyers know exactly what they are purchasing.",
    icon: "ClipboardCheck"
  },
  {
    title: "Focus on Key Nigerian Commodities",
    description: "Specializing in the agricultural staples Northern Nigeria is renowned for: dried hibiscus flowers (zobo), high-protein soybeans, and sun-dried groundnuts.",
    icon: "Wheat"
  },
  {
    title: "Support for Local & International Buyers",
    description: "Whether you are a domestic food processor in Nigeria or an international buyer looking for containerized agricultural supply, we handle inquiries tailored to your requirements.",
    icon: "Globe"
  },
  {
    title: "Honest Trade Ethics",
    description: "We believe in building long-term business connections founded on straightforward agreements, realistic fulfillment timelines, and mutual respect.",
    icon: "ShieldCheck"
  }
];
