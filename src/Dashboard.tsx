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

	return (
		<div className='dashboard-container'>
		<Layout colorScheme="auto">
			<Card>
				<div className='card-innards'>
					<h1>Testing Stuff</h1>
					
					<button className='cta-button' onClick={() => { openSurvey('Full Battery Test'); }}>
						<div className='cta-button-title'>Open Survey example</div>
					</button>

					<button className='cta-button' onClick={() => { scanCode(); }}>
						<div className='cta-button-title'>Open Scan Code</div>
					</button>
				</div>
			</Card>
		</Layout>
	</div>
	);
}
