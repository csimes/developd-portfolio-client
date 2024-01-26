import Image from "next/image";

const header = "/assets/header-img.jpg";
const logo = "/assets/transparent.png";
const Intro = () => {
  return (
    <div className="sticky overflow-hidden rounded-b-xl text-dark-gray mt-4 mb-0">
      <div className="z-1 absolute h-full w-full bg-gradient-to-b from-medium-orange to-light-gray"></div>
      <Image
        priority
        src={header}
        layout="fill"
        alt="chicago skyline"
      />
      <div className="relative flex flex-col text-center align-items-center m-8 sm:mr-4">
        <Image
          priority
          src={logo}
          alt="developd logo"
          layout="intrinsic"
          width="380"
          height="100"
        />
        <h1 className="font-medium">Hey, I&apos;m </h1>
        <h1 className="text-dark-gray">Cherron!</h1>
        <h1 className="font-medium">Web Developer and owner of</h1>
        <h1 className="text-dark-gray">developd.</h1>
      </div>
    </div>
  );
};
export default Intro;
