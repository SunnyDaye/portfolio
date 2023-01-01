import React from "react";

function Contact() {
    return <div id="contact" className="page">
        <h1>Contact</h1>
        <div className="contact-content center">
            <form action="mailto:sunny@sunceriedaye.com" method="post" encType="text/plain">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" />
                <label htmlFor="subject">Subject:</label>
                <input id="subject" type="text" name="subject" />
                <label htmlFor="content">Content:</label><textarea id="content" name="content" rows="25" cols="50" />
                <input id="submit" type="submit" value="Send" />
            </form>
            <div className="contact-badges">
                <a href="https://github.com/SunnyDaye" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
                <a href="https://www.linkedin.com/in/sunny-daye/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
            </div>

        </div>

    </div>
}

export default Contact;