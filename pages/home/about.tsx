import Image from "next/image";
const photo = "/assets/selfie.jpg";

const About = () => {
  return (
    <div
      className="container flex flex-col md:flex-row"
      id="about"
    >
      <div className="md:w-1/2">
        <h2 className="uppercase overline">Meet Cherron</h2>
        <div>
          <p>
            Dial-up survivor. Eleven Fifty alumni. Project whisperer.
            That&apos;s me. A slightly caffeinated web dev with a passion for
            pixels and problem-solving, forged in the crucible of curiosity.
            I&apos;m passionate about building beautiful, functional websites
            that drive results.
          </p>
          <p>
            I combine frontend mastery with sharp project management skills and
            a relentless drive to learn. My eagerness to contribute shines
            through in everything I do, from meticulous communication to
            creative problem-solving. Javascript isn&apos;t my only language; I
            also speak fluently in collaboration and innovation. Ready to see
            what I can do for your team? Let&apos;s talk.
          </p>
          <p>
            When I&apos;m not weaving digital tapestries, you&apos;ll find me
            lost in a Supernatural marathon, rocking out to anything with a
            beat, or practicing the fine art of using a turn signal. (Seriously,
            I&apos;m a pro.)
          </p>
          <a
            href="/assets/simes-cherron-resume.pdf"
            target="_blank"
          >
            <button className="p-3 text-medium-orange bg-dark-gray text-center no-underline rounded-[10px] hover:overline">
              View Resume
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          className="m-8 rounded-full border-4 border-dark-gray"
          width={450}
          height={175}
          src={photo}
          alt="cherron selfie"
        />
      </div>
    </div>
  );
};

export default About;
