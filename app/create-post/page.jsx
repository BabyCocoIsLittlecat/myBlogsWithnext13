"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Error from "@components/Error";

const CreatePosts = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/new/posts", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          title: posts.title,
          content: posts.content,
        }),
      });

      if (response.ok) {
        setPosts({ title: "", content: "" });
        router.push("/");
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
          type="Create"
          posts={posts}
          setPost={setPosts}
          isLoading={isLoading}
          handleSubmit={createPost}
        />
      ) : (
        <Error />
      )}
    </>
  );
};

export default CreatePosts;
