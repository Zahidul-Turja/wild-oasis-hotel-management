import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // ! 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // ! 2. If there is NO authenticated user, then redirect to the /login page
  //   ? navigate cannot be called in the first level of the component thats why we are using an Effect hook
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [navigate, isLoading, isAuthenticated]
  );

  // ! 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // ! 4. If there is a user, then render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
