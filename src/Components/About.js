import React from 'react';

function About({ data }) {
    if(data) {
      var name = data.name;
      var profilepic = data.image;
      var bio = data.bio;
      var state = data.address.state;
      var country = data.address.country;
      var email = data.email;
      var resumeDownload = data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="profile pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
         <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
						<span>{name}</span><br />
						<span>
              {state}, {country}
            </span><br />
            <span>{email}</span>
					  </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>View Resume</a>
              </p>
            </div>
         </div>
         </div>
      </div>
      </section>
    );
}

export default About;