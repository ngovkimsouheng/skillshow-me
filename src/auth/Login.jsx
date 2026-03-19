import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/authApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../api/authSlice";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithGithub from "./SignInWithGithub";

export default function LoginForm() {
  const [login, { isLoading, error: apiError }] = useLoginMutation();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    setSuccessMsg("");

    try {
      // Call login ONLY ONCE
      const result = await login(data).unwrap();

      console.log("Login success:", result);

      // Extract token properly
      const token =
        result?.data?.access_token ||
        result?.access_token ||
        result?.accessToken;

      if (token) {
        //  Save token to localStorage
        localStorage.setItem("token", token);

        //  Optional: Save to redux too
        dispatch(
          setCredentials({
            token: token,
            user: result?.data?.user,
          }),
        );

        console.log("TOKEN AFTER SAVE:", localStorage.getItem("token"));
      } else {
        console.log("Token not found in response");
      }
      // alert(" Login successfully!");
      setTimeout(() => navigate("/", { replace: true }), 300);
      setSuccessMsg(" Login successful!");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  return (
    <div className="min-h-screen max-md:mx-3 relative bg-background flex items-center justify-center">
      <div className="bg-primary max-sm:hidden z-1 rounded-3xl absolute rotate-8 h-[390px] w-[450px]"></div>
      <div className="w-full border border-cool-sky absolute z-2 max-w-md bg-white  rounded-2xl shadow-sm px-8 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mt-4 text-[#1e2e3e]">Login</h1>
          {/* <p className="text-gray-500 text-sm">
            Login to your SkillShow account
          </p> */}
        </div>

        {successMsg && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-6 text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
                setValueAs: (value) => value.trim().toLowerCase(),
              })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* API Error */}
          {apiError && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
              {apiError?.data?.detail || "Invalid email or password"}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1e2e3e] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex justify-center items-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-[#1e2e3e] font-semibold">
            Create one
          </NavLink>
          {/* <SignInWithGoogle /> */}
          {/* <p>or </p>
      
          <SignInWithGithub /> */}
        </div>
      </div>{" "}
      <div className="h-screen w-screen rela">
        {/* <LiquidChrome
          baseColor={[, 0.1]}
          speed={1}
          amplitude={0.6}
          interactive={true}
        /> */}
      </div>
    </div>
  );
}
