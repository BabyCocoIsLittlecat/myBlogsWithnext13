"use client";

import { useSession } from "next-auth/react";
import ImageIcon from "@ui/Image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Error from "@components/Error";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllPostsByUserId = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/posts`, {
          method: "GET",
        });
        const getAllPosts = await response.json();
        setDisplayBlogs(getAllPosts);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user.id) {
      fetchAllPostsByUserId();
    }
  }, [session]);

  const onEditPost = (blogId) => {
    router.push(`edit-post/${blogId}`);
  };

  const onDeletePost = async (blogId) => {
    const confirmDelete = confirm("Are you sure you want to delete this post!");

    if (confirmDelete) {
      await fetch(`/api/posts/${blogId}`, {
        method: "DELETE",
      });

      setDisplayBlogs((currentPost) =>
        currentPost.filter((post) => post._id !== blogId)
      );
    }
  };

  return (
    <section className="section col">
      <div className="card max-w-[25rem] p-3">
        <h1 className="text-des">profile</h1>
        <hr className="underline gradient-pink-bg" />
        <span> {isLoading && "Loading....."}</span>
        {session?.user && (
          <div className="btn my-2 leading-10 text-base">
            <ImageIcon
              imgUrl={session?.user.image}
              altName={session?.user.name}
            />
            <h2>author : {session?.user.name}</h2>
            <h2>Email : {session?.user.email}</h2>
          </div>
        )}
      </div>
      <h1 className="text-card mt-4">
        {session?.user && displayBlogs.length > 0
          ? "All your Posts"
          : "Not found!"}
      </h1>
      <div className="display_posts w-full">
        {session?.user &&
          displayBlogs.map((blog) => (
            <div
              className="btn card card_posts"
              key={blog._id}
            >
              <h1 className="text-card bg-[#e8e1f79e] rounded break-words">{blog.title}</h1>
              <hr className="underline gradient-green-bg" />
              <div className="min-h-[9rem] bg-[#88b5fe1c] p-3 break-words">
                <h3>{blog.content}</h3>
              </div>
              <hr className="underline gradient-pink-bg" />
              <div className="row my-2">
                <button
                  type="button"
                  className="btn btn-black btn-action-d"
                  onClick={() => onDeletePost(blog._id)}
                >
                  delete
                </button>
                <button
                  type="button"
                  className="btn btn-white btn-action"
                  onClick={() => onEditPost(blog._id)}
                >
                  edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Profile;
