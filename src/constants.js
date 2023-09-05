export function getRandomGradient() {
  const colors = [
    "from-red-400 via-yellow-400 to-green-400",
    "from-blue-400 via-indigo-400 to-purple-400",
    "from-pink-400 via-rose-400 to-fuchsia-400",
    "from-cyan-400 via-teal-400 to-blue-500",
    "from-amber-400 via-orange-400 to-red-500",
    "from-emerald-400 via-green-400 to-teal-500",
    "from-indigo-400 via-blue-400 to-purple-500",
    "from-rose-400 via-pink-400 to-red-500",
    "from-violet-400 via-purple-400 to-indigo-500",
    "from-lime-400 via-yellow-400 to-amber-500",
    "from-cyan-400 via-light-blue-400 to-blue-500",
    "from-green-400 via-lime-400 to-yellow-500",
    "from-red-400 via-pink-400 to-rose-500",
    "from-indigo-400 via-violet-400 to-purple-500",
    "from-teal-400 via-cyan-400 to-light-blue-500",
    "from-orange-400 via-amber-400 to-yellow-500",
    "from-pink-400 via-red-400 to-rose-500",
    "from-purple-400 via-indigo-400 to-violet-500",
    "from-yellow-400 via-lime-400 to-green-500",
    "from-blue-400 via-light-blue-400 to-cyan-500",
    "from-red-400 via-orange-400 to-amber-500",
    "from-green-400 via-emerald-400 to-teal-500",
    "from-indigo-400 via-purple-400 to-violet-500",
    "from-blue-400 via-teal-400 to-cyan-500",
    "from-red-400 via-purple-400 to-pink-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return `${randomColor}`;
}

export const navItems = [
  {
    id: 1,
    text: "Home",
    to: "/",
  },
  {
    id: 2,
    text: "Products",
    to: "/products",
  },
  {
    id: 3,
    text: "About",
    to: "/about",
  },
  {
    id: 4,
    text: "Contact",
    to: "/contact",
  },
];

export const products = [
  {
    title: "Hustler",
    price: "$100",
    subTitle: "The basics that everyone needs",
    items: [
      "Landing page which includes custom dns (fee may vary) and custom design.",
      "2 development revision for free, charges only occur once you exceed this limit.",
      "Free 3 month full support for your website, including maintenance and monitoring.",
    ],
  },
  {
    title: "Hacker",
    price: "$1000",
    subTitle: "A little upgrade for those booming businesses",
    items: [
      "CRM application to manage your existing and add potential customer.",
      "Landing page which includes custom dns (fee may vary) and custom design.",
      "4 development revision for free, charges only occur once you exceed this limit.",
      "Free 1 year full support for your suite that includes maintenance and monitoring.",
    ],
  },
  {
    title: "Hipster",
    price: "$50",
    subTitle: "We gotta start somewhere",
    items: [
      "A custom 5 page website design to meet your business needs.",
      "2 free revisions, additional charges only apply if you exceed the limit.",
      "Delivered within 2 weeks (if there’s no revision) ",
    ],
  },
];

export const features = [
  {
    title: "Fast",
    content:
      "We can have your website up and running in no time, to fill that gap in the market before it changes and thus conquering the competition. ",
  },
  {
    title: "Precise",
    content:
      "A website’s power is to bring attention from the right customers to your business, expanding your business beyond.",
  },
  {
    title: "Digital Transformation",
    content:
      "Conquer the digital era by transforming your business into the 21st century business model. Stay on top of the competition.",
  },
  {
    title: "Cutting-edge",
    content:
      "We apply the use of the latest tech to make sure your website is relevant, fast, secure, and up-to-date.",
  },
];
