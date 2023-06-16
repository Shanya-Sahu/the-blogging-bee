import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

export default function Blogs() {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="mx-auto lg:px-40 py-36 px-5">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="mx-auto py-5">
          <p className="text-center">No Post Found!</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-[#65A3CB] text-xl ">{post.title}</p>
            <p>
              By <span className="font-bold">{post.author} </span>on{" "}
              <span className="font-bold">{post.category}</span>
            </p>
            <p>
              Posted on <span className="font-bold">{post.date}</span>
            </p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return (
                  <span key={index}>
                    {<span className="font-bold text-[#65A3CB]">#{tag} </span>}
                  </span>
                );
              })}
            </div>{" "}
            <br /> <hr /> <br />
          </div>
        ))
      )}
    </div>
  );
}
