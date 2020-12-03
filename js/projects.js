// Gather DOM elements to create project cards
const row = document.querySelector('#projects .row');

// Array of project objects
const projects = [
	{
		title: 'React Colors',
		img: 'img/reactColors.png',
		desc:
			'This is a clone of the Material UI Colors application I built using React. It includes 9 default palettes, and allows for users to create and store their own utilizing local browser storage.',
		tech: ['react', 'js', 'css'],
		githubURL: 'https://github.com/BryantVaughn/color-palette',
		liveURL: 'https://color-palette.bryantvaughn.now.sh/',
		id: 1
	},
	{
		title: 'JS Calculator',
		img: 'img/jsCalc.png',
		desc:
			'A web browser calculator built using HTML, CSS, and JS. I built this calculator to function with both the mouse and keyboard for interaction. It can take multiple operations, but will only calculate from left-to-right.',
		tech: ['html', 'css', 'js'],
		githubURL: 'https://github.com/BryantVaughn/calculator',
		liveURL: 'https://calculator.bryantvaughn.vercel.app/',
		id: 2
	},
	{
		title: 'Etch-A-Sketch',
		img: 'img/etchASketch.png',
		desc:
			'A fun Etch-A-Sketch simulator I built to practice with DOM manipulation and event listeners. A user can draw just by moving their mouse around in the drawing area. It also allows for line color change, grid size change, and has a fun shaking animation to clear the screen.',
		tech: ['html', 'css', 'js'],
		githubURL: 'https://github.com/BryantVaughn/Etch-A-Sketch',
		liveURL: 'https://bryantvaughn.github.io/Etch-A-Sketch/',
		id: 3
	},
	{
		title: 'Employee Directory',
		img: 'img/employeeDirectory.png',
		desc:
			'A demo employee directory page that pulls 12 random users from an API, then builds the main grid of employee cards. Users can search for employees by typing an employee name into the search field. Also, the cards are clickable which will open an overlay with a more descriptive card of that employee.',
		tech: ['html', 'css', 'js'],
		githubURL: 'https://github.com/BryantVaughn/demo-employee-directory',
		liveURL: 'https://bryantvaughn.github.io/demo-employee-directory/',
		id: 4
	},
	{
		title: 'Wheel of Success',
		img: 'img/wheelOfSuccess.png',
		desc:
			'Wheel of Success is a fun word guessing game similar to Wheel of Fortune. The game randomly selects a phrase each round and the player tries guessing the word one letter at a time. But watch out, 5 wrong guesses and you lose!',
		tech: ['html', 'css', 'js'],
		githubURL: 'https://github.com/BryantVaughn/wheel-of-success',
		liveURL: 'https://bryantvaughn.github.io/wheel-of-success/',
		id: 5
	},
	{
		title: 'Grocery List',
		img: 'img/groceryList.png',
		desc:
			'This is a grocery list app I built to practice with React Hooks for state management. I designed this app for mobile devices so you can use it while shopping at the store. It utilizes browser storage so you can make your list beforehand, then access it when shopping.',
		tech: ['react', 'js', 'css'],
		githubURL: 'https://github.com/BryantVaughn/grocery-list',
		liveURL: 'https://grocery-list.bryantvaughn.now.sh/',
		id: 6
	}
];

// Helper Functions
function buildCard(project) {
	// Create components of card
	const colDiv = createElement('div', 'col-12 col-md-6 col-lg-4');
	const cardDiv = createElement('div', 'card');
	cardDiv.id = `${project.id}`;

	const img = createElement('img', 'card-img-top');
	img.alt = `${project.title} App`;
	img.src = `${project.img}`;
	const cardBody = createElement('div', 'card-body d-flex flex-column');

	// Create components of card body
	const title = addTextContent(
		createElement('h5', 'card-title'),
		`${project.title}`
	);
	const description = addTextContent(
		createElement('p', 'card-text'),
		`${project.desc}`
	);
	const visitBtn = configureBtn(
		createElement('a', 'btn btn-sm btn-outline-* visit mt-auto mb-2'),
		`${project.liveURL}`
	);
	const githubBtn = configureBtn(
		createElement('a', 'btn btn-sm btn-outline-* repo'),
		`${project.githubURL}`
	);
	addTextContent(visitBtn, 'Visit');
	addTextContent(githubBtn, 'Repo');

	// Append items to card and col
	const bodyItems = [title, description, visitBtn, githubBtn];
	appendItems(cardBody, bodyItems);

	const cardItems = [img, cardBody];
	appendItems(cardDiv, cardItems);

	appendItems(colDiv, [cardDiv]);

	return colDiv;
}

function createElement(element, className) {
	const newElement = document.createElement(element);
	newElement.className = className;
	return newElement;
}

function configureBtn(btn, href) {
	btn.href = href;
	btn.target = '_blank';
	return btn;
}

function addTextContent(element, text) {
	element.textContent = text;
	return element;
}

function appendItems(parentNode, items) {
	items.forEach((item) => {
		parentNode.appendChild(item);
	});
}

// Event callbacks
function addProjectCards() {
	projects.map((project) => {
		const card = buildCard(project);
		appendItems(row, [card]);
	});
}

// Event listeners
document.addEventListener('DOMContentLoaded', addProjectCards);
