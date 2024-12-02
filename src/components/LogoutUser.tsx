
const LogoutUser = () => {
   
    localStorage.removeItem("jwtToken");
  
    window.location.href = "/loginUser";
  
  return (
    <button onClick={LogoutUser}>Logga ut</button>
  );
};

export default LogoutUser