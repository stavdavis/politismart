import React from 'react';
import './no-login.css';

export default function NoLoginMsgPage(props) {
    return (
		<div id="no-login-msg-page" className="no-login-msg-page">
			<h1>This page requires a valid login</h1>
			<h2>Click on the logo above to return</h2>
		</div>
    );
}
