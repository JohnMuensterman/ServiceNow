

import "@servicenow/now-button";
import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';


const view = (state, {updateState}) => {
	return (
		<div><now-button label="Click Me" /></div>
		
		
	);
};

createCustomElement('x-294058-movie-quotes', {
	renderer: {type: snabbdom},
	view,
	styles
});
