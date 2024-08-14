"use client";

import Image from "next/image";
import { Send, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Email is invalid";
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://formspree.io/f/xnqlqojr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "An error occurred. Please try again later."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section
      className="bg-soft-white py-16 px-4 md:px-8"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 text-center">
          Get in Touch
        </h2>
        <div className="bg-light-gray rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/assets/speech-bubble.png"
              alt="Speech bubble"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-3 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-medium-orange focus:border-medium-orange`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-3 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-medium-orange focus:border-medium-orange`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={`w-full px-3 py-2 border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-medium-orange focus:border-medium-orange`}
                  placeholder="Message Subject"
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full px-3 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-medium-orange focus:border-medium-orange`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-medium-orange hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medium-orange transition duration-150 ease-in-out disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 -mr-1 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
              {submitStatus === "success" && (
                <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
