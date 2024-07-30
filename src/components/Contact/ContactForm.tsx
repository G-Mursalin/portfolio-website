"use client";
// React
import React, { FormEvent, useRef } from "react";
// React Tostify
import { toast } from "react-toastify";
// Emailjs
import emailjs from "@emailjs/browser";
// Components
import SendIcon from "../About/SendIcon";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  // Send email
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.loading("Sending...");

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      project: { value: string };
    };

    if (!(target.name.value && target.email.value && target.project.value)) {
      toast.warning("Please provide all data");
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Message send successfully");
        },
        (error) => {
          toast.error("Sorry fail to send message");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form">
      <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input
          type="text"
          name="name"
          className="contact__form-input"
          placeholder="Insert your name"
        />
      </div>
      <div className="contact__form-div">
        <label className="contact__form-tag">Email</label>
        <input
          type="email"
          name="email"
          className="contact__form-input"
          placeholder="Insert your email"
        />
      </div>
      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Project</label>
        <textarea
          name="project"
          cols={30}
          rows={10}
          className="contact__form-input"
          placeholder="Write your project"
        ></textarea>
      </div>
      <button className="button button--flex">
        Send Message
        <SendIcon />
      </button>
    </form>
  );
}
