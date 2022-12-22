import { Page } from "./Page"

export const Profile = ({ color }: { color: string }) => {
    return <div className={`min-h-screen min-w-full snap-end snap-always ${color} text-white`}>
        <div className="flex flex-row min-h-screen min-w-full snap-always snap-mandatory snap-x overflow-x-scroll scroll-smooth">
            <Page data={{ contentUrl: 'goldolar/image/upload/v1566463547/aycshrchfgnse6h0iuhr.jpg', profileImageUrl: 'men/75.jpg', 'contentType': 'image' }} />
            <Page data={{ contentUrl: 'dengcb3ex/image/upload/v1651243726/Blog_Banner_05_f019bafcda.jpg', profileImageUrl: 'men/75.jpg', 'contentType': 'image' }} />
            <Page data={{ contentUrl: 'goldolar/image/upload/v1566463547/aycshrchfgnse6h0iuhr.jpg', profileImageUrl: 'men/75.jpg', 'contentType': 'image' }} />
            <Page data={{ contentUrl: 'dengcb3ex/image/upload/v1651243726/Blog_Banner_05_f019bafcda.jpg', profileImageUrl: 'men/75.jpg', 'contentType': 'image' }} />
        </div>
    </div>
}