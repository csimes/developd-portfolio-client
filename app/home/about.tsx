import Image from "next/image";
import { Code, Coffee, Music, Film } from "lucide-react";

const photo = "/assets/selfie.jpg";

const About = () => {
  return (
    <section
      className="bg-soft-white py-16 px-4 md:px-8 relative"
      id="about"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="border-t-4 border-medium-orange pt-4 inline-block text-3xl md:text-4xl font-bold text-dark-gray mb-8 uppercase tracking-wider">
          Meet Cherron
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 flex items-start">
              <Code className="mr-2 flex-shrink-0 text-medium-orange" />
              Dial-up survivor. Eleven Fifty alumni. Project whisperer.
              That&apos;s me. A slightly caffeinated web dev with a passion for
              pixels and problem-solving, forged in the crucible of curiosity.
              I&apos;m passionate about building beautiful, functional websites
              that drive results.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 flex items-start">
              <Coffee className="mr-2 flex-shrink-0 text-medium-orange" />I
              combine frontend mastery with sharp project management skills and
              a relentless drive to learn. My eagerness to contribute shines
              through in everything I do, from meticulous communication to
              creative problem-solving. Javascript isn&apos;t my only language;
              I also speak fluently in collaboration and innovation. Ready to
              see what I can do for your team? Let&apos;s talk.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 flex items-start">
              <Music className="mr-2 flex-shrink-0 text-medium-orange" />
              <Film className="mr-2 flex-shrink-0 text-medium-orange" />
              When I&apos;m not weaving digital tapestries, you&apos;ll find me
              lost in a Supernatural marathon, rocking out to anything with a
              beat, or practicing the fine art of using a turn signal.
              (Seriously, I&apos;m a pro.)
            </p>
            <div className="mt-8">
              <a
                href="/assets/simes-cherron-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-semibold text-soft-white bg-medium-orange rounded-lg transition duration-300 ease-in-out hover:bg-dark-gray hover:text-medium-orange"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              className="rounded-full border-8 border-medium-orange shadow-xl"
              width={400}
              height={400}
              src={photo}
              alt="Cherron selfie"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
