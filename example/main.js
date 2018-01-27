import App from './App.html'
import './main.css'
import jSvelte from '../../jSvelte/index.js'

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

window.app = app;
jSvelte = jSvelte;

export default app;
