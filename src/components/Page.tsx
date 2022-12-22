import Image from "next/image"
import { RANDOM_URL, CLOUDINARY_URL } from "../utils/constants";

interface PageProps {
    data: {
        contentUrl: string,
        contentType: 'image' | 'video' | 'status',
        profileImageUrl: string,
        profileUsername: string,
        contentDescription: string,
    }
}

const imageLoader = ({ src, quality, width }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

export const Page = ({ data }: PageProps) => {
    const { contentUrl, profileImageUrl, profileUsername, contentDescription } = data;
    return (
        <div className={`relative flex items-center justify-center h-screen min-w-full snap-end snap-always bg-white`}>
            <div className="absolute bottom-3 right-3 w-12 h-12 rounded-[50%] bg-white">
                <Image className="rounded-[50%]" loader={imageLoader} src={`${RANDOM_URL}/${profileImageUrl}`} width={"50"} height={"50"} alt="profile picture" />
            </div>
            <div className="absolute bottom-3 left-3 ">
                <h3 className="text-red-700 font-normal ">@{profileUsername}</h3>
                <h6 className="text-red-700 font-light">{contentDescription}</h6>
            </div>
            <Image className="w-full h-full" loader={imageLoader} src={`${CLOUDINARY_URL}/${contentUrl}`} width={"100"} height={"100"} alt="bg" />
        </div>)
}