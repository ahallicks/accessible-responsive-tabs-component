/**
 * Tabbed component for responsive and accessible tabs
 */

class Tabs {

	init () {

		// Add JS class to HTML
		const objDoc = document.querySelector('html');
		objDoc.classList.add('js');
		objDoc.classList.remove('no-js');

		// Loop through any tab components and add functionality
		this.tabbed = document.querySelectorAll('.tabbed');
		this.tabbed.length && this.tabbed.forEach(objEl => this.setupTabs(objEl));

		// Pop state for navigating through tabs
		this.hash = window.location.hash;
		this.popped = false;
		window.onpopstate = e => {
			if (e.state && e.state.tab) {
				this.popped = true;
				document.querySelector('a[href="' + e.state.tab + '"]').click();
			}
		};

	}

	/**
	 * Setup tabs (add aria attributes as required) to each tabbed component
	 */
	setupTabs (objTabCont) {

		const arrTablist = objTabCont.querySelector('.tabbed-tabs');
		const arrTabs = arrTablist.querySelectorAll('a');
		const arrPanels = objTabCont.querySelectorAll('.tabbed-panel');

		// Add the tablist role to the first <ul> in the .tabbed container
		arrTablist.setAttribute('role', 'tablist');

		// Add semantics are remove user focusability for each tab
		arrTabs.forEach((objTab, intI) => {

			objTab.setAttribute('role', 'tab');
			objTab.setAttribute('id', `tab${intI + 1}`);
			objTab.setAttribute('tabindex', '-1');
			objTab.parentNode.setAttribute('role', 'presentation');

			// Handle clicking of tabs for mouse users
			objTab.addEventListener('click', e => {
				e.preventDefault();
				const currentTab = arrTablist.querySelector('[aria-selected]');

				if (e.currentTarget !== currentTab) {
					this.switchTab(currentTab, e.currentTarget, arrTabs, arrPanels);
				}
			}, false);

			// Handle keydown events for keyboard users
			objTab.addEventListener('keydown', e => {

				// Get the index of the current tab in the tabs node list
				const index = Array.prototype.indexOf.call(arrTabs, e.currentTarget);

				// Work out which key the user is pressing and
				// Calculate the new tab's index where appropriate
				const dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
				if (dir !== null) {

					e.preventDefault();
					// If the down key is pressed, move focus to the open panel,
					// otherwise switch to the adjacent tab
					dir === "down" ? arrPanels[intI].focus() : arrTabs[dir] ? this.switchTab(e.currentTarget, arrTabs[dir], arrTabs, arrPanels) : void 0;

				}

			});

		});

		// Add tab panel semantics and hide them all
		arrPanels.forEach((objPanel, intI) => {

			objPanel.setAttribute('role', 'tabpanel');
			objPanel.setAttribute('tabindex', '-1');
			objPanel.setAttribute('aria-labelledby', arrTabs[intI].id);
			objPanel.setAttribute('hidden', true);

			const objPanelToggle = objPanel.querySelector('.aria-accordion--toggle');
			objPanelToggle.addEventListener('click', e => {

				const currentTab = arrTablist.querySelector('[aria-selected]');

				// Hide the current tab if it's the same parent
				const tabIndex = Array.prototype.indexOf.call(arrTabs, currentTab);
				const index = Array.prototype.indexOf.call(arrPanels, e.currentTarget.closest('.tabbed-panel'));

				objPanelToggle.setAttribute('aria-expanded', tabIndex === index ? arrPanels[tabIndex].getAttribute('hidden') ? 'true' : false : true);

				// If it's the current tab just flip the hidden
				if (tabIndex === index) {
					arrPanels[tabIndex].getAttribute('hidden') ? arrPanels[tabIndex].removeAttribute('hidden') : arrPanels[tabIndex].setAttribute('hidden', true);
				} else {
					this.switchTab(currentTab, arrTabs[index], arrTabs, arrPanels);
				}
			});

		});

		// Initially activate the first tab and reveal the first tab objPanel
		arrTabs[0].removeAttribute('tabindex');
		arrTabs[0].setAttribute('aria-selected', 'true');
		arrPanels[0].removeAttribute('hidden');

		if (this.hash !== '') {
			const objHashEl = document.querySelector('a[href="' + this.hash + '"]');
			if (objHashEl) {
				objHashEl.click();
				window.scrollTo({
					top: objHashEl.getBoundingClientRect().top,
					left: 0,
					behavior: 'smooth'
				});
			}
		}

	}

	/**
	 * Tab switching function
	 */
	switchTab(oldTab, newTab, arrTabs, arrPanels) {

		newTab.focus();

		// Make the active tab focusable by the user (Tab key)
		newTab.removeAttribute('tabindex');

		// Set the selected state
		newTab.setAttribute('aria-selected', 'true');
		oldTab.removeAttribute('aria-selected');
		oldTab.setAttribute('tabindex', '-1');

		// Get the indices of the new and old tabs to find the correct
		// tab panels to show and hide
		const index = Array.prototype.indexOf.call(arrTabs, newTab);
		const oldIndex = Array.prototype.indexOf.call(arrTabs, oldTab);
		arrPanels[oldIndex].setAttribute('hidden', true);
		arrPanels[index].removeAttribute('hidden');


		if (!this.popped) {
			const strId = arrPanels[index].id;
			history.pushState({ tab: `#${strId}` }, "", window.location.href.replace(window.location.hash, "") + `#${strId}`);
		}
		this.popped = false;

	}

}

const clsTabs = new Tabs();
clsTabs.init();
