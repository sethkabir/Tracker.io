import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const UserProfilePic = (props) => {
  const [image, setImage] = useState(null); //contains the image dataurl
  const [preview, setPreview] = useState(null); //contains the actual image
  const fileInputRef = useRef(null); //used to handle change events of button and link to the input field

  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user").then((response) => {
      setProfile(response.data);
      if(response.data.profile.picture) {
        setPreview(response.data.profile.picture)
      }
    });
  }, []);

  useEffect(() => {
    if (image) {
      let item = new FormData()
	  item.append("username", profile.username)
	  item.append("picture", image)
      console.log(item)
      axios
        .put("http://127.0.0.1:8080/api/user/update-profile-image", item, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  // async function storeImage(x){
  //   let item = {username ,x};
  //   console.log("2");
  //   console.log(username);
  //   console.log(x);

  // await axios
  //   .put("http://127.0.0.1:8080/api/user/update-profile", item)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.error(err));
  // }

  //comes into action whenever there is a change in the "image" state and invokes setPreview
  //FileReader is a default javascript function
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className="flex">
      {preview ? (
        <img
          src={preview}
          alt=""
          className="h-44 w-44 rounded-full bg-red-500 m-3"
        />
      ) : (
        <UserCircleIcon className="h-44 w-44 rounded-full " />
      )}
      <form className="flex">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click();
          }}
          className="flex"
        >
          <PlusCircleIcon className="h-10 w-10 hover:rotate-90 transition-all duration-300 place-self-center" />
        </button>
      </form>

      {/* <PlusCircleIcon className="absolute h-10 w-10 place-self-end ml-36 "/> */}
    </div>
  );
};

export default UserProfilePic;
