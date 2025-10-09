import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Signup() {
  const [regname, setRegName] = useState("");
  const [regemail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const [regage, setRegAge] = useState("");
  const [regcity, setRegCity] = useState("");
  const [regmobile, setRegMobile] = useState("");
  const navigate = useNavigate();

  const handlesignup = (e) => {
    e.preventDefault();

    const userData = {
      name: regname,
      email: regemail,
      password: regpassword,
      age: regage,
      city: regcity,
      mobile: regmobile,
    };

    let users = localStorage.getItem("users");
    console.log(users);

    if (users) {
      users = JSON.parse(users);
      users.push(userData);
    } else {
      users = [userData];
    }

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    const updatedUsers = JSON.parse(localStorage.getItem("users"));
    console.log(updatedUsers);

    alert("Registration successful!");
    console.log(userData);

    navigate("/");
  };

  return (
    <div className="w-xl m-auto mt-20 items-center">
      <div className=" m-auto  border-black border-2 items-center rounded-2xl bg-white ">
        <div>
          <h2 className="text-center mt-5 ">Signup</h2>
          <form onSubmit={handlesignup}>
            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5  ">Name</label>
              <input
                type="text"
                value={regname}
                onChange={(e) => setRegName(e.target.value)}
                required
                className="border-2 h-10 bg-white mx-5 mt-2.5 items-center rounded "
              />
            </div>
            <div className="mb-3 flex flex-col  ">
              <label className="mx-5 mt-5 ">Email</label>
              <input
                type="email"
                value={regemail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
                className="border-2 h-10 bg-white rounded  mx-5 mt-2.5 items-center"
              />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5">Password</label>
              <input
                type="password"
                value={regpassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                className="border-2 h-10 bg-white rounded  mx-5 mt-2.5 items-center"
              />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5">Age</label>
              <input
                type="number"
                value={regage}
                onChange={(e) => setRegAge(e.target.value)}
                required
                className="border-2 h-10 bg-white rounded  mx-5 mt-2.5 items-center"
              />
            </div>

            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5">City</label>
              <input
                type="text"
                value={regcity}
                onChange={(e) => setRegCity(e.target.value)}
                required
                className="border-2 h-10 bg-white rounded  mx-5 mt-2.5 items-center"
              />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="mx-5 mt-5">Mobile No</label>
              <input
                type="number"
                value={regmobile}
                onChange={(e) => setRegMobile(e.target.value)}
                required
                className="border-2 h-10 bg-white rounded  mx-5 mt-2.5 items-center"
              />
            </div>
            <div className="mb-3 mt-10 w-full text-center ">
              <button
                type="submit"
                className=" h-10 w-20 items-center text-center rounded bg-green-200"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
