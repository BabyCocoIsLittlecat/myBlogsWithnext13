"use client";

import { useEffect, useState } from "react";
import ImageIcon from "@ui/Image";
import Search from "@components/search";

const Feed = () => {
  const [updateNewposts, setUpdateNewposts] = useState([]);
  const [searchMatchPost, setSearchMatchPost] = useState([]);
  const [copyContent, setCopyContent] = useState({ copy: "", copyId: "" });

  useEffect(() => {
    const getAllNewPosts = async () => {
      const response = await fetch("/api/new", {
        method: "GET",
      });

      const newPosts = await response.json();
      setUpdateNewposts(newPosts);
      setSearchMatchPost(newPosts);
    };

    getAllNewPosts();
  }, []);

  const onCopyClipboard = (selectContent, id) => {
    setCopyContent({ copy: selectContent, copyId: id });
    navigator.clipboard.writeText(selectContent);
    setTimeout(() => {
      setCopyContent({ copy: "", copyId: "" });
    }, 2000);
  };

  const displayImg = (id) => {
    return (
      <ImageIcon
        imgUrl={
          copyContent.copy !== "" && copyContent.copyId === id
            ? "/assets/icons/check-o.svg"
            : "/assets/icons/clipboard.svg"
        }
        altName="clipboardIcon"
        width={25}
        height={25}
      />
    );
  };

  const onfilterPosts = (searchWords) => {
    const pattern = new RegExp(searchWords, "i");
    const filterBySearchWord = updateNewposts.filter((posts) => {
      return (
        pattern.test(posts.author?.email) ||
        pattern.test(posts.author?.username) ||
        pattern.test(posts.content) ||
        pattern.test(posts.title)
      );
    });

    setSearchMatchPost(filterBySearchWord);
  };
  return (
    <section className="section col">
      <Search onSearchInput={onfilterPosts} />

      <div className="display_posts">
        {searchMatchPost.map((posts, index) => {
          return (
            <div
              key={posts._id}
              className="btn card card_posts"
            >
              <h1 className="text-card bg-[#e8e1f79e] rounded break-words">
                {posts.title}
              </h1>
              <hr className="underline gradient-green-bg" />
              <div className="px-3">
                <div
                  className="copy w-fit flex justify-end py-2"
                  onClick={() => onCopyClipboard(posts.content, index)}
                >
                  {displayImg(index)}
                  <span className="hideCopy">Copy this content!</span>
                </div>

                <div className="min-h-[10rem] bg-[#88b5fe1c] p-3 break-words">
                  {posts.content}
                </div>

                <hr className="underline gradient-pink-bg" />
                <div className="row my-2">
                  <ImageIcon
                    imgUrl={posts.author?.image}
                    altName={posts.author?.username}
                  />
                  <p>author : {posts.author?.username}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
