import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";


const Profile = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  const [username, setUsername] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Profile Page | Workora";
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen px-4 text-center">
        <p className="text-lg text-gray-600">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  const handleEditProfile = () => {
    Swal.fire({
      title: "Edit Profile",
      html: `
        <input type="text" id="swal-username" class="swal2-input" placeholder="Username" value="${username}">
        <input type="text" id="swal-photo" class="swal2-input" placeholder="Photo URL" value="${photoURL}">
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      focusConfirm: false,
      preConfirm: () => {
        const username = document.getElementById("swal-username").value;
        const photoURL = document.getElementById("swal-photo").value;

        if (!username || !photoURL) {
          Swal.showValidationMessage(
            `Please enter both username and photo URL`
          );
        }

        return { username, photoURL };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { username, photoURL } = result.value;
        const auth = getAuth();

        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoURL,
        })
          .then(() => {
            setUsername(username);
            setPhotoURL(photoURL);
            Swal.fire("Updated!", "Your profile has been updated.", "success");
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire("Error", "Failed to update profile.", "error");
          });
      }
    });
  };

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        Swal.fire(
          "Signed out",
          "You have been signed out successfully",
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", "Sign out failed", "error");
        console.error(err);
      });
  };


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-base-200 shadow-lg rounded-xl p-6 sm:p-10 text-center">
        <div className="flex flex-col items-center">
          <img
            src={photoURL || "https://i.ibb.co/2kR5zq0/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-success shadow-md"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-base-content">
            {username || "Anonymous User"}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 break-words">
            Email: {user.email}
          </p>
          {user.providerData?.length > 0 && (
            <p className="mt-1 text-xs text-gray-500">
              Logged in via: {user.providerData[0].providerId}
            </p>
          )}
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-md sm:text-lg font-semibold mb-4 text-base-content">
            Account Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <span className="font-semibold text-gray-600">Display Name:</span>{" "}
              {user.displayName || "N/A"}
            </div>
            <div>
              <span className="font-semibold text-gray-600">Email:</span>{" "}
              {user.email || "N/A"}
            </div>
            <div>
              <span className="font-semibold text-gray-600">UID:</span>{" "}
              {user.uid}
            </div>
            <div>
              <span className="font-semibold text-gray-600">
                Email Verified:
              </span>{" "}
              {user.emailVerified ? "Yes" : "No"}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleEditProfile}
            className="btn btn-outline btn-success w-full sm:w-auto"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-error w-full sm:w-auto block sm:hidden"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
  