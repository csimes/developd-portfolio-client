import Image from "next/image";
import { FormControl, TextField, InputLabel, Button } from "@mui/material";

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
        className={styles.fsFrm}
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xnqlqojr"
        method="post"
      >
        <div className="contact-img">
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
          <div className={styles.formFields}>
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
              className={styles.formControl}
              id="full-name"
              defaultValue="Jane Doe"
              variant="filled"
              required
            />
            <TextField
              label="Email address"
              type="email"
              className={styles.formControl}
              id="email-address"
              defaultValue="email@domain.com"
              variant="filled"
              required
            />
            <TextField
              label="Message"
              className={styles.formControl}
              id="message"
              defaultValue="Let's collaborate!"
              multiline
              variant="filled"
              rows={3}
              required
            />
          </div>
        </FormControl>
        <Button
          type="submit"
          value="Send Message"
          variant="contained"
        >
          Send Message&nbsp;
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
