import Image from "next/image";
import { FormControl, TextField } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import styles from "../../styles/Contact.module.css";
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
        <FormControl>
          <div className="flex flex-col items-center justify-center">
            <TextField
              disabled
              label="Subject"
              id="email-subject"
              variant="filled"
              value="developd Contact Form Submission"
              multiline
              rows={2}
            />
            <TextField
              type="name"
              label="First and Last Name"
              className="w-[70%]"
              id="full-name"
              defaultValue="Jane Doe"
              variant="filled"
              required
            />
            <TextField
              label="Email address"
              type="email"
              className="w-[70%]"
              id="email-address"
              defaultValue="email@domain.com"
              variant="filled"
              required
            />
            <TextField
              label="Message"
              className="w-[70%]"
              id="message"
              defaultValue="Let's collaborate!"
              multiline
              variant="filled"
              rows={3}
              required
            />
          </div>
        </FormControl>
        <button
          className="text-medium-orange bg-dark-gray m-4 p-3 rounded-[10px] hover:text-medium-orange hover:bg-dark-gray hover:overline hover:p-4"
          type="submit"
          value="Send Message"
        >
          Send Message&nbsp; &nbsp;
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default Contact;
