import rollupNodeResolve from "rollup-plugin-node-resolve";

export default {
	input: "es6.js",
	plugins: [
		rollupNodeResolve({ jsnext: true, main: true })
	],
	output: [
		{
			file: "bundle.js",
			format: "iife",
			outro: `
window.createOCSPResp = createOCSPResp;
window.verifyOCSPResp = verifyOCSPResp;
window.parseCAbundle = parseCAbundle;
window.handleFileBrowse = handleFileBrowse;
window.handleCABundle = handleCABundle;
window.handleHashAlgOnChange = handleHashAlgOnChange;
window.handleSignAlgOnChange = handleSignAlgOnChange;

function context(name, func) {}`
		},
		{
			file: "../../test/ocspResponseComplexExample.js",
			format: "es",
			intro: `const WebCrypto = require("node-webcrypto-ossl");
const webcrypto = new WebCrypto();`,
			outro: `const assert = require("assert");
setEngine("newEngine", webcrypto, new CryptoEngine({ name: "", crypto: webcrypto, subtle: webcrypto.subtle }));`,
		},
		{
			file: "../../test/browser/ocspResponseComplexExample.js",
			format: "es"
		}
	]
};