import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import { PostCard, Container } from "../components";

const AllPosts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  service
    .getAllPost()
    .then((posts) => {
      if (posts) {
        setPost(posts.documents);
      }
    })
    .catch((err) => console.log(err));
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
