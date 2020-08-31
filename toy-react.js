class ElementWrapper {
	constructor(type) {
		this.root = document.createElement(type);
	}

	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}

	appendChild(component) {
		this.appendChild(component.root);
	}
}

class TextWrapper {
	constructor(content) {
		this.root = document.createTextNode(content);
	}
}

export class component {
	constructor(content) {
		this.props = Object.create(null);
		this.children = [];
		this._root = null;
	}

	setAttribute(name, value) {
		this.props[name] = value;
	}

	appendChild(component) {
		this.children.push(component);
	}

	get root() {
		if (!this._root) {
			this._root = this.render().root;
		}
		return this._root;
	}
}

export function createElement(type, attributes, ...children) {
	let e;
	if (typeof type === 'string') {
		e = new ElementWrapper(type);
	} else {
		e = new type();
	}

	for (let p in attributes) {
		e.setAttribute(p, attributes[p]);
	}

	for (let child of children) {
		if (typeof child === 'string') {
			child = new TextWrapper(child);
		}
		e.appendChild(child);
	}

	return e;
}

export function render(component, parentElement) {
    parentElement.appendChild(component)
}
