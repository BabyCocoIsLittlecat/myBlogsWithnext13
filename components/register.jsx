"use client";

import LogIn from "@components/LogIn";
import LogOut from "@components/LogOut";
import { useSession } from "next-auth/react";

const Register = () => {
  const { data: session } = useSession();

  return (
    <div className="btn-register">{session?.user ? <LogOut /> : <LogIn />}</div>
  );
};

export default Register;
