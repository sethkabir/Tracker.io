import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  //get user's current profile info
  const [profile, setProfile] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user").then((response) => {
      setProfile(response.data);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
      setContact(response.data.profile.contact);
      setAddress(response.data.profile.address);
    });
  }, []);

  const navigate = useNavigate();

  async function updateProfile() {
    let item = {
      username: `${profile.username}`,
      first_name: `${first_name}`,
      last_name: `${last_name}`,
      email: `${email}`,
      profile: {
        contact: `${contact}`,
        address: `${address}`,
      },
    };
    await axios
      .put("http://127.0.0.1:8080/api/user/update-profile", item)
      .then((res) => {
        if (res) {
          navigate("/dashboard/profile/showProfile");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="">
      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>First Name</div>
        <input
          type="text"
          value={first_name}
          className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Last Name</div>
        <input
          type="text"
          value={last_name}
          className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Email Id</div>
        <input
          type="text"
          value={email}
          className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Id"
        />
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Contact</div>
        <input
          type="text"
          value={contact}
          className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3"
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
        />
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <input
          type="text"
          value={address}
          className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
      </span>

      <div>
        <button
          onClick={updateProfile}
          className="rounded-lg ml-14 bg-blue-200 hover:bg-blue-600 hover:text-white px-5 h-12"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
