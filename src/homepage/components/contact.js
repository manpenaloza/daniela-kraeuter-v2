import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { btnPrimaryClassNames } from "../../common/components/button";
import { Section } from 'react-scroll-section';


const inputClassnames =
  "bg-near-white w-full py-3 my-2 lg:my-4 lg:py-4 px-6 text-xl rounded-lg shadow-inner border-solid border-light-primary text-dark-gray border-2";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={(data) => (
      <Section id="contact">
         <div className="bg-secondary flex flex-column justify-center items-center px-10 py-20 text-near-white leading-relaxed text-center">
          <p className="text-xl md:text-2xl lg:text-3xl max-w-screen-sm xl:max-w-screen-md font-sans-serif">
            {data.site.siteMetadata.homepageAbout} Sie haben Fragen zu meinen
            Workshops, Einzelbetreuungen oder sonstigem? Kontaktieren Sie mich!
          </p>

          <div className="w-full lg:w-9/12 mt-8 lg:mt-16">
            <form action="https://formspree.io/myynrdvd" method="POST">
              <div className="lg:flex justify-row justify-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Deine Name"
                  className={`${inputClassnames} lg:mr-4`}
                />
                <input
                  type="email"
                  name="_replyto"
                  placeholder="Deine E-Mail Adresse"
                  className={`${inputClassnames} lg:ml-4`}
                />
              </div>
              <textarea
                name="message"
                placeholder="Was kann ich für dich tun?"
                className={`${inputClassnames} h-32 lg:h-64`}
              />
              <input
                type="submit"
                value="Nachricht senden"
                className={`${btnPrimaryClassNames} bg-primary mt-4`}
              />
            </form>
          </div>
        </div>
      </Section>
    )}
  />
);
