import ImageIcon from "@ui/Image";

const DisplayClouds = () => {
  let numberOfClouds = Array(5).fill(0);
  const displayImages = () => {
    return numberOfClouds.map((i, index) => {
      return (
        <div key={index}>
          <ImageIcon
            imgUrl={
              index === 2
                ? "/assets/images/moon.gif"
                : "/assets/images/cloud.gif"
            }
            altName="cloud"
            width={80}
            height={40}
          />
        </div>
      );
    });
  };

  return <div className="clouds-area">{displayImages()}</div>;
};

export default DisplayClouds;
