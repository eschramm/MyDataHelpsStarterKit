import { Layout, Card } from '@careevolution/mydatahelps-ui';
import "./Dashboard.css"
import MyDataHelps from "@careevolution/mydatahelps-js";

declare global {
    interface Window {
        webkit?: {
            messageHandlers: {
                ScanCode?: {
                    postMessage: (message: string) => void;
                };
            };
        };
    }
}

export default function Dashboard() {
    
	function openSurvey(surveyName: string) {
		MyDataHelps.startSurvey(surveyName);
	}

	function scanCode() {
        if (window.webkit?.messageHandlers.ScanCode) {
            window.webkit?.messageHandlers.ScanCode.postMessage('');
        }
    }

	function modal() {
		MyDataHelps.openApplication('https://qa-testing.dtp3p3eah7pnu.amplifyapp.com/modal', { 'modal': true });
	}

	return (
		<div className='dashboard-container'>
		<Layout colorScheme="auto">
			<Card>
				<div className='card-innards'>
					<h1>Testing Stuff - Main Dashboard</h1>
					
					<button className='cta-button' onClick={() => { openSurvey('Full Battery Test'); }}>
						<div className='cta-button-title'>Open Survey example</div>
					</button>

					<button className='cta-button' onClick={() => { scanCode(); }}>
						<div className='cta-button-title'>Open Scan Code</div>
					</button>

					<button className='cta-button' onClick={() => { modal(); }}>
						<div className='cta-button-title'>Open in Modal</div>
					</button>
					
				</div>
			</Card>
		</Layout>
	</div>
	);
}
