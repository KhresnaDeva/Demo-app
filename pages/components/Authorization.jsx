// components/AuthorizationButton.js
import { redirectToAuthorization } from "../utils/authorization";

const iam = require('iam-sdk-frontend')
iam.iam.setup('64cca6634bb48b608d3bdf31','http://localhost:3000','http://localhost:3001','user:read user:create')
const AuthorizationButton = () => {
  return (
    <button onClick={location.href = iam.iam.redirect()}>
      Authorize Access
    </button>
  );
};

export default AuthorizationButton;
