import React from "react";

function Contact(){
    return <div id="contact" className="page">
        <h1>Contact</h1>
        <form action="mailto:sunny@sunceriedaye.com" method="post" enctype="text/plain">
            <label for="name">Name:<br/><input id="name" type="text" name="name"/></label> <br/>
            <label for="subject">Subject:<br/><input id="subject" type="text" name="subject"/></label><br/>
            <label for="content">Content:<br/><textarea id="content" name="content" rows="25" cols="50" /></label><br/>
            <input type="submit" value="Send"/>
        </form>
        <a href="https://github.com/SunnyDaye" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
        <a href="https://www.linkedin.com/in/sunny-daye/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
    </div>
}

export default Contact;