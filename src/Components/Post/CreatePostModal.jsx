import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostModal.css";
import {GrEmoji} from "react-icons/gr"
import {GoLocation} from "react-icons/go"

const CreatePostModal = ({ onClose, isOpen }) => {
  const [IsDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption]=useState("");


  const handleCaptionChange=(e)=>{
    setCaption(e.target.value)
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.DataTransfer.file[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.DataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select an image or a video");
    }
  };

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post </p>
            <Button
              className=""
              variant={"ghost"}
              size="sm"
              colorScheme={"blue"}
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="mb-5 flex">
              <div className="w-[50%]">
                {!file && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className="drag-drop h-full"
                  >
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photos Or Video Here</p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select From Computer
                    </label>
                    <input
                      className="fileInput"
                      type="file"
                      id="file-upload"
                      accept="image/*, video/*"
                      onChange={handleOnChange}
                    />
                  </div>
                )}

                {file && (
                  <img
                    className="max-h-full"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                )}
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="w-[50%] ">
                <div className="flex px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_640.jpg"
                    alt=""
                  />
                  <p className="ml-4 font-semibold">username</p>
                </div>
                <div className="px-2">
                  <textarea
                  placeholder="Write a caption"
                    className="captionInput"
                    name="caption"
                    rows="8"
                    onChange={handleCaptionChange}
                  ></textarea>
                </div>
                <div className="flex justify-between px-2"><GrEmoji/>
                <p className="opacity-70" >{caption?.length} /2,200</p>
                </div>
                <hr />
                <div className="px-2 justify-between items-center flex">
                  <input className="locationInput" type="text" placeholder="location" name="location" />
                  <GoLocation/>

                </div>
                <hr />
                  

              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;