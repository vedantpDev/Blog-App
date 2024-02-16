import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

// $id: appwrite syntax
const PostCard = ({ $id, title, featuredImg }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.previewFile(featuredImg)}
            alt={title}
            className="rounded-2xl"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-300">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
