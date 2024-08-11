import Image from "next/image";
const photo = "/assets/selfie.jpg";

const About = () => {
  return (
    <section
      className="bg-soft-white py-16 px-4 md:px-8"
      id="about"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="overline text-3xl md:text-4xl font-bold text-dark-gray mb-8 uppercase tracking-wider">
          Meet Cherron
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Dial-up survivor. Eleven Fifty alumni. Project whisperer.
              That&apos;s me. A slightly caffeinated web dev with a passion for
              pixels and problem-solving, forged in the crucible of curiosity.
              I&apos;m passionate about building beautiful, functional websites
              that drive results.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I combine frontend mastery with sharp project management skills
              and a relentless drive to learn. My eagerness to contribute shines
              through in everything I do, from meticulous communication to
              creative problem-solving. Javascript isn&apos;t my only language;
              I also speak fluently in collaboration and innovation. Ready to
              see what I can do for your team? Let&apos;s talk.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
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
