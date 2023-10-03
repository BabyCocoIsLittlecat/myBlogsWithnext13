import ImageIcon from "@ui/Image";

const Error = () => {
  return (
    <div className="col">
      <h1 className="text-card text-pink-600">Oops! some thing went wrong. Not found user's account</h1>
      <ImageIcon
        imgUrl="/assets/images/oops.gif"
        altName="oops!"
        width={160}
        height={160}
      />
    </div>
  );
};

export default Error;
