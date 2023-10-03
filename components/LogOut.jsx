"use client";

import ImageIcon from "@ui/Image";
import ButtonAction from "@ui/Button";
import Link from "next/link";
import SignOutBtn from "@components/signOut";
import { useSession } from "next-auth/react";

const LogOut = () => {
  const { data: session } = useSession();

  return (
    <>
      <ButtonAction theme="black" keyBtn="newPost" goToPage="/create-post">
        create post
      </ButtonAction>
      <SignOutBtn />
      <Link href="/profile">
        <ImageIcon
          imgUrl={
            session?.user ? session.user.image : "/assets/images/profile.svg"
          }
          altName="user's profile"
        />
      </Link>
    </>
  );
};

export default LogOut;
