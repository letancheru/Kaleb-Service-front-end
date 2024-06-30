import React from "react";
import From from "./From";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <div className={"contact-page-area-wrapper sp-y"}>
      <div className="container">
        <div className="contact-content-wrap">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-area contact-method">
                <h3>Send us a Message</h3>
                <From />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-information contact-method">
                <div className="contact-info-con">
                  <h3>Contact Info</h3>
                  <ContactInfo
                    address="Akaki-Kality Sub-city, Kebele-10 , House No. 9999/1 Debreziet Road, Kaleb Building Addis Ababa Ethiopia
                                        <br/>https:kalebservice.com
                                        <br/>tesfayegm@kalebservice.com
                                        <br/>(+251-011) 439 36 74
                                        <br/>(+251-011) 439 36 53"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
