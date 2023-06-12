import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const [isPostLiked, setIsPostLiked] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOpenCommentModal = () => {
    onOpen()
  };

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center  w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900_640.jpg"
              alt=""
            />
            <div className="pl-2">
              <p className=" flex font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  {" "}
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2016/11/29/12/18/camera-1869430_640.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-2">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-700"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 Likes</p>
          <p className="opacity-50 py-2 cursor-pointer">View All 10 Comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex space-x-3 w-full px-5 items-center">
            <BsEmojiSmile />
            <input
              className="commentInput"
              type="text"
              placeholder="Add a Comment.."
            />
          </div>
        </div>
      </div>
      <CommentModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
