import Image from "next/image"
import { RANDOM_URL, CLOUDINARY_URL } from "../utils/constants";

interface PageProps {
    data: {
        contentUrl: string,
        contentType: 'image' | 'video' | 'status',
        profileImageUrl: string
    }
}

const imageLoader = ({ src, quality, width }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

export const Page = ({ data }: PageProps) => {
    const { contentUrl, profileImageUrl } = data;
    return (
        <div className={`flex items-center justify-center h-screen min-w-full snap-end snap-always bg-white`}>
            <div className="fixed bottom-3 right-3 w-12 h-12 rounded-[50%] bg-white">
                <Image className="rounded-[50%]" loader={imageLoader} src={`${RANDOM_URL}/${profileImageUrl}`} width={"50"} height={"50"} alt="profile picture" />
            </div>
            <Image className="w-full h-full" loader={imageLoader} src={`${CLOUDINARY_URL}/${contentUrl}`} width={"100"} height={"100"} alt="bg" />
        </div>)
}