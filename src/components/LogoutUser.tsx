const LogoutUser = () => {
  localStorage.removeItem("jwtToken")

  window.location.href = "/"

  return <button onClick={LogoutUser}>Logout</button>
}

export default LogoutUser
