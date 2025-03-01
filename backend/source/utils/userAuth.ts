const jwt = require("jsonwebtoken");
const APP_SECRET = "superSecret1";
/**
 * Extract user jwt and decode to reveal userID.
 * @param req
 */
export default function userAuth(req) {
  let token = req.headers.authorization;
  token = jwt.verify(token, APP_SECRET);
  return token;
}
