import { useState } from 'react';
import { Layout, Card } from '@careevolution/mydatahelps-ui';
import "./Dashboard.css"
import MyDataHelps from "@careevolution/mydatahelps-js";

export default function Dashboard() {
	const [hkStatusMessage, setHkStatusMessage] = useState('');
	const [isSyncing, setIsSyncing] = useState(false);

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

	function openExternalLink() {
		MyDataHelps.openExternalUrl('https://www.careevolution.com');
	}

	function checkHKStatus() {
		setIsSyncing(true);
		const myDataHelps = MyDataHelps as any;
		if (typeof myDataHelps.getAppleHealthStatus === 'function') {
			myDataHelps.getAppleHealthStatus()
				.then((status: unknown) => {
					const text = `HK status: ${JSON.stringify(status)}`;
					console.log(text);
					setHkStatusMessage(text);
				})
				.catch((error: unknown) => {
					const text = `Failed to get Apple Health status: ${JSON.stringify(error)}`;
					console.error(text);
					setHkStatusMessage(text);
				})
				.finally(() => {
					setIsSyncing(false);
				});
		} else if (window.webkit?.messageHandlers?.GetAppleHealthStatus?.postMessage) {
			window.webkit.messageHandlers.GetAppleHealthStatus.postMessage({ messageID: Date.now() });
			const text = 'Triggered webkit GetAppleHealthStatus message handler (native).';
			console.log(text);
			setHkStatusMessage(text);
			setIsSyncing(false);
		} else {
			const text = 'No Apple Health status method available on MyDataHelps or webkit handlers.';
			console.warn(text);
			setHkStatusMessage(text);
			setIsSyncing(false);
		}
	}

	return (
		<div className='dashboard-container'>
		<Layout colorScheme="auto">
			<Card>
				<div className='card-innards'>
					<h1>Testing Stuff - Main Dashboard</h1>
					<div>URL: https://qa-testing.dtp3p3eah7pnu.amplifyapp.com</div>
					<div>Repo: eschramm/MyDataHelpsStarterKit</div>
					<div>Branch: qa-testing</div>
					
					<button className='cta-button' onClick={() => { openSurvey('Full Battery Test'); }}>
						<div className='cta-button-title'>Open Survey example</div>
					</button>

					<button className='cta-button' onClick={() => { scanCode(); }}>
						<div className='cta-button-title'>Open Scan Code</div>
					</button>

					<button className='cta-button' onClick={() => { modal(); }}>
						<div className='cta-button-title'>Open in Modal</div>
					</button>

					<div className='hk-status-row'>
						<button className='cta-button' onClick={() => { checkHKStatus(); }}>
							<div className='cta-button-title'>Check HK Status</div>
						</button>
						<span className={`sync-indicator ${isSyncing ? 'enabled' : ''}`}>Syncing...</span>
					</div>

					{hkStatusMessage && (
						<div className='hk-status-message'>{hkStatusMessage}</div>
					)}

					<button className='cta-button' onClick={() => { openExternalLink(); }}>
						<div className='cta-button-title'>OpenExternalLink</div>
					</button>
					
				</div>
			</Card>
		</Layout>
	</div>
	);
}
