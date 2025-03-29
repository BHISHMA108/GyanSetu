import SpotlightCard from "../Components/SpotlightCard/SpotlightCard.jsx"
import profImg from "../Components/Assets/conquor.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (

    <div>
              <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
              &nbsp;<p onClick={()=>navigate("/main")} className=" text-blue-500">Go back</p></span>

    <div className=" flex justify-center items-center h-screen bg-black-900">
      <SpotlightCard
        className=" position-absolute -translate-y-[43px] custom-spotlight-card rounded-lg shadow-lg p-6 w-[500px]"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        {/* Main container */}
        <div className=" -translate-y-[43px] text-white space-y-6">
          {/* Username & Profile Image in Horizontal Layout */}
          <div style={{marginBottom: "5px" , display: "flex", flexDirection: "row", alignItems: "center"}} className= "flex flex-row" aria-orientation="vertical">
            {/* Username Section */}
            <div style={{marginTop: "10px",display: "flex", flexDirection: "column", marginRight: "10px"}} className="flex flex-col">
              <h1 id="username" className="text-xl font-semibold">Username</h1>
              <p id="name" className="text-lg text-gray-300">Bhieeeeeeeeshma_108</p>
            </div>
            {/* Profile Image (Right Side, Bigger) */}
            <img
              src={profImg}
              alt="Profile"
              className="profile-img w-32 h-32 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>

          {/* Religion Section */}
          <div style={{marginBottom: "10px"}} className="text-left">
            <h1 id="username" className="text-xl font-semibold">Religion</h1>
            <p className="text-lg text-gray-300">Hindu</p>
          </div>

          {/* Bio Section (Full Width) */}
          <div className="text-left">
            <h1 id="username" className="text-xl font-semibold">Bio</h1>
            <p className="text-gray-300">
              I am a software engineer with 5 years of experience in the field.
              I am passionate about technology and always eager to learn new things.
            </p>
          </div>

          {/* Edit Profile Button (Aligned Properly Inside the Card) */}
          <div className="flex justify-start">
            <button style={{backgroundColor: "#000", color: "#fff" , borderRadius: "10px" }} className=" -translate-y-[21px] px-6 py-2">
              Edit Profile
            </button>
          </div>
        </div>
      </SpotlightCard>
    </div>
    </div>
  );
}

export default Profile;