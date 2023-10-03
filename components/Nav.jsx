import Link from "next/link";
import ImageIcon from "@ui/Image";
import Register from "@components/register";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link href="/" className="flex gap-2 hover:scale-105">
        <ImageIcon
          imgUrl="/assets/images/airplane.gif"
          altName="home page"
          width={60}
          height={60}
        />
        <p className="text-2xl font-medium desktop-screen gradient-purple-white">
          Blogs
        </p>
      </Link>
      <Register />
    </nav>
  );
};

export default Nav;
