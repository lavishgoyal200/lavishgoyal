import React from 'react';
import Typed from 'react-typed'

function Header({ data }) {
    if(data) {
      var name = data.name;
      var networks= data.social.map(function(network) {
        return <li key={network.name}>
          <a href={network.url}><i className={network.className}></i></a>
        </li>
      })
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>
          <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">I'm {name} <span role="img" aria-label="he">🙋‍♂</span></h1>
              <h3><span>I'm a </span>
              <span>
              <Typed
                  strings={[
                      `Student`,
                      `Full Stack Web Developer`,
                      `Competitive Programmer`
                      ]}
                      typeSpeed={50}
                      backSpeed={30}
                      loop >
                  </Typed>
              </span></h3>
              <hr />
              <ul className="social">
                {networks}
              </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
}

export default Header;