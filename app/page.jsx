import Feed from "@components/Feed";
import DisplayClouds from "@components/DisplayClouds";

const Home = () => {
  return (
    <section className="section col">
      <h1 className="text-title gradient-black">Create your own blogs</h1>
      <h1 className="text-card gradient-blue my-3 mx-5">
        Your can create your own blogs. Just sign-in with google account.
      </h1>
      <DisplayClouds />
      <Feed />
    </section>
  );
};

export default Home;
