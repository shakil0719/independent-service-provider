import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateProfile } from "firebase/auth";
import React from "react";
import facelogo from "../../image/sociallogo/PinClipart.com_dam-clipart_4952341.png";
import gitlogo from "../../image/sociallogo/PinClipart.com_mongoose-clip-art_2314292.png";
import glogo from "../../image/sociallogo/PinClipart.com_google-clip-art-free_5300214.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, Facebookuser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  const handleSignInWithGithub = () => {
    signInWithGithub();
  };
  const handleSignInWithFacebook = () => {
    signInWithFacebook();
  };
  if (user || Facebookuser || gitUser) {
    navigate("/home");
  }

  let errorElement;
  if (error || gitError || facebookError) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {gitError?.message}
        {facebookError?.message}
      </p>
    );
  }
  return (
    <div>
      {errorElement}
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>

      <div>
        <button
          onClick={handleSignInWithGoogle}
          className="my-2 btn bg-black text-white w-50 d-block mx-auto"
        >
          <img
            style={{ width: "30px", height: "30px", marginTop: "12px" }}
            src={glogo}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={handleSignInWithFacebook}
          className="my-2 btn bg-black text-white w-50 d-block mx-auto "
        >
          <img
            style={{ width: "30px", height: "30px", marginTop: "5px" }}
            src={facelogo}
            alt=""
          />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={handleSignInWithGithub}
          className="my-2 btn bg-black text-white w-50 d-block mx-auto "
        >
          <img
            style={{ width: "30px", height: "30px", marginTop: "12px" }}
            src={gitlogo}
            alt=""
          />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
