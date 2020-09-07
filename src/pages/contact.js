import React from "react"
import style from "./contact.module.scss";


import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Contact() {
    return (
        <div>
            <div className="contact section" >
                <h1 className={style.header}>Contact</h1>
                <form className={style.form} action="https://formspree.io/xknqlpde" method="POST"><fieldset>
                    <label for="firstname">First Name:</label><input type="text" className={style.short} id="firstname" placeholder="First Name" />
                    <label for="lastname">Last Name:</label><input type="text" className={style.short} id="lastname" placeholder="Last Name" />
                    <label for="email">Email Address:</label><input type="text" className={style.long} id="email" name="_replyto" placeholder="Email Address" />
                    <br></br>
                    <label for="message">Message:</label><textarea type="text" className={style.textbox} id="message" placeholder="Message" />
                </fieldset>
                    <button className={style.formButton} type="submit">Send</button></form>
                <div>
                    <h3 className={style.header}>Connect with me!</h3>
                    <span className="icons">
                        <a className={style.social} href="https://twitter.com/joojaco" target="_blank"><FaTwitter className={style.icon} id="wp" style={{ color: '#1A91DA' }} /></a>
                        <a className={style.social} href="https://github.com/joojaco" target="_blank"><FaGithub className={style.icon} id="wp" style={{ color: '#1c1c1c' }} /></a>
                        <a className={style.social} href="https://linkedin.com/in/sarahshook" target="_blank"><FaLinkedin className={style.icon} id="wp" style={{ color: '#0073B0' }} /></a>

                    </span>
                </div>
            </div>
        </div>
    )
}
