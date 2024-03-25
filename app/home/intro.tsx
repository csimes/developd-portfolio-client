import Image from "next/image";

const header = "/assets/header-img.jpg";
const logo = "/assets/transparent.png";
const Intro = () => {
  return (
    <div className="sticky overflow-hidden rounded-b-xl text-dark-gray">
      <div className="z-15 absolute h-full w-full bg-gradient-to-b from-medium-orange to-light-gray"></div>
      <Image
        priority
        src={header}
        fill
        alt="chicago skyline"
      />
      <div className="relative flex flex-col text-center align-items-center m-8 sm:mr-4">
        <Image
          priority
          src={logo}
          alt="developd logo"
          width="380"
          height="100"
        />
        <div className="text-soft-white">
          <h1 className="font-medium">Hey, I&apos;m </h1>
          <h1>Cherron!</h1>
          <h1 className="font-medium">Web Developer and owner of</h1>
          <h1>developd.</h1>
        </div>
      </div>
    </div>
  );
};
export default Intro;
