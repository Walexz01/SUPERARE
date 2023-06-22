import { slideimage } from "../data/Imagesslide";

const SlideimageContainer = ({ image, backgroundcolor }: slideimage) => {
  return (
    <div
      className="slide__image_con"
      style={{ backgroundColor: backgroundcolor }}
    >
      <img src={image} alt="" />
    </div>
  );
};

export default SlideimageContainer;
