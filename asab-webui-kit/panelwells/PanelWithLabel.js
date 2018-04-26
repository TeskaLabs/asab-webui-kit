import React, { Component } from 'react';
import Panel from './Panel'
import PanelLeftHeading from './PanelLeftHeading';
import PanelRightHeading from './PanelRightHeading';

class PanelWithLabel extends Component {
	render() {
		const { PanelTitle, Label } = this.props;
		return (
			<Panel>
				<PanelLeftHeading>
						<div className = "pull-left">
                		    <h6 class= "panel-title inline-block txt-dark">{PanelTitle}</h6>
              			</div>
					</PanelLeftHeading>
					<PanelRightHeading>
							<div className = "pull-right">
								<span class ="label label-info capitalize-font inline-block ml-10">{Label}</span>
							</div>
					</PanelRightHeading>

			</Panel>	
		);
	}
}

export default Panel;
