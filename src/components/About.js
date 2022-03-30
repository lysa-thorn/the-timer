import React, { Component } from 'react';
import '../sass/about.scss';

export default class About extends Component {
    render() {
        return (
            <>
                <section className='about-page'>
                    <section className="introduction">
                        <div className="starcontainer">
                            <h2>About me</h2>
                            <i className="fa fa-star fa-2x"></i>
                            <hr className="star"></hr>
                        </div>
                            <p>I am a Front End developer who believes in making the internet a better place. I currently work at Picspotr as a Web Developer/Design intern, Vice President of LatinosinHigherEd, and a freelancer in The Greater New Haven Area. Yes I wear many hats. </p>

                            <p>It is my passion to conceptualize, develop, and deploy ideas to this great environment we call the internet. I am an advocate for Higher Education advancement and when I set my goals I sink my teeth into them. </p>
                    </section>

                    <section className="location">
                        <h1>Where I am From</h1>
                        <p>I was born in the Bronx raised in Spanish Harlem and currently reside in Naugatuck CT.</p>
                    </section>

                    <section className="questions">
                        <h1>More About Me</h1>
                        <h2>What is important to you?</h2>
                        <p>Aside from my family education is extremely important to me and has always been a huge component of my growth.</p>
                        <h2>What are your favorite hobbies?</h2>
                        <p>I enjoy playing Ice Hockey. I'm a huge wrestling fan and love attending Wrestle Mania. I also enjoy trying new Vegan foods and traveling.</p>
                        <h2>What is your dream job?</h2>
                        <p>I'd love to take my new freelance career and turn it into a fullt-time gig.</p>
                        <h2>What music have you been listening to lately?</h2>
                        <p>I've been listening to the Focus playlist on Spotify.</p>
                    </section>
                </section>
            </>
        );
    }
}