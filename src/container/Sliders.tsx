import HomeSliderImage from "../assets/images/home-slider-image.jpg";

const Sliders = () => {
  return (
    <div className="relative">
      <div className="absolute px-8 py-6 w-[450px] flex flex-col bg-white left-[350px] top-[70px]">
        <h1 className="text-4xl font-bold">Always a new skill to learn</h1>
        <p className="mt-2 text-md">
          With courses added regularly to our catalog, you can get access to the
          latest skills. Sale from ₹529 ends today.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img className="object-cover" src={HomeSliderImage} alt="Home Image" />
      </div>
    </div>
  );
};

export default Sliders;
