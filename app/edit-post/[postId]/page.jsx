"use client";

import Form from "@components/Form";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Error from "@components/Error";
import { useSession } from "next-auth/react";

const EditPosts = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const getParam = useParams();
  const { postId } = getParam;
  const [posts, setPosts] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPostByPostId = async () => {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "GET",
      });

      if (!response.ok) {
        router.push("/");
      }
      const postIdInfo = await response.json();
      setPosts({ title: postIdInfo.title, content: postIdInfo.content });
    };

    if (postId) {
      getPostByPostId();
    }
  }, [postId]);

  const editAndUpdatePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const updatedPost = await fetch(`/api/posts/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: posts.title,
          content: posts.content,
        }),
      });

      if (updatedPost.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {session?.user?.id ? (
        <Form
          type="Edit"
          posts={posts}
          setPost={setPosts}
          isLoading={isLoading}
          handleSubmit={editAndUpdatePost}
        />
      ) : (
        <Error />
      )}
    </>
  );
};

export default EditPosts;
