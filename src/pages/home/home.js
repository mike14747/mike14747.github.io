import React from 'react';

import './css/home.css';

import contactMe from './images/contact_me.png';
import codeIcon from './images/code-icon.png';
import email from './images/email.png';
import articleIcon from './images/article_icon.png';
import githubIcon from './images/github_icon.png';

import Skills from './data/skillsArray';

const Home = () => {
    return (
        <div id="about_me_div" className="bg-content">
            <div className="row">
                <div className="col-12">
                    <p className="bio font-weight-bolder">
                        Summary
                    </p>
                    <p className="bio">
                        I have been programming for 15+ years and am a recent graduate from the Case Western Reserve University Full Stack program (having been a consistent A+ student)... solidifying my skills as a developer/programmer and am now ready to pursue programming as a career.
                    </p>
                    <p className="bio">
                        Not only do I take pride in my coding efficiency and proficiency, I am always eager to expand my
                        skills into new areas. Solving problems, understanding the code and becoming better at programming
                        has become very addictive.
                    </p>
                    <p className="bio">
                        I really enjoy working on all parts of web development, but I especially like the backend. Lately I’ve been working mostly with Node, Express server, controllers/resolvers, MySQL databases and writing RESTful APIs.
                    </p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-7">
                    <div className="my-card mt-2 mb-4">
                        <h6 className="my-card-header px-3 py-3 m-0"><img src={codeIcon} alt="My Programming Skills" className="mb-1 mr-2" />My Programming Skills</h6>
                        <div className="my-card-body p-3 bg-white text-secondary">
                            {Skills && Skills.length > 0 &&
                                Skills.map((skill, index) => (
                                    <div key={index}>{skill}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="cards-right mx-auto mt-2 mb-5">
                        <div className="cards-right-header">
                            <h6 className="m-0">More Info</h6>
                        </div>
                        <div className="cards-right-body">
                            <div className="mb-4">
                                <img src={githubIcon} alt="Me on GitHub" className="mb-1 mr-3" /><a href="https://github.com/mike14747" target="_blank" rel="noopener noreferrer">https://github.com/mike14747</a>
                            </div>
                            <div>
                                <img src={articleIcon} alt="View my résumé" className="mr-3" /><a href="resume.pdf" target="_blank">My Résumé</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards-right mx-auto mb-5 pb-0 contact_bg">
                        <div className="cards-right-body text-center">
                            <img src={contactMe} alt="Contact Me" className="img-fluid contact_me" />
                            <div className="mt-2">
                                <a href="mailto:mikegullo4747@gmail.com">mikegullo4747@gmail.com</a>
                            </div>
                            <div>
                                <img src={email} alt="Email Me" className="mt-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <blockquote className="blockquote">
                        <p className="mb-0">&quot;The function of good software is to make the complex appear to be simple.&quot;</p>
                        <footer className="blockquote-footer">Grady Booch</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Home;
