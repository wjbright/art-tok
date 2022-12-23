import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AUTH_TYPES } from "../../utils/constants";
import { trpc } from "../../utils/trpc";

const AuthPage: React.FC = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const authType = router.query?.authType;

  const authMutation = trpc.auth.registerUser.useMutation({
    onSuccess: () => {
      return router.push("/app/timeline");
    },
  });

  useEffect(() => {
    if (authType === AUTH_TYPES.register.key && sessionData) {
      const { user } = sessionData;
      authMutation.mutateAsync({
        email: user?.email as string,
        name: user?.name as string,
        profile_image: user?.image as string,
      });
    }
    if (authType === AUTH_TYPES.login.key && sessionData) {
      router.push("/app/timeline");
    }
  }, [sessionData, authType]);

  return (
    <>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        onClick={() => signIn()}
      >
        Sign up / Sign in
      </button>
    </>
  );
};

export default AuthPage;
