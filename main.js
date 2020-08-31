import { createElement, component, render } from './toy-react';

class MyComponent extends component {
    render() {
        return <div>my component</div>
    }
}

render(
	<MyComponent id="a" class="c">
		<div>123</div>
		<div></div>
	</MyComponent>,
	document.body
);
