import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  const [resumeData, setResumeData] = useState({});

  // CHNAGE url to /resumeData.json to run on local
  useEffect(() => {
    $.ajax({
      url:'https://lavishgoyal200.github.io/lavishgoyal/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data) {
          setResumeData(data);
      },
      error: function(xhr, status, err) {
        alert(err);
      }
    });
  }, [])

  return (
       <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main}/>
       </div>
    );
}

export default App;