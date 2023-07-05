/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import EasyCrop from "./EasyCrop";
import { createPortal } from "react-dom";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePicture } from "../services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setUserInfo } from "../redux/reducers/userReducers";

const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { userInfo } = useSelector((state) => state.user);

  const { mutate } = useMutation({
    mutationFn: ({ token, formData }) => {
      return updateProfilePicture({
        token,
        formData,
      });
    },
    onSuccess: (data) => {
      dispatch(setUserInfo(data));
      setOpenCrop(false);
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile Picture is Deleted");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto({ url: URL.createObjectURL(file), file });
    setOpenCrop(true);
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your profile picture?")) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", undefined);

        mutate({ token: userInfo.token, formData });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      {openCrop &&
        createPortal(
          <EasyCrop photo={photo} setOpenCrop={setOpenCrop} />,
          document.getElementById("portal")
        )}
      <div className="w-full flex items-center gap-x-4">
        <div className="relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden">
          <label
            htmlFor="profilePicture"
            className=" cursor-pointer absolute inset-0 rounded-full bg-transparent"
          >
            {avatar ? (
              <img
                src={import.meta.env.VITE_UPLOAD_FOLDER_BASE_URL + avatar}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
                <HiOutlineCamera className="w-7 h-auto text-primary" />
              </div>
            )}
          </label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            className=" sr-only"
            onChange={handleFileChange}
          />
        </div>
        <button
          onClick={handleDeleteImage}
          type="button"
          className="border border-red-500 rounded-lg px-4 py-2 text-red-500"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ProfilePicture;
