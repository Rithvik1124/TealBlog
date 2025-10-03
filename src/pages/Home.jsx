import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import Subscribe from "../components/Subscribe";
import FeaturedPost from "../components/FeaturedPost";
import LatestPost from "../components/LatestPost";
const Home = () => {
  return (
    <>
      <main className="px-24 mt-5 max-sm:px-5">
        <section className="hero flex justify-between gap-4 items-center max-md:flex-col">
          <div className="content flex flex-col gap-6 w-full">
            <h1 className="text-slate-800 text-6xl font-bold">
              Title
            </h1>
            <p className="text-slate-800 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat eius deserunt ducimus ipsa animi quae repellat asperiores, neque distinctio. Rem quis tempora aspernatur odio? Fugiat voluptas deserunt similique soluta!
            </p>
            
            <div className="socialLinkContainer flex gap-3 items-center">
              <h5>Follow:</h5>
              <ul className="flex gap-3 text-slate-800">
                <li>
                  <Link>
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link>
                    <GitHubIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </section>
        <FeaturedPost />
        <LatestPost />
      </main>
    </>
  );
};

export default Home;
