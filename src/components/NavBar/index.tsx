import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  InboxIcon,
  UserCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const tabs = [
  { name: "Search", icon: MagnifyingGlassIcon, href: "#", current: false },
  { name: "Explore", icon: BoltIcon, href: "#", current: false },
  { name: "Messages", icon: InboxIcon, href: "#", current: true },
  { name: "Profile", icon: UserCircleIcon, href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <>
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "hidden   w-1/4 py-4 px-1 text-center text-sm font-medium sm:block"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <span>
                    <tab.icon className="mx-auto  h-6 w-6 text-blue-500" />
                  </span>
                  <span> {tab.name}</span>
                </a>
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "block   w-1/4 py-4 px-1 text-center text-sm font-medium sm:hidden "
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <tab.icon className="mx-auto  h-6 w-6 text-blue-500" />
                </a>
              </>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
