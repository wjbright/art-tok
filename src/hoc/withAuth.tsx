import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import AuthModal from "../components/AuthModal";

const withAuth = (WrappedComponent: React.FC) => {
  const ComponentWithAuthProps: React.FC = (props) => {
    const { data: sessionData } = useSession();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const router = useRouter();

    const authMutation = trpc.auth.registerUser.useMutation({
      onSuccess: () => {
        setShowAuthModal(false);
      },
    });
    // Handle Registeration here

    // authMutation.mutateAsync({
    //     email: user?.email as string,
    //     name: user?.name as string,
    //     profile_image: user?.image as string,
    //   });

    return (
      <>
        <WrappedComponent
          {...props}
          setShowAuthModal={setShowAuthModal}
          session={sessionData}
        />
        {showAuthModal ? (
          <AuthModal isOpen={showAuthModal} setIsOpen={setShowAuthModal} />
        ) : null}
      </>
    );
  };

  return ComponentWithAuthProps;
};

export default withAuth;
