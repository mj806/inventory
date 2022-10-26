import React, { useState } from "react";
import "./Styles/ComicsPage.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Comic from "./Default/defComic1";
import axios from "axios";

export const ComicsPage = () => {
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=995cdcc998a8b6265a8554e4aed0ba4b&hash=b28850834811da2f6811ae2607f2b8bb"
  );
  const [item, setItem] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetch();
  }, [url]);
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
    >
      <section className="comicsSec">
        <div className="HeaderSec">
          <h1>A look at our comics from marvel™</h1>
          <p>
            pick and select from our range of comic book runs and random issues
          </p>
          <form className="searchBox">
            <input
              type="search"
              placeholder="Search a comic"
              className="comic-search-bar"
              required
            />
          </form>
        </div>
        <div className="comic-content">
          {!item ? <p>Not Found</p> : <Comic data={item} />}
        </div>
      </section>
    </motion.div>
  );
};
export default ComicsPage;
