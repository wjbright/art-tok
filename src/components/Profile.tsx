import { Page } from "./Page"

export const Profile = () => {
    return <div className={`h-full w-full snap-center snap-always bg-white`}>
        <div className="flex flex-row h-full w-full snap-always snap-mandatory snap-x overflow-x-scroll scroll-smooth">
            <Page data={{
                contentUrl: 'goldolar/image/upload/v1566463547/aycshrchfgnse6h0iuhr.jpg',
                profileImageUrl: 'men/75.jpg', 'contentType': 'image',
                profileUsername: 'genius',
                contentDescription: 'a bag of bla blu balaba'
            }} />
            <Page data={{
                contentUrl: 'dengcb3ex/image/upload/v1651243726/Blog_Banner_05_f019bafcda.jpg',
                profileImageUrl: 'men/75.jpg', 'contentType': 'image',
                profileUsername: 'wjbright',
                contentDescription: 'lorem ipsum something ish'
            }} />
            <Page data={{
                contentUrl: 'goldolar/image/upload/v1566463547/aycshrchfgnse6h0iuhr.jpg',
                profileImageUrl: 'men/75.jpg', 'contentType': 'image',
                profileUsername: 'goldolar',
                contentDescription: 'something new rad sola'
            }} />
            <Page data={{
                contentUrl: 'dengcb3ex/image/upload/v1651243726/Blog_Banner_05_f019bafcda.jpg',
                profileImageUrl: 'men/75.jpg', 'contentType': 'image',
                profileUsername: 'milton',
                contentDescription: 'star boasud saldie'
            }} />
        </div>
    </div>
}