// CSS
import "./Services.css";

export default function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Design
            </h3>
          </div>
          <p className="services__description">
            Develop pixel perfect fully responsive websites with HTML and CSS
            from provided figma or photoshop design.
          </p>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Single-page
              <br /> Application
            </h3>
          </div>
          <p className="services__description">
            Develop fast and fully responsive single page React web apps with
            routing, authentication and many more.
          </p>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-server-connection services__icon"></i>
            <h3 className="services__title">
              Full-stack <br /> Web Application
            </h3>
          </div>
          <p className="services__description">
            Develop a full stack web app using MongoDB, Express, React and
            NodeJS. With authentication and authorization, payment system,
            dashboard and many more.
          </p>
        </div>
      </div>
    </section>
  );
}
