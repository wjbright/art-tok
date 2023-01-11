import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { trpc } from "../utils/trpc";
import { Profile } from "./Profile"

export const Feed = () => {
    const profilePages = trpc.feed.getFeed.useInfiniteQuery(
        { limit: 2 },
        { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );
    const [lastPageElementRef] = useInfiniteScroll(profilePages);

    if (profilePages.isLoading) return <span>Loading...</span>

    return (
        <div className="fixed flex flex-col flex-1 h-full w-screen">
            <div className="flex flex-col h-full w-full snap-always snap-mandatory snap-y overflow-y-scroll scroll-smooth">
                {profilePages?.data?.pages.map((pages) => pages.data.map((page, index) => {
                    if (profilePages.data.pages.length === index + 1) {
                        return <Profile pages={page.profilePages} key={index} lastProfileRef={lastPageElementRef} />
                    }
                    return <Profile pages={page.profilePages} key={index} />
                }))}
            </div>
        </div>
    )
}
