import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="btn btn-white btn-active"
      onClick={() => {
        signOut({ redirect: false }).then(() => {
          router.push("/");
        });
      }}
    >
      sign out
    </button>
  );
};

export default SignOutBtn;
