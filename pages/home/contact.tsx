import Image from "next/image";
import { Input, TextField, InputLabel, Button } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className="container" id="contact">
      {/* <FormControl> */}
      <form
        className={styles.fsFrm}
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xnqlqojr"
        method="post"
      >
        {/* <Image src="assets/speech-bubble.svg" alt="" id="contact-img" /> */}
        <h2>Contact Form</h2>
        <p className="contact">
          I&apos;d love to help you bring your vision to life! Let me know how I
          can help below.
        </p>
        <fieldset className={styles.fsFrmInputs}>
          <div className="form-floating">
            <InputLabel htmlFor="full-name">First and Last Name </InputLabel>
            <Input
              type="text"
              name="name"
              className={styles.formControl}
              id="full-name"
              placeholder="Jane Doe"
              fullWidth
              required
            />
          </div>
          <div className="form-floating">
            <InputLabel htmlFor="email-address">Email Address </InputLabel>
            <Input
              type="email"
              name="_replyto"
              className={styles.formControl}
              id="email-address"
              placeholder="email@domain.com"
              fullWidth
              required
            />
          </div>
          <div className="form-floating">
            <InputLabel htmlFor="message">Message </InputLabel>
            <TextField
              name="message"
              className={styles.formControl}
              id="message"
              placeholder="Let's collaborate!"
              multiline
              fullWidth
              variant="filled"
              rows={3}
              required
            />
          </div>
          <Input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="developd Contact Form Submission"
          />
        </fieldset>
        <Button
          className={styles.submitBtn}
          value="Send Message"
          variant="contained"
        >
          Send Message&nbsp;<SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Contact;
