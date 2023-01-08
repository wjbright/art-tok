import Link from "next/link";
import { useRouter } from "next/router";
import { APP_PAGES } from "../../utils/constants";

import { classNames } from "../../utils/helper-functions";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = APP_PAGES[router.pathname];

  return (
    <div>
      <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {Object.values(APP_PAGES).map((tab) => (
              <>
                <span
                  key={tab.name}
                  className={classNames(
                    currentRoute.name === tab.name
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "hidden   w-1/4 py-4 px-1 text-center text-sm font-medium sm:block"
                  )}
                >
                  <Link href={tab.href}>
                    <span>
                      <tab.icon
                        className={classNames(
                          currentRoute.name === tab.name
                            ? "text-indigo-500"
                            : "text-gray-500",
                          "mx-auto  h-6 w-6 "
                        )}
                      />
                    </span>
                    <span> {tab.name}</span>
                  </Link>
                </span>
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    currentRoute.name === tab.name
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "block   w-1/4 py-4 px-1 text-center text-sm font-medium sm:hidden "
                  )}
                >
                  <tab.icon
                    className={classNames(
                      currentRoute.name === tab.name
                        ? "text-indigo-500"
                        : "text-gray-500",
                      "mx-auto  h-6 w-6 "
                    )}
                  />
                </a>
              </>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
