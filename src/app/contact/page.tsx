//CSS
import "./Contact.css";
// Components
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
