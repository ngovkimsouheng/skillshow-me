import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/firebase-config";
import { useNavigate } from "react-router";
export default function SignInWithGoogle() {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("✅ Login Success");
      console.log("Name:", user.displayName);
      console.log("Email:", user.email);
      console.log("Photo:", user.photoURL);
      console.log("UID:", user.uid);
      navigate("/");
    } catch (error) {
      console.error("❌ Login Failed:", error.code);
      console.error(error.message);
    }
  };

  return (
    <div>
      <img
        onClick={handleGoogleLogin}
        className="w-50 mx-auto cursor-pointer"
        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
        alt="Sign in with Google"
      />
    </div>
  );
}
