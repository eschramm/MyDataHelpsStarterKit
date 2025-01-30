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

export default function ModalDashboard() {
    
	function openSurvey(surveyName: string) {
		MyDataHelps.startSurvey(surveyName);
	}

	function scanCode() {
        if (window.webkit?.messageHandlers.ScanCode) {
            window.webkit?.messageHandlers.ScanCode.postMessage('');
        }
    }

	function closeModal() {
		MyDataHelps.dismiss();
	}

	return (
		<div className='dashboard-container'>
		<Layout colorScheme="auto">
			<Card>
				<div className='card-innards modal'>
					<h1>Testing Stuff - Modal</h1>
					
					<button className='cta-button' onClick={() => { openSurvey('Full Battery Test'); }}>
						<div className='cta-button-title'>Open Survey example</div>
					</button>

					<button className='cta-button' onClick={() => { scanCode(); }}>
						<div className='cta-button-title'>Open Scan Code</div>
					</button>

					<button className='cta-button' onClick={() => { closeModal(); }}>
						<div className='cta-button-title'>Close Modal</div>
					</button>
					
				</div>
			</Card>
		</Layout>
	</div>
	);
}
