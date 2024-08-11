import Image from "next/image";

const header = "/assets/header-img.jpg";
const logo = "/assets/transparent.png";

const Intro = () => {
  return (
    <div className="relative h-[calc(100vh-6rem)] overflow-hidden">
      <Image
        priority
        src={header}
        fill
        alt="chicago skyline"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-medium-orange via-medium-orange/70 to-medium-orange/30">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Image
            priority
            src={logo}
            alt="developd logo"
            width={300}
            height={79}
            className="mb-8 w-4/5 max-w-md"
          />
          <div className="text-soft-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
              Hey, I&apos;m
            </h1>
            <h1 className="text-dark-gray text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Cherron!
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
              Web Developer and owner of
            </h2>
            <h2 className="text-dark-gray text-2xl md:text-3xl lg:text-4xl font-bold">
              developd.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
