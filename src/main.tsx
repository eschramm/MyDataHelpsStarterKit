import React from 'react';
import ReactDOM from 'react-dom/client';
import MyDataHelps from '@careevolution/mydatahelps-js';
import { App } from './App.js';
 
if (window.location.hostname === "localhost") {
	MyDataHelps.setParticipantAccessToken({ "access_token": import.meta.env.VITE_PARTICIPANT_ACCESS_TOKEN, "expires_in": 21600, "token_type": "Bearer" }, "https://mydatahelps.dev/");
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App/>
    </React.StrictMode>
);