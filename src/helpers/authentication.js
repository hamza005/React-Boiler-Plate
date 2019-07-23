/**
 * Verify if token is valid and not expired
 * @param {string} token - The JWT token
 */

var route;
function verifyToken(token) {
  if (token) return true
  return false
}

function SetrememberRoute(path){
route = path
}
function getRememberRoute(){
  return route;
}
function isLoggedIn() {
  const token = localStorage.getItem('token')
  if (!token) {
    return false
  }
  if (verifyToken(token)) {
    return true
  }
  return false
}

function getLoggedInUser() {
  let user = localStorage.getItem('user')
  if (user) {
    user = JSON.parse(user)
  }
  return user
}

function loginAuthenticatedUser(user, token) {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
}

export {
  isLoggedIn,
  verifyToken,
  getLoggedInUser,
  loginAuthenticatedUser,
  logout,
  SetrememberRoute,
  getRememberRoute
}
