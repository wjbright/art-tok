import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Timeline = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!sessionData) {
      router.push("/auth/login");
    }
  }, [sessionData]);

  return (
    <>
      Timeline here
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold  transition hover:bg-white/20"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
};

export default Timeline;
