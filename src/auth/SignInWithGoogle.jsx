import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/firebase-config";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../api/authSlice";

export default function SignInWithGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("✅ Firebase Login Success");
      console.log("Name:", user.displayName);
      console.log("Email:", user.email);
      console.log("Photo:", user.photoURL);
      console.log("UID:", user.uid);

      // Since your API doesn't have Google login endpoint yet,
      // we'll try to login with a special approach
      // You can modify this to match your backend logic

      const loginData = {
        email: user.email,
        password: "google_auth_" + user.uid.substring(0, 8), // Temporary password pattern
      };

      console.log("Attempting backend login with:", loginData);

      try {
        const response = await login(loginData).unwrap();

        console.log("✅ Backend Login Success:", response);

        // Extract token properly (adjust based on your API response structure)
        const token = response?.data?.access_token || response?.access_token || response?.token;

        if (token) {
          // Store credentials
          dispatch(setCredentials({
            token: token,
            user: response?.data?.user || response?.user || {
              id: user.uid,
              username: user.displayName || user.email.split('@')[0],
              email: user.email,
              profile: user.photoURL,
              role: user.email === 'adminskillshow@gmail.com' ? 'admin' : 'user'
            }
          }));

          // Store token in localStorage
          localStorage.setItem("token", token);

          navigate("/dashboard");
        } else {
          throw new Error("No token received from backend");
        }

      } catch (backendError) {
        console.error("❌ Backend login failed:", backendError);
        console.error("Full error object:", JSON.stringify(backendError, null, 2));

        // Alternative: Store Google user info and redirect to registration
        const googleUserInfo = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
          uid: user.uid,
          expectedPassword: "google_auth_" + user.uid.substring(0, 8)
        };

        // Store in localStorage for registration page
        localStorage.setItem("googleUserInfo", JSON.stringify(googleUserInfo));

        // Show options to user
        const choice = confirm(
          `Google login successful!\n\nEmail: ${user.email}\n\nBackend login failed because no account exists with this email.\n\nChoose:\n- OK: Go to registration page\n- Cancel: Show login credentials to use`
        );

        if (choice) {
          // Redirect to registration with Google info
          navigate("/register", {
            state: {
              googleUser: googleUserInfo,
              message: "Complete your registration with Google account"
            }
          });
        } else {
          // Show them the credentials they need
          alert(`To login with this Google account, use these credentials:\n\nEmail: ${user.email}\nPassword: ${googleUserInfo.expectedPassword}\n\nOr register first, then login normally.`);
        }
      }

    } catch (error) {
      console.error("❌ Firebase Login Failed:", error);
      alert(`Google login failed: ${error.message}`);
    }
  };

  return (
    <div>
      <img
        onClick={handleGoogleLogin}
        className={`w-50 mx-auto cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
        alt="Sign in with Google"
        disabled={isLoading}
      />
      {isLoading && (
        <p className="text-center mt-2 text-sm text-gray-600">Signing in...</p>
      )}
    </div>
  );
}
