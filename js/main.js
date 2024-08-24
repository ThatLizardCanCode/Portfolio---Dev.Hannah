// Initialization for ES Users
import { Collapse, initMDB } from 'mdb-ui-kit';

initMDB({ Collapse });

$('#menu2').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	prependTo:'#demo2'
});