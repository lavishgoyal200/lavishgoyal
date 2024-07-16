import React from 'react';

function Portfolio({ data }) {
    if(data) {
      var projects = data.projects.map(function(projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <h3>{projects.title}</h3>
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Projects <span role="img" aria-label="hi">💻</span></h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
      </div>
   </section>
    );
}

export default Portfolio;