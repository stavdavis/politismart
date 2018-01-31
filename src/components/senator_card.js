import React from 'react';
import './senator_card.css';

export default function SenatorCard(props) {
	function convertNonRiskScoreToSymbol(score) {
		if (score === 0) { return '\u2718'} // unicode for X
		if (score === 100) { return '\u2714'} // unicode for checkmark
		return '--' // 2014 = unicode for long dash; 2754 = unicode for question mark
	}

	function convertRiskScoreToSymbol(score) {
		if (score === 100) { return 'High'}
		if (score > 50) { return 'Med'} 
		return 'Low' 
	}

	let senatorPic = props.lawmaker[1];
	let sanatorName = props.lawmaker[0];
	let partyState = props.lawmaker[2];

	let gunControlScore = convertNonRiskScoreToSymbol(props.lawmaker[3]);
	let proLifeScore = convertNonRiskScoreToSymbol(props.lawmaker[4]);
	let lgbtScore = convertNonRiskScoreToSymbol(props.lawmaker[5]);
	let cleanEnergyScore = convertNonRiskScoreToSymbol(props.lawmaker[6]);
	let smallGovScore = convertNonRiskScoreToSymbol(props.lawmaker[7]);
	let reelectionRiskScore = convertRiskScoreToSymbol(props.lawmaker[8]);

    return (
        <div className="card-container">
            <div className="senator-pic-box"><img className="senator-pic" src={senatorPic} alt="Senator portrait"/></div>
            <div className="senator-name">{sanatorName}</div>
            <div className="party-state">{partyState}</div>
            <div className="score-guns-title">Gun Control:</div><div className="score-guns-value">{gunControlScore}</div>
            <div className="score-pro-life-title">Pro Life:</div><div className="score-pro-life-value">{proLifeScore}</div>
            <div className="score-lgbt-title">LGBTQ Rights:</div><div className="score-lgbt-value">{lgbtScore}</div>
            <div className="score-clean-energy-title">Clean Energy:</div><div className="score-clean-energy-value">{cleanEnergyScore}</div>
            <div className="score-small-gov-title">Small Gov.:</div><div className="score-small-gov-value">{smallGovScore}</div>
            <div className="score-donation-impact-title"><b>Re-election risk:</b></div><div className="score-donation-impact-value"><b>{reelectionRiskScore}</b></div>
        </div>
    );
}
