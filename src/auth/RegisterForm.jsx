import { useState, useRef, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation, useUploadFileMutation } from "../api/authApi";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import img from "./Login-rafiki (1).svg"

/** Convert a File → base64 data-URL, then strip the prefix to get raw base64 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result); // keep full data-URL
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ─────────────────────────────── sub-components ─────────────────────────────── */

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="field-error text-rose-600" role="alert">
      <span className="animate-pulse">*</span> {message}
    </p>
  );
}

/* ─────────────────────────────── main component ─────────────────────────────── */

export default function RegisterForm() {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [uploadFile] = useUploadFileMutation();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [register, { isLoading, error: apiError }] = useRegisterMutation();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // Check for Google user data
  const googleUser = location.state?.googleUser;
  const googleMessage = location.state?.message;

  const {
    register: field,
    handleSubmit,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", // validate only when submit
    reValidateMode: "onSubmit", // don't revalidate while typing
  });

  const password = watch("password");

  // Pre-fill form with Google user data
  useEffect(() => {
    if (googleUser) {
      // Split display name into first and last name
      const nameParts = googleUser.displayName?.split(' ') || [];
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Pre-fill form fields
      setValue('first_name', firstName);
      setValue('last_name', lastName);
      setValue('email', googleUser.email || '');
      setValue('username', googleUser.email?.split('@')[0] || '');

      // Set avatar if available
      if (googleUser.photoURL) {
        setAvatarPreview(googleUser.photoURL);
      }
    }
  }, [googleUser, setValue]);

  /* ── image handling ── */
  const processImage = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setAvatarFile(file);
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
  }, []);

  const handleFileChange = (e) => processImage(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    processImage(e.dataTransfer.files[0]);
  };

  const removeAvatar = () => {
    setAvatarPreview(null);
    setAvatarFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data) => {
    setSuccessMsg("");
    setLoading(true);

    let profileUrl = "";

    if (avatarFile) {
      const formData = new FormData();
      formData.append("file", avatarFile);

      const uploadRes = await uploadFile(formData).unwrap();

      profileUrl =
        uploadRes?.files?.[0]?.url || uploadRes?.data?.files?.[0]?.url || null;

      console.log("Sending profile:", profileUrl);
    } else if (googleUser?.photoURL && !avatarFile) {
      // Use Google profile photo if no custom avatar uploaded
      profileUrl = googleUser.photoURL;
    }

    // For Google users, generate a secure password
    const finalPassword = googleUser ? `GoogleAuth_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : data.password;

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: finalPassword,
      confirm_password: finalPassword,
      about_me: data.about_me,
      profile: profileUrl,
    };

    try {
      const result = await register(payload).unwrap();
      setShowAlert(true);
      // alert("Account created successfully!");
      console.log(" User Info:", result?.data);
      //  Redirect to login
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 8000);
    } catch (err) {
      console.error("Registration error:", err);

      setShowError(true);

      if (err?.data) {
        const firstError = Object.values(err.data)[0];

        setErrorMessage(
          Array.isArray(firstError) ? firstError[0] : firstError
        );

        Object.entries(err.data).forEach(([key, val]) => {
          setError(key, {
            message: Array.isArray(val) ? val[0] : val,
          });
        });
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }

      // auto hide
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  {
    isLoading && (
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-lg">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  /* ── UI ── */
  return (
    <div className="w-full sm:my-5  sm:px-2 md:h-screen flex items-center justify-center container mx-auto">
      {showAlert && (
        <div className="fixed bottom-5 right-5 z-50 
                   p-4 rounded-lg shadow-sm
                   bg-green-100/80 border border-cool-sky   text-green-700 animate-slide-in">
          ✅ Account created successfully
        </div>
      )}
      {showError && (
        <div className="fixed bottom-5 right-5 z-50 
                  p-4 rounded-lg shadow-sm
                  bg-red-100/80 border border-red-300 
                  text-red-700 animate-slide-in">
          ❌ {errorMessage || "Registration failed. Please try again."}
        </div>
      )}
      <div className="grid place-content-center md:grid-cols-2 items-center border border-cool-sky shadow-sm rounded-[20px] overflow-hidden bg-white">
        <div>
          <div className="text-center justify-center items-center flex flex-col gap-4">
            <h1 className=" font-bold mt-4 text-[#1e2e3e]">Register</h1>
            <p className="text-gray-500 text-xl">
              Join SkillShow and showcase <br /> what you're made of
            </p>

          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-[550px]" src={img} alt="" />
            <div

              className="w-100 mx-auto  h-0.5 bg-primary "
            /></div>
        </div>

        <div className="w-full max-sm:p-6  bg-white backdrop-blur-md border-l border-gray-300 sm:p-6">
          {/* Header */}


          {successMsg && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-6 text-sm">
              {successMsg}
            </div>
          )}

          {googleMessage && (
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mb-6 text-sm">
              {googleMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Avatar Upload */}
            <div className="mb-6 text-center">
              <label className="block text-sm font-semibold text-[#1e2e3e] mb-3">
                Profile Photo
              </label>

              <div
                className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-1 border-[#1e2e3e]/20 cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                {avatarPreview ? (
                  <>
                    <img
                      src={avatarPreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="bg-white text-[#1e2e3e] px-3 py-1 rounded-md text-sm font-medium"
                      >
                        Change
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeAvatar();
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    Upload Photo
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <FieldError message={errors.profile?.message} />
            </div>

            {/* Names */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="First Name"
                  {...field("first_name", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 letters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Only letters are allowed",
                    },
                  })}
                  className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
                />
                <FieldError message={errors.first_name?.message} />
              </div>

              <div>
                <input
                  placeholder="Last Name"
                  {...field("last_name", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 letters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Only letters are allowed",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
                />
                <FieldError message={errors.last_name?.message} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Username */}
              <div>
                <input
                  placeholder="Username"
                  {...field("username", { required: "Username is required" })}
                  className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
                />
                <FieldError message={errors.username?.message} />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                {...field("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                  setValueAs: (value) => value.trim().toLowerCase(),
                })}
                className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
              /></div>

            <FieldError message={errors.email?.message} />
            {/* About Me */}
            <div>
              <textarea
                rows={3}
                placeholder="Tell people about yourself..."
                {...field("about_me")}
                className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
              />
              <FieldError message={errors.about_me?.message} />
            </div>

            {/* Password - Only show for non-Google users */}
            {!googleUser && (
              <>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    {...field("password", {
                      required: !googleUser ? "Password is required" : false,
                      minLength: !googleUser ? {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      } : undefined
                    })}
                    className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
                  />
                  <FieldError message={errors.password?.message} />
                </div>

                {/* Confirm Password */}
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    {...field("confirm_password", {
                      required: !googleUser ? "Confirm your password" : false,
                      validate: !googleUser ? (v) => v === password || "Passwords do not match" : undefined,
                    })}
                    className="w-full border border-gray-300  rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e2e3e] outline-none"
                  />
                  <FieldError message={errors.confirm_password?.message} />
                </div>
              </>
            )}

            {/* API error */}
            {apiError && !Object.keys(errors).length && (
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
                Registration failed. Please try again.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-[#1e2e3e] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-5 h-5  border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <NavLink to="/login" className="text-[#1e2e3e] font-semibold">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
