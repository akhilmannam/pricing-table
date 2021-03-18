import React from 'react';
import Card from './Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add( faCheck, faTimes );

function App() {
	let details = [
		{	
			subscriptionType: 'Free', 
			costPerMonth: '$0/month',
			totalUsers: 'Single User',
			storageLimit: '5GB Storage',
			publicProjects: 'Unlimited Public Projects',
			access: 'Community access',
			privateProjects: 'Unlimited Private Projects',
			support: 'Dedicated Phone Support',
			subdomain: 'Free Subdomain',
			reports: 'Monthly Status Reports'
		},
		{
			subscriptionType: 'Plus', 
			costPerMonth: '$9/month',
			totalUsers: '5 Users',
			storageLimit: '50GB Storage',
			publicProjects: 'Unlimited Public Projects',
			access: 'Community access',
			privateProjects: 'Unlimited Private Projects',
			support: 'Dedicated Phone Support',
			subdomain: 'Free Subdomain',
			reports: 'Monthly Status Reports'
		},
		{
			subscriptionType: 'Pro', 
			costPerMonth: '$49/month',
			totalUsers: 'Unlimited Users',
			storageLimit: '150GB Storage',
			publicProjects: 'Unlimited Public Projects',
			access: 'Community access',
			privateProjects: 'Unlimited Private Projects',
			support: 'Dedicated Phone Support',
			subdomain: 'Unlimited Free Subdomains',
			reports: 'Monthly Status Reports'
		}
	]

	const [currentPlan, setCurrentPlan] = useState('No Plan Selected');
	let handleSelectedPlan = (type) => {
		setCurrentPlan(type);	
	}

	return (
		<section className="pricing py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						Selected Plan : {currentPlan}
					</div>
				</div>
				<div className="row">
					{
						details.map(detail =>
							<Card 
								data={detail}
								handleBtnClick={handleSelectedPlan}>
							</Card>
						)
					}
				</div>
			</div>
		</section>
	);
}

export default App;
