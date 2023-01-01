import { Profile as ProfileData } from "../server/trpc/services/feed"
import { Page } from "./Page"

export const Profile = ({ pages, lastProfileRef }: { pages: ProfileData[], lastProfileRef?: any }) => {
    return <div className={`h-full w-full snap-center snap-always bg-white`} ref={lastProfileRef}>
        <div className="flex flex-row h-full w-full snap-always snap-mandatory snap-x overflow-x-scroll scroll-smooth">
            {pages.map((data) => <Page data={data} />)}
        </div>
    </div>
}