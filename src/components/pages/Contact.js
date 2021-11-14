import React from 'react';
import '../../App.css';

function Contact() {
	return (
		<div className="contact">
			<h1>Contact</h1>
			<div className="content">
				<div className="title">
					<h3>
						You can contact us by sending an email to our customer service:
					</h3>
				</div>
				<div className="contact-item">
					<a href="mailto:exampleemail@vsecure.com" className="content-link">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
