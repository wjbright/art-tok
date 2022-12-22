import { Profile } from "./Profile"

export const Feed = () => {
    return <div className="flex flex-col h-screen min-w-full snap-always snap-mandatory snap-y overflow-y-scroll scroll-smooth">
        <Profile color="bg-purple-500" />
        <Profile color="bg-red-500" />
        <Profile color="bg-green-500" />
        <Profile color="bg-blue-500" />
    </div>
}