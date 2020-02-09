import "./styles.css";
import * as components from "./components";

console.log(components.helloWorld("Bobby", "Rude"));
console.log(components.addEm(4, 20));

document.getElementById("app").innerHTML = `
<div>
  Check the console<br>Expected results: "Bobby Rude", 24
</div>
`;
