/**
 * Tabbed component for responsive and accessible tabs
 */

class Tabs {

	init() {

		const objDoc = document.querySelector('html');
		objDoc.classList.add('js');
		objDoc.classList.remove('no-js');

	}

}

const clsTabs = new Tabs();
clsTabs.init();
