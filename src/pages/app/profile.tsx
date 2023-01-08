import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import UploadContent from "../../components/UploadContent";
import { classNames } from "../../utils/helper-functions";

const tabs = [
  { name: "Content", href: "#", current: false },
  { name: "Bio", href: "#", current: true },
  { name: "Contact", href: "#", current: false },
];
const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
};

export default function Profile() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  return (
    <>
      <UploadContent isOpen={showUploadModal} setIsOpen={setShowUploadModal} />
      <div className="fixed flex h-full w-screen flex-col">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-48"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={profile.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                        <h1 className="truncate text-2xl font-bold text-gray-900">
                          {profile.name}
                        </h1>
                      </div>
                      <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                          onClick={() => setShowUploadModal(true)}
                          type="button"
                          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                          <PlusCircleIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Upload</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? "border-pink-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd
                      className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                      dangerouslySetInnerHTML={{ __html: profile.about }}
                    />
                  </div>
                </dl>
              </div>

              {/* Team member list */}
            </main>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
}
