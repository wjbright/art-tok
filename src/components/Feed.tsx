import NavBar from "./NavBar";
import { Profile } from "./Profile";

export const Feed = () => {
  return (
    <div className="fixed flex h-full w-screen flex-1 flex-col">
      <div className="flex h-full w-full snap-y snap-mandatory snap-always flex-col overflow-y-scroll scroll-smooth">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>

      <NavBar />
    </div>
  );
};
