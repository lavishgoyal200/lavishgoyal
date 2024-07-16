import React, { useState } from 'react';

const Contact = ({ data }) => {
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   const handleClick = (e) => {
      window.open(`mailto:${data?.email}?subject=${subject}&body=${name}: ${message}`);
   }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">{data?.message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
              <form id="contactForm" name="contactForm">
					    <fieldset>
                <div>
						     <label htmlFor="contactName">Name <span className="required">*</span></label>
						     <input value={name} type="text" size="25" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                </div>
                <div>
						     <label htmlFor="contactSubject">Subject</label>
						     <input value={subject} type="text" size="25" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                </div>
                <div>
                 <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                 <textarea value={message} onChange={e => setMessage(e.target.value)} cols="40" rows="4" id="contactMessage" name="contactMessage"></textarea>
                </div>
                <div>
                  <button type='submit' onClick={handleClick} className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                </div>
					    </fieldset>
				      </form>
            <div id="message-warning">Error boy</div>
				    <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				    </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
					    <h4>Address: </h4>
					    <p className="address">
						   {data?.name}<br />
               {data?.address.state}, {data?.address.country}<br />
					    </p>
				      </div>
              <div className="widget widget_tweets">
		          </div>
            </aside>
        </div>
      </section>
    );
}

export default Contact;