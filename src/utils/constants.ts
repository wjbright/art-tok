import {
  MagnifyingGlassIcon,
  InboxIcon,
  UserCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export const AUTH_TYPES = {
  register: {
    key: "register",
  },
  login: {
    key: "login",
  },
};
export const RANDOM_URL = "https://randomuser.me/portraits";
export const CLOUDINARY_URL = "https://res.cloudinary.com";
export const PEXEL_IMAGE_API_URL = "https://api.pexels.com/v1";
export const PEXEL_VIDEO_API_URL = "https://api.pexels.com/videos";
export const PEXEL_IMAGE_URL = "https://images.pexels.com/v1";

export const APP_PAGES = {
  "/search": {
    name: "Search",
    icon: MagnifyingGlassIcon,
    href: "#",
  },
  "/": { name: "Explore", icon: BoltIcon, href: "/" },
  "/app/messages": {
    name: "Messages",
    icon: InboxIcon,
    href: "#",
    //   "/app/messages",
  },
  "/app/profile": {
    name: "Profile",
    icon: UserCircleIcon,
    href: "/app/profile",
  },
};
