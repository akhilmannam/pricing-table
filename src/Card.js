import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props){
    return(
        <div className="col-lg-4 col-sm-12">
            <div className="card mt-2">
				<div className="card-body">
					<h5 className="card-title text-muted text-uppercase text-center">{props.data.subscriptionType}</h5>
					<h6 className="card-price text-center">{props.data.costPerMonth}</h6>
					<hr></hr>
					<ul className="fa-ul">
						<li><span className = "fa-li"><FontAwesomeIcon icon = "check" /></span>{ props.data.totalUsers }</li>
						<li><span className = "fa-li"><FontAwesomeIcon icon = "check" /></span>{ props.data.storageLimit }</li>
						<li><span className = "fa-li"><FontAwesomeIcon icon = "check" /></span>{ props.data.publicProjects }</li>
						<li><span className = "fa-li"><FontAwesomeIcon icon = "check" /></span>{ props.data.access }</li>
						<li 
							className = { props.data.subscriptionType === 'Free' ? 'text-muted' : '' }>
							<span className="fa-li">
								<FontAwesomeIcon icon = {props.data.subscriptionType === 'Free' ? 'times' : 'check'} />
							</span>
							{ props.data.privateProjects }
						</li>
						<li 
							className = { props.data.subscriptionType === 'Free' ? 'text-muted' : '' }>
							<span className = "fa-li">
								<FontAwesomeIcon icon = {props.data.subscriptionType === 'Free' ? 'times' : 'check'} />
							</span>
							{ props.data.support }
						</li>
						<li 
							className = { props.data.subscriptionType === 'Free' ? 'text-muted' : '' }>
							<span className = "fa-li">
								<FontAwesomeIcon icon = {props.data.subscriptionType === 'Free' ? 'times' : 'check'} />
							</span>
							{ props.data.subdomain }
						</li>
						<li 
							className = { (props.data.subscriptionType === 'Plus') || (props.data.subscriptionType === 'Free') ? 'text-muted' : '' }>
							<span className = "fa-li">
								<FontAwesomeIcon icon = { (props.data.subscriptionType === 'Plus') || (props.data.subscriptionType === 'Free') ? 'times' : 'check' } />
							</span>
							{ props.data.reports }
						</li>
					</ul>
					<a href="#" className="btn btn-block btn-primary text-uppercase" onClick={() => props.handleBtnClick(props.data.subscriptionType)}>Button</a>
				</div>
            </div>
        </div>
    )
}

export default Card;