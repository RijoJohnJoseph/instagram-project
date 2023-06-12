import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLiked, setIsCommentLiked] = useState();
  const handleLikeComment = () => {
    setIsCommentLiked(!isCommentLiked);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/02/15/19/21/hands-1201826_640.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="space-x-3 py-3">
              <span className=" font-semibold">username</span>
              <span>Love this photo!!</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-50 pt-1">
              <span>1 minute ago</span>
              <span>37 likes</span>
            </div>
          </div>
        </div>

        {isCommentLiked ? (
          <AiFillHeart
            onClick={handleLikeComment}
            className="text-xs hover:opacity-50 cursor-pointer text-red-700"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleLikeComment}
            className="text-xs hover:opacity-50 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
