import React from 'react';
import './about-page.css';
import aboutPolitismart from './about-politismart.png';

export default function AboutPage(props) {
    return (
    	<div className="about-page">
			<div id="about" className="about-section">
				<h1>About PolitiSmart</h1>
				<h2>PolitiSmart helps you see beyond the political cookie-cutter.</h2>
				<div className="text-box about-text">
					'Republican' & 'Democrat' are irrelevant terms.<br/> 
					What if you are pro choice, but also anti gun control?<br/>
					What if you support same-sex marriage, but don't believe in clean energy?<br/>
					Turns out, there are plenty of lawmakers who don't fall into simple	buckets.
					<h3>PolitiSmart helps you find them.</h3>
					<img className="about-image" src={aboutPolitismart} alt="process diagram"/>
				</div>
			</div>

			<div id="contribute" className="contribute-section">
				<h1>Optimize your contributions - coming soon</h1>
				<h2>Political donations that go directly to your best matched lawmakers.</h2>
				<div className="text-box contribute-text">
					Not to PACs.<br/>
					Not to parties.<br/>
					Not to lobbyists.<br/>
					Not to spin-doctors.<br/>
					Your political contribution will be divvied up by our algorithm and sent to the lawmakers who 
					represent you best and who need it the most.<br/>
					<br/>
					<h3>PolitiSmart helps you contribute directly to those who need it most.</h3>
				</div>
			</div>
		</div>
    );
}




