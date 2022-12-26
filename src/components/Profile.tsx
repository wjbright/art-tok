import { trpc } from "../utils/trpc"
import { Page } from "./Page"

export const Profile = () => {
    const profilePages = trpc.feed.getFeed.useQuery({});

    if (profilePages.isLoading) return <>loading...</>
    return <div className={`h-full w-full snap-center snap-always bg-white`}>
        <div className="flex flex-row h-full w-full snap-always snap-mandatory snap-x overflow-x-scroll scroll-smooth">
            {profilePages.data?.map((data) =>
                <Page data={data} />
            )}
        </div>
    </div>
}