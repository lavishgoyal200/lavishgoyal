import React from 'react';

function Footer({ data }) {
    if(data) {
      var { social } = data;
      var networks = social.map(function(network) {
        return <li key={network.name}>
          <a href={network.url}><i className={network.className}></i></a>
        </li>
      })
    }

    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
           <p className="copyright">
            &copy; Copyright 2022
           </p>
        </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
     </div>
     </footer>
    );
}

export default Footer;