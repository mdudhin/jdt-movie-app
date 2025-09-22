const Login = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <input
        className="border border-black rounded-md py-2 px-5"
        placeholder="Email"
      />
      <input
        className="border border-black rounded-md py-2 px-5"
        placeholder="Password"
        type="password"
      />

      <button className="bg-black text-white py-2 px-5 rounded-md cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Login;
