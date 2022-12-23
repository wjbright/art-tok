import { Profile } from "./Profile"

export const Feed = () => {
    return (
        <div className="fixed flex flex-col flex-1 h-full w-screen">
            <div className="flex flex-row justify-evenly items-center w-full h-16 bg-red-100">
                <div>Search</div>
                <div>Explore</div>
                <div>Messages</div>
                <div>Profile</div>
            </div>
            <div className="flex flex-col h-full w-full snap-always snap-mandatory snap-y overflow-y-scroll scroll-smooth">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
            <div className="flex flex-row justify-evenly items-center w-full h-16 bg-red-100">
                <div>Search</div>
                <div>Explore</div>
                <div>Messages</div>
                <div>Profile</div>
            </div>
        </div>
    )
}
