"use client";
// React
import React, { FormEvent, useRef } from "react";
//CSS
import "./Contact.css";
// React Tostify
import { toast } from "react-toastify";
// Emailjs
import emailjs from "@emailjs/browser";
// Components
import SendIcon from "@/components/About/SendIcon";

export default function Contact() {
  const form = useRef();

  // Send email
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !(
        form.current?.name.value &&
        form.current.email.value &&
        form.current.project.value
      )
    ) {
      toast.warning("Please provide all data");
      return;
    }
    emailjs
      .sendForm(
        "service_12yuv8p",
        "template_l8m3ssg",
        form.current,
        "30UX3rRdxJJPf4AI4"
      )
      .then(
        (result) => {
          toast.success("Message send successfully");
        },
        (error) => {
          toast.error("Sorry fail to send message");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                golammursalin309@gmail.com
              </span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+880 1870-406364</span>
              <a
                href="https://wa.me/8801870406364"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Golam Mursalin</span>
              <a
                href="https://www.facebook.com/golammursalin360/"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
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
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
