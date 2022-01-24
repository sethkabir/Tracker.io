import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useState, useRef, useEffect } from "react";

const UserProfile = () => {
  const [image, setImage] = useState(null); //contains the image dataurl
  const [preview, setPreview] = useState(null); //contains the actual image
  const fileInputRef = useRef(null); //used to handle change events of button and link to the input field


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
        <img src={preview} alt="" className="h-44 w-44 rounded-full" />
      ) : (
        <UserCircleIcon className="h-44 w-44 rounded-full" />
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
          className="place-self-end"
        >
          <PlusCircleIcon className="h-10 w-10 " />
        </button>
      </form>

      {/* <PlusCircleIcon className="absolute h-10 w-10 place-self-end ml-36 "/> */}
    </div>
  );
}

const Test = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default Test;
