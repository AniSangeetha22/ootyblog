import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [userList, setUserList] = useState([]);
  const { user } = useAuth();
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(blogList);

      setBlogs(blogList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(userList);

        setUserList(userList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getUsers();
  }, []);

  const handleCreateBlog = () => {
    {
      isAuth ? navigate("/createblog") : alert("Please Login ");
    }
  };

  async function handleDelete(id) {
    const document = doc(db, "blogs", id);
    await deleteDoc(document);
    getBlogs();
    navigate("/blog");
  }

  return (
    <div className=" w-full flex flex-col justify-center items-center ">
      <h2 className=" text-center text-4xl font-bold py-4 mt-32 text-green-900">
        Blog Posts
      </h2>
      <p className=" text-center text-xl font-medium py-2 mt-1 text-green-900">
        {" "}
        Here you can share your Ooty Vacation
      </p>
      {blogs.map((blog) => (
        <div
          className=" w-[70%] flex flex-col justify-center mt-8 border-2 p-4 rounded-md mb-2 border-lime-900"
          key={blog.id}
        >
          <h3 className="text-left text-xl font-medium mb-1 text-[#6e4724]">
            {blog.title}
          </h3>
          <p className="text-lg font-normal mb-2  text-gray-900">
            {blog.description}
          </p>
          <p className="flex flex-row justify-between">
            <span className="text-lg font-medium text-[#6e4724]">
              {blog.author.name}
            </span>
            {isAuth && blog.author.id === auth.currentUser.uid && (
              <span
                onClick={() => handleDelete(blog.id)}
                className="px-2 text-lg font-medium flex items-center bg-[#835227]  text-white rounded-md cursor-pointer "
              >
                <RiDeleteBin6Line />
              </span>
            )}
          </p>
        </div>
      ))}
      <button
        className="px-8 py-2 text-lg font-medium bg-green-900 mb-12 mt-4 text-white rounded-md cursor-pointer "
        onClick={handleCreateBlog}
      >
        Create Blog
      </button>
    </div>
  );
};

export default Blog;
