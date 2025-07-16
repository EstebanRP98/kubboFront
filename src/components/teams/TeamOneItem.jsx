import React from "react";
import Link from "next/link";

const shapeOne = "/team/team_img_shape01.svg";
const shapeTwo = "/team/team_img_shape02.svg";

export const TeamOneItem = ({ src, name, designation, kubboId, socialMedia }) => {

  if (src) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
      <div className="team__item">
        <div className="team__item-img">
          <div className="mask-img-wrap">
            <img src={src} alt={name}/>
          </div>
          <div className="team__item-img-shape">
            <div className="shape-one">
              <img src={shapeOne} alt="shape" className="injectable" />
            </div>
            <div className="shape-two">
              <img src={shapeTwo} alt="shape" className="injectable" />
            </div>
          </div>
          <div className="team__social">
            <ul className="list-wrap">
              {socialMedia?.facebook && ( // Conditionally render if facebook link exists
                <li>
                  <a
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              )}
              {socialMedia?.twitter && ( // Add Twitter if it's in your GraphQL schema for businesses
                <li>
                  <a
                    href={socialMedia.twitter} // Assuming 'twitter' exists in socialMedia from GraphQL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              )}
              {socialMedia?.instagram && ( // Conditionally render if instagram link exists
                <li>
                  <a
                    href={socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              )}
              {socialMedia?.website && ( // Conditionally render if website link exists
                <li>
                  <a
                    href={socialMedia.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe"></i> {/* Changed to globe for website */}
                  </a>
                </li>
              )}
              {/* You can add more social media links here if they exist in your backend data */}
            </ul>
          </div>
        </div>
        <div className="team__item-content">
          <h4 className="title">
            {/* MODIFIED: Use kubboId for the dynamic link */}
            {kubboId ? (
              <Link href={`/animal/${kubboId}`}>{name}</Link>
            ) : (
              // Fallback if no kubboId (though it should always exist now)
              <Link href="#">{name}</Link>
            )}
          </h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
  };
};
