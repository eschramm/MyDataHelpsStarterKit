import { Layout, Card } from '@careevolution/mydatahelps-ui';
import "./Dashboard.css"
import MyDataHelps from "@careevolution/mydatahelps-js";


export default function Dashboard() {
    
	function openSurvey(surveyName: string) {
		MyDataHelps.startSurvey(surveyName);
	}

	return (
		<div className='dashboard-container'>
		<Layout colorScheme="auto">
			<Card>
				<div className='card-innards'>
					<h1>Testing Stuff</h1>
					<button onClick={() => { openSurvey('Full Battery Test'); }}>
						Open Survey example
					</button>
				</div>
			</Card>
		</Layout>
	</div>
	);
}
