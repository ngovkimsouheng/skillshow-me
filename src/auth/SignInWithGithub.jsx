import React, { useEffect, useState } from "react";
import {
  signInWithRedirect,
  getRedirectResult,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, githubProvider } from "./firebase/firebase-config";
import { useNavigate } from "react-router";

export default function SignInWithGithub() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  /* ======================================================
     HANDLE GITHUB BUTTON CLICK
  ====================================================== */
  const handleGithubLogin = async () => {
    console.log("👉 GitHub button clicked");

    try {
      setLoading(true);

      console.log("Starting GitHub redirect...");

      await signInWithRedirect(auth, githubProvider);
    } catch (error) {
      console.error("Redirect Error:", error);
    }
  };

  /* ======================================================
     HANDLE REDIRECT RESULT (AFTER GOOGLE/GITHUB LOGIN)
  ====================================================== */
  useEffect(() => {
    const handleRedirect = async () => {
      console.log("🔥 Checking redirect result...");

      try {
        const result = await getRedirectResult(auth);

        console.log("Redirect result:", result);

        if (!result) {
          console.log("❌ No redirect result.");
          return;
        }

        console.log("✅ Redirect success");
        console.log("User:", result.user);

        const pendingCredential = JSON.parse(
          localStorage.getItem("pendingCredential"),
        );

        if (pendingCredential) {
          console.log("🔗 Linking credential...");

          await linkWithCredential(result.user, pendingCredential);

          localStorage.removeItem("pendingCredential");

          console.log("🔥 Linked successfully!");
        }

        navigate("/");
      } catch (error) {
        console.error("Redirect Error:", error);
      }
    };

    // Wait a little before checking redirect
    setTimeout(() => {
      handleRedirect();
    }, 1000);
  }, []);

  /* ======================================================
     RETURN UI
  ====================================================== */
  return (
    <div>
      <img
        onClick={handleGithubLogin}
        className="w-50 mx-auto cursor-pointer"
        src="https://cdn.sanity.io/images/061o94fn/production/4e3e8e3c202274f605ddace0cc0b9841baf0efc5-698x264.jpg"
        alt="Sign in with GitHub"
      />

      {loading && <p>Redirecting to GitHub...</p>}
    </div>
  );
}
