import React from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const CreateBlog = () => {
  const navigate = useNavigate();
  const blogRef = collection(db, "blogs");

  async function handleCreatePost(event) {
    event.preventDefault();

    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(blogRef, document);
    navigate("/blog");
  }

  return (
    <div className=" w-[75%] text-green-900 flex flex-col  gap-4 items-center justify-center  ">
      <h1 className="p-4 mt-36 font-bold text-2xl">Add New Blog</h1>
      <form
        onSubmit={handleCreatePost}
        className=" flex flex-col  gap-4 items-start justify-center"
      >
        <input
          className="w-72 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
          type="text"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />

        <textarea
          className="w-96 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
          name="description"
          rows="10"
        ></textarea>

        <button
          className="px-8 py-2 text-lg font-medium bg-green-900 mb-12 mt-4 text-white rounded-md cursor-pointer "
          type="submit"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
