import AnimatedPage from "../AnimatedPage";
import pic1 from "../picture/pic1.jpg";
import pic2 from "../picture/wallpaper1.jpg";
import pic3 from "../picture/wallpaper2.jpg";
import pic4 from "../picture/wallpaper3.jpg";
import banner from "../picture/about_us_pic.jpg";
import "./AboutUs.css";
import { color } from "framer-motion";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const groupMembers = [
  {
    name: "Sahassawat Suksusiang",
    picture: pic1,
    email: "i.morkey@msn.com",
    stdID: 6301012620197,
    year: 1,
  },
  {
    name: "Sahassawat Suksusiang",
    picture: pic1,
    email: "i.morkey@msn.com",
    stdID: 6301012620197,
    year: 1,
  },
  {
    name: "AB1 CDmorkey morkey",
    picture: pic2,
  },
  {
    name: "AB2 CD",
    picture: pic3,
  },
  {
    name: "AB CD3",
    picture: pic4,
  },
];

const AboutUs = () => {
  return (
    <AnimatedPage>
      <img src={banner} alt="about us banner" className="banner" />
      <h1 className="center-about">About Us</h1>
      <div className="group-members">
        {groupMembers.map((member, index) => (
          <div key={index}>
            <Box className="info-box">
              <div className="info-frame">
                <Box className="img-box">
                  <img src={member.picture} alt={member.name} className="pic" />
                </Box>
                <div className="info-area">
                  <p className="info">Name : {member.name}</p>
                  <p className="info">Email : {member.email}</p>
                  <p className="info">StudentID : {member.stdID}</p>
                  <p className="info">Year : {member.year}</p>
                </div>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default AboutUs;
