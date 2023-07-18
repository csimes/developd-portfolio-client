import Image from "next/image";
import { Send } from "react-feather";
import speechBubble from "../../public/assets/speech-bubble.png";

const Contact = () => {
  return (
    <div
      className="container"
      id="contact"
    >
      {/* <FormControl> */}
      <form
        className="w-9/12 min-w-[60%] text-center text-soft-white bg-light-gray flex flex-col m-auto rounded-[50px] border-[10px] border-solid border-medium-orange"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xnqlqojr"
        method="post"
      >
        <div className="contact-img m-4">
          <Image
            src={speechBubble}
            alt=""
            width={350}
            height={350}
          />
        </div>
        <h2>Contact Form</h2>
        <p>
          I&apos;d love to help you bring your vision to life! Let me know how I
          can help below.
        </p>
        <div>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              disabled
              id="email-subject"
              value="developd Contact Form Submission"
            />
            <input
              type="text"
              className="w-[70%]"
              id="full-name"
              defaultValue="Jane Doe"
              required
            />
            <input
              type="email"
              className="w-[70%]"
              id="email-address"
              defaultValue="email@domain.com"
              required
            />
            <input
              className="w-[70%]"
              id="message"
              defaultValue="Let's collaborate!"
              required
            />
          </div>
        </div>
        <div className="m-auto">
          <button
            className="flex flex-row text-medium-orange bg-dark-gray m-4 p-3 rounded-[10px]  hover:text-medium-orange hover:bg-dark-gray hover:overline hover:p-4"
            type="submit"
            value="Send Message"
          >
            <p className="m-auto">Send Message &nbsp;</p>
            <Send />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
