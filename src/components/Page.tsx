import Image from "next/image"
import { type Profile } from "../server/trpc/services/feed";

interface PageProps {
    data: Profile
}

const imageLoader = ({ src, quality, width }: any) => {
    return `${src}`;
}

export const Page = ({ data }: PageProps) => {
    const { contentUrl, profileImageUrl, profileUsername, contentDescription } = data;
    return (
        <div className={`relative flex items-center justify-center h-full min-w-full snap-end snap-always bg-white`}>
            <div className="absolute bottom-3 right-3 w-12 h-12 rounded-[50%] bg-white">
                <Image className="rounded-[50%]" loader={imageLoader} src={`${profileImageUrl}`} width={"50"} height={"50"} alt={contentDescription} />
            </div>
            <div className="absolute bottom-3 left-3 ">
                <h3 className="text-white font-normal ">@{profileUsername}</h3>
                <h6 className="text-white font-light">{contentDescription}</h6>
            </div>
            <Image className="w-full h-full" loader={imageLoader} src={`${contentUrl}`} width={"100"} height={"100"} alt={contentDescription} />
        </div>)
}