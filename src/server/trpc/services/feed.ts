import { env } from "../../../env/server.mjs";
import { PEXEL_IMAGE_API_URL } from "../../../utils/constants";

export interface Profile {
  contentUrl: string;
  contentType: "image" | "video" | "status";
  profileImageUrl: string;
  profileUsername: string;
  contentDescription: string;
}

interface PexelPhotos {
  total_results: number;
  page: number;
  per_page: number;
  photos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
      photographer: string;
      photographer_url: string;
      photographer_id: number;
      avg_color: string;
      src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
      };
      liked: boolean;
      alt: string;
    }
  ];
  next_page: string;
}

export interface FetchProfile {
  profilePages: Profile[];
  hasNextPage: boolean;
}
export const fetchProfile = async (
  limit: number,
  page: number
): Promise<FetchProfile> => {
  const profileImageRequest = await fetch(
    `${PEXEL_IMAGE_API_URL}/search?query=people&per_page=1&page=${page}&orientation=square`,
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );
  const profileImage = (await profileImageRequest.json()) as PexelPhotos;

  const pagesRequest = await fetch(
    `${PEXEL_IMAGE_API_URL}/search?query=art%20work&per_page=${limit}&orientation=portrait&page=${page}`,
    {
      headers: {
        Authorization: env.PEXEL_KEY,
      },
    }
  );

  const pages = (await pagesRequest.json()) as PexelPhotos;

  const profilePages = pages.photos.map((photo) => {
    return {
      contentUrl: photo.src.original,
      contentType: "image",
      profileImageUrl: `${profileImage.photos[0].src.original}?auto=compress&cs=tinysrgb&dpr=1`,
      profileUsername: profileImage.photos[0].photographer,
      contentDescription: photo.alt,
    } satisfies Profile;
  });

  return {
    profilePages,
    hasNextPage: Boolean(pages.next_page),
  };
};
