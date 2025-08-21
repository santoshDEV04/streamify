import React, { useState } from "react";
import { ShipWheelIcon } from "lucide-react";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className=" h-screen flex items-center justify-center p-4 sm:p-8 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col  lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* signUp form - left side */}

        <div className=" w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}

          <div className="mb-5 flex items-center justify-start gap-2 ">
            <ShipWheelIcon className="size-9 text-primary" />

            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>

          <div className="w-full">
            <form onSubmit={handleSignup} action="">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Create an Account
                  </h2>
                  <p>
                    Join Streamify and start your language learning adventure!
                  </p>
                </div>

                <div className="space-y-3 ">

                  {/* FULLNAME */}

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>

                    <input type="text"
                      placeholder="john Doe"
                      className="input input-borderd w-full"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                      />
                  </div>

                  {/* EMAIL */}

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>

                    <input type="text"
                      placeholder="santoshkumar@gmail.com"
                      className="input input-borderd w-full"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                      />
                  </div>

                  {/* PASSWORD */}

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>

                    <input type="text"
                      placeholder=""
                      className="input input-borderd w-full"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                      />
                  </div>

                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
