import { Link } from "react-router-dom";
import axios from "axios";

import AnimatedPage from "../AnimatedPage";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../Jobs.css";

const Jobs = () => {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowposts] = useState([]);
  const [input, setInput] = useState("");
  const [showButton, setShowButton] = useState(false);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/posts`)
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
        setShowposts(response.data);
      })
      .catch((err) => alert(err));
  };

  // use everytime input == ""
  useEffect(() => {
    fetchData();
  }, [input == ""]);

  const handleSearch = () => {
    // in the case of have value
    console.log(input);
    // condition that add the post that parallel with keyword to Showposts list
    if (posts != null) {
      const Datalength = posts.length;
      let nodata = true; //

      for (let i = 0; i < Datalength; i++) {
        // check if input include some word in data
        if (
          posts[i].title.toLowerCase().includes(input.toLowerCase()) ||
          posts[i].details.toLowerCase().includes(input.toLowerCase()) ||
          posts[i].author.toLowerCase().includes(input.toLowerCase())
        ) {
          // work on the first time setShowdata
          if (nodata) {
            // console.log("trips: " + nodata);
            setShowposts([posts[i]]);
            nodata = false;
          } else {
            // work on the second of time setShowdata
            setShowposts((prev) => [...prev, posts[i]]);
          }
        }
        if (nodata) {
          // if input not include any word in data
          setShowposts();
          console.log(showPosts);
        }
      }
    }
  };

  // use everytime input was changed
  useEffect(() => {
    handleSearch();
  }, [input]);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <AnimatedPage>
      <div className="search__container">
        <input
          id="keyword"
          name="keyword"
          className="search__input"
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>
      {showPosts ? (
        showPosts.map((post, index) => (
          <div className="card postCard" key={index}>
            <div className="card-title">
              <Link to={`/Jobs/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
            </div>
            <div className="card-text mb-2">
              {post.details.substring(0, 300)}
              {/* <div className="pt-3">{post.details.info2.substring(0, 300)}</div> */}
              {/* <div className="pt-3">{post.details.info2.substring(0, 300)}</div> */}
            </div>
            <div className="card-text mb-2">
              <div className="badge bg-primary text-wrap">
                ตำแหน่ง : {post.role}
              </div>
            </div>
            <div className="card-text">
              <p className="text-muted pt-2">
                ผู้โพสต์: {post.author} , เผยแพร่:{" "}
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
            {showButton && (
              <button
                className="btn btn-floating btn-lg rounded-circle "
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faArrowUp} className="icon" />
              </button>
            )}
          </div>
        ))
      ) : (
        <>
          <div className="notfound">
            <center>
              <h2>ไม่มีโพสต์ที่คุณหาโดยคำว่า</h2>
              <h3>"{input}"</h3>
            </center>
          </div>
        </>
      )}
    </AnimatedPage>
  );
};

export default Jobs;
