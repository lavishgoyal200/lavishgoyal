import React from 'react';

function Resume({ data }) {
    if(data) {
      var education = data.education.map(function(education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p className="info">{education.description}</p>
        </div>
      })
      var work = data.work.map(function(work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span>
            <em className="date">{work.years}</em>
          </p>
          <p className="info">{work.description}</p>
        </div>
      })
      var skills = data.skills.map(function(skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      })
      var ratings = data.ratings.map(function(rating) {
        return <div key={rating.website}><h3>{rating.website}</h3>
          <p className="info">{rating.description}</p>
          <p className="info"><a href={rating.url}>{rating.url}</a></p>
        </div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Organisations</span></h1>
          </div>
          <div className="nine columns main-col">
            {work}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Ratings</span></h1>
          </div>
          <div className="nine columns main-col">
            {ratings}
          </div>
        </div>
      </section>
    );
}

export default Resume;