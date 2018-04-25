import React, { Component } from 'react';
import Panel from './Panel'
import PanelHeading from './PanelHeading';
import PanelLeftHeading from './PanelLeftHeading';
import PanelRightHeading from './PanelRightHeading';

class PanelWithLabel extends Component {
	render() {
		const { PanelTitle, Label } = this.props;
		return (
			<Panel>
				<PanelLeftHeading>
					<PanelHeading> 
						<div className = "pull-left">
                		    <h6 class= "panel-title inline-block txt-dark">{PanelTitle}</h6>
              			</div>
             				   <div className="clearfix">
	         			   </div>
							</PanelHeading>
					</PanelLeftHeading>
					<PanelRightHeading>
						<PanelHeading> 
							<div className = "pull-right">
								<span class ="label label-info capitalize-font inline-block ml-10">{Label}</span>
							</div>
								<div className="clearfix">
							</div>
						</PanelHeading>
					</PanelRightHeading>

			</Panel>	
		);
	}
}

export default Panel;
