import Image from "next/image";

const ImageIcon = ({ imgUrl, altName, width, height }) => {
  return (
    <Image
      src={imgUrl}
      width={width || 50}
      height={height || 50}
      alt={altName}
      style={{
        objectFit: "cover",
        borderRadius: "1rem",
        width: width || 50,
        height: height || 50,
        cursor: "pointer",
      }}
      priority
    />
  );
};

export default ImageIcon;
