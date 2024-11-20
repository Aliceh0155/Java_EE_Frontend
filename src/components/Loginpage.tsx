import backgroundImage from "../assets/images/wp8151821-harry-potter-aesthetic-pc-wallpapers.jpg"

const Login = () => {
  return (
    <div
  className="h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
    <h1 className="text-2xl font-bold text-center mb-4">Login User</h1>
    <form action="/LoginUser" method="post" className="space-y-4">
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
      >
        Log In
      </button>
    </form>
  </div>
</div>

  )
}

export default Login
