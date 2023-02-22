import { Icon } from "@iconify/react";
import { MdAlternateEmail, MdPhoneAndroid } from "react-icons/md";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FooterContainer } from "./style";

const ContactInfo = () => {
  return (
    <FooterContainer>
      <div className="footer_contacts">
        <h4 className="footer_title">Contatos</h4>

        <div className="contacts_container">
          <div className="contacts_contact">
            <MdAlternateEmail className="contact_icon" />
            <p className="contact_text">gabihcaldeira@gmail.com</p>
          </div>

          <div className="contacts_contact">
            <MdPhoneAndroid className="contact_icon" />
            <p className="contact_text">+55 (27) 99903-9212</p>{" "}
            <Icon icon="logos:whatsapp-icon" className="contact_logo" />
          </div>
        </div>
      </div>

      <div className="footer_socials">
        <h4 className="footer_title">Redes</h4>
        <div className="socials_links">
          <Link
            to="https://www.linkedin.com/in/gabriela-caldeira/"
            target="_blank"
            className="socials_link"
          >
            <SlSocialLinkedin className="link_icon" />
          </Link>

          <Link
            to="https://github.com/gabihcaldeira"
            target="_blank"
            className="socials_link"
          >
            <SlSocialGithub className="link_icon" />
          </Link>
        </div>
      </div>
    </FooterContainer>
  );
};

export default ContactInfo;
