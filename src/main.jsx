import { render } from "preact";
import "./index.css";
import { Foo } from "./Foo";

function App() {
	return (
		<div>
			<h1>Hello from Preact</h1>
			<Foo />
		</div>
	);
}

render(<App />, document.getElementById("app"));
