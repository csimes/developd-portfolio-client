import Image from "next/image";
import { Send } from "react-feather";
import speechBubble from "../../public/assets/speech-bubble.png";

const Contact = () => {
  return (
    <div
      className="container"
      id="contact"
    >
      <form
        className="w-9/12 text-center text-soft-white bg-light-gray m-auto p-10 rounded-[50px] border-[10px] border-solid border-medium-orange"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xnqlqojr"
        method="post"
      >
        <Image
          src={speechBubble}
          alt=""
          width={350}
          height={350}
        />
        <h2>Contact Form</h2>
        <p>
          I&apos;d love to help you bring your vision to life! Let me know how I
          can help below.
        </p>
        <div className="flex flex-col m-2">
          <div className="mt-3">
            <label
              htmlFor="subject"
              className="block font-medium leading-6 text-soft-white"
            >
              Message Subject
            </label>
            <div className="mt-3">
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="email"
                required
                className="text-center m-auto w-3/4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-medium-orange focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-dark-gray"
                defaultValue="developd Contact Form Submission"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block font-medium leading-6 text-gray-900"
              >
                First and Last Name
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="text-center w-full block rounded-md border-0 py-1.5 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-medium-orange focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-dark-gray"
                  placeholder="Joe Schmoe"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="family-name"
                  className="text-center w-full block rounded-md border-0 py-1.5 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-medium-orange focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-dark-gray"
                  placeholder="joeschmoe@email.com"
                />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="message"
              className="block font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-3">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="text-center w-full block rounded-md border-0 py-1.5 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-medium-orange focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-dark-gray"
                placeholder="Let's collaborate!"
                required
              />
            </div>
          </div>
        </div>
        <button
          className="flex flex-row text-medium-orange bg-dark-gray m-auto p-3 rounded-[10px]  hover:text-dark-gray hover:bg-medium-orange hover:overline"
          type="submit"
          value="Send Message"
        >
          <p className="m-auto">Send Message &nbsp;</p>
          <Send />
        </button>
      </form>
    </div>
  );
};

export default Contact;
