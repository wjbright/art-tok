import React, { useState } from "react";
import { useSession } from "next-auth/react";
import AuthModal from "../components/AuthModal";

// Creating this so we can call the auth modal from anywhere easily.
// This would be called when users want to perform certain actions on the app that need us to know which user it is.
// PS: I am not yet sure which actions to use to call this auth flow yet.
const withAuth = (WrappedComponent: React.FC) => {
  const ComponentWithAuthProps: React.FC = (props) => {
    const { data: sessionData } = useSession();
    const [showAuthModal, setShowAuthModal] = useState(false);

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
