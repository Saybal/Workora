import React, { use, useEffect } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { SignInUser, setUser, SignInGoogle, SignInFacebook } =
    use(AuthContext);

  const handlecheckAccount = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    SignInUser(Email, Password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  useEffect(() => {
    document.title = "Login Page | App Store";
  }, []);

  const handleGoogleSignIn = () => {
    SignInGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  const handleFacebokSignIn = () => {
    SignInFacebook()
      .then((res) => {
        const user = res.user;
        setUser(user);
        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-center items-center">
      {/* Login Card */}
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm rounded-2xl shadow-3xl p-[3px] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="card bg-base-100 w-full shrink-0">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-base-content">
              Login Now
            </h2>
            <form onSubmit={handlecheckAccount} className="space-y-4 mt-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              <div className="text-sm text-right">
                <a className="link link-hover text-blue-500">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </form>

            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <Link className="text-blue-600 font-semibold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* OR Separator */}
      <p className="text-lg mt-6 text-gray-400">----------or----------</p>

      {/* Social Logins */}
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm mt-5 space-y-4">
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full text-base flex items-center justify-center gap-3"
        >
          <FcGoogle className="text-2xl" /> Sign In With Google
        </button>

        {/* Facebook */}
        <button
          onClick={handleFacebokSignIn}
          className="btn btn-outline w-full text-base flex items-center justify-center gap-3"
        >
          <ImFacebook2 className="text-2xl text-blue-600" /> Sign In With Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;