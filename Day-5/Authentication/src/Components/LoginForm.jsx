import { useState } from "react";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const usersArray = Array.isArray(storedUsers) ? storedUsers : [storedUsers];

    const matchedUser = usersArray.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className=" w-xl m-auto mt-20 items-center">
      <div className="  m-auto  border-black border-2 items-center rounded-2xl bg-white">
        <div>
          <h2 className="text-center mt-5">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3 flex flex-col">
              <label className="mx-5 mt-5 ">Email address</label>
              <input
                type="email"
                className=" border-2 h-10 bg-white mx-5 mt-2.5 items-center rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5 ">Password</label>
              <input
                type="password"
                className="border-2 h-10 bg-white mx-5 mt-2.5 items-center rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 mt-10 w-full text-center ">
              <button
                type="submit"
                className="h-10 w-20 items-center text-center rounded bg-green-200"
              >
                Login
              </button>
            </div>
          </form>
          <div className=" h-20 mb-3 mt-5  text-center">
            <p className="text-center mt-3 gap-2.5 ">
              Don't have an account?
              <a className="h-10 p-2 ml-2 rounded bg-green-200" href="/signup">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
