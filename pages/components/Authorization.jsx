// components/AuthorizationButton.js
import { redirectToAuthorization } from "../utils/authorization";

const AuthorizationButton = () => {
  return (
    <button onClick={redirectToAuthorization}>
      Authorize Access
    </button>
  );
};

export default AuthorizationButton;
