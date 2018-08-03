frameworks used:
	- react
	- bootstrap
		- jquery
		- popper
		(bootstrap needs both jquery and popper)
	- font-awesome

web-site components structure:
	- App
		- SideNav (side navigation)
		- MovieComponents (jsx to handle individual movie components)
			- MovieComponent (individual movie component)
		- AsideRight (handles search box and movie filter)
			- SearchBox	(box on top right of page, where the search and date boxes are located)
			- MovieFilter (list of filters, i.e. genre(s), min. vode, etc.)

remarks:
	- application does not work on internet explorer as there are arrow functions and other ES6 components which are not supported by IE.
	- the application displays a maximum of 20 records on the page
	- the way genres are generated is not optimal as I am calling this.forceUpdate()
		- reason is, we are fetching genres inside a fetch method which leads to data being returned from the initial fetch, but does not wait for the data from the nested request.

to run:
	navigate inside fe_challenge
	install frameworks if any of them are not saved for some reason
	run: npm start
	