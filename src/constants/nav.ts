import { NavItem } from "@/types/nav";

export const NAV_LINKS: NavItem[] = [
  {
    label: "Solutions",
    href: "#",
    dropdownImage: "/ImgAssets/navDropdownsideimg.png",
    dropdownItems: [
      {
        title: "Explore Foods",
        description: "Search our database of over 1 million products.",
        href: "/foods",
      },
      {
        title: "Allergy Scanner App",
        description: "Identify allergens in seconds with our scanner.",
        href: "/allergy-scanner-app",
      },
      {
        title: "Gluten Free Scanner",
        description: "Ensure your food is 100% gluten-free.",
        href: "/gluten-free-scanner",
      },
      {
        title: "Dairy Free App",
        description: "Perfect for lactose intolerance and dairy-free diets.",
        href: "/dairy-free-app",
      },
    ],
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Blog",
    href: "/blogs",
    dropdownImage: "/ImgAssets/image_3.png",
    dropdownItems: [
      {
        title: "Health & Nutrition",
        description: "Expert advice on family wellness.",
        href: "/blogs/health",
      },
      {
        title: "Product Reviews",
        description: "Unbiased reviews of popular food brands.",
        href: "/blogs/reviews",
      },
    ],
  },
  {
    label: "Restaurants",
    href: "/restaurants",
  },
  {
    label: "Food",
    href: "/foods",
    dropdownImage: "/ImgAssets/image_4.png",
    dropdownItems: [
      {
        title: "Ingredient Checker",
        description: "Analyze any ingredient list instantly.",
        href: "/food-ingredient-checker",
      },
      {
        title: "Top Rated Foods",
        description: "Browse the highest scoring products.",
        href: "/foods/top-rated",
      },
    ],
  },
];
