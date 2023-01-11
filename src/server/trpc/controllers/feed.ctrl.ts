import { FetchProfile, fetchProfile, Profile } from "../services/feed";
import { publicProcedure } from "../trpc";
import { getFeedValidation } from "../validations/feed";

export const getFeed = publicProcedure
  .input(getFeedValidation)
  .query(async ({ input }) => {
    const limit = input.limit ?? 2;
    const { cursor } = input;

    const profilePromises: Promise<FetchProfile>[] = [];
    for (let index = 0; index < limit; index++) {
      profilePromises.push(fetchProfile(limit, index));
    }

    let profiles: FetchProfile[];
    try {
      profiles = await Promise.all(profilePromises);
    } catch (error) {
      profiles = [];
    }

    const result = {
      data: profiles,
      nextCursor: cursor ? cursor + 1 : 1,
    };

    return result;
  });
