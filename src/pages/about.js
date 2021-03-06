import React from "react";
import style from "./about.module.scss";
import Sarah from "../img/sarahBg.jpg";

export default function About() {
    return (
        <div className={style.container}>
            <div className="about">
                <h1 className={style.header}>About</h1>
                <div className={style.section}>
                    <div className={style.text}>
                        <p>
                            I am a web developer currently based in California. When I am not chasing my kids, I enjoy coding and learning about technology. I like understanding how things work; sometimes when I am bored, I will pull a list of current processes running on my PC and research exactly what they do (yes, I am a nerd).
                        </p>
                        <p>
                            I enjoy automation and getting things to work behind the
                            scenes. This includes building reports in SQL so they can be
                            imported via PowerShell into systems including O365, Adobe
                            Connect, and PowerSchool.
                        </p>
                        <p>
                            I recently started my journey in front-end development, and work
                            with Gatsby (and SASS) to deploy static sites.
                        </p>
                        <p>
                            I also maintain the WordPress site for an online school, including
                            PHP, HTML, and CSS code updates as needed.
                        </p>
                    </div>
                    <img className={style.photo} src={Sarah} alt="Headshot of Sarah" />
                </div>
            </div>
        </div>
    );
}
