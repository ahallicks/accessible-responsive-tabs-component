module.exports = {
	"root": true,
	"env": {
		"es6": true,
		"browser": true,
		"commonjs": true,
	},
	"extends": [
		"eslint:recommended",
	],
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module"
	},
	"globals": {
		"BUNDLED": true,
		"VERSION": true
	},
	"rules": {
		"arrow-parens": ["error", "as-needed"],
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"comma-dangle": ["error", "never"],
		"comma-spacing": "error",
		"comma-style": "error",
		"eqeqeq": ["error", "smart"],
		"eol-last": "error",
		"indent": ["error", "tab"],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"linebreak-style": ["error", "unix"],
		"no-array-constructor": "error",
		"no-case-declarations": "warn",
		"no-console": "off",
		"no-duplicate-imports": "error",
		"no-empty": ["error", { "allowEmptyCatch": true }],
		"no-extend-native": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
		"no-template-curly-in-string": "error",
		"no-trailing-spaces": "error",
		"no-unused-vars": ["error", { "vars": "local", "args": "none" }],
		"no-var": "error",
		"object-curly-spacing": "error",
		"object-shorthand": "error",
		"prefer-const": ["error", { "destructuring": "all" }],
		"prefer-destructuring": "warn",
		"quotes": ["error", "single", { "avoidEscape": true }],
		"semi": ["error", "always"],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"template-curly-spacing": "error",
		"jsdoc/check-alignment": 1, // Recommended
		"jsdoc/check-indentation": 1,
		"jsdoc/check-param-names": 1, // Recommended
		"jsdoc/check-syntax": 1,
		"jsdoc/check-types": 1, // Recommended
		"jsdoc/implements-on-classes": 1, // Recommended
		"jsdoc/match-description": 1,
		"jsdoc/newline-after-description": 1, // Recommended
		"jsdoc/no-undefined-types": 1, // Recommended
		"jsdoc/require-description": 1,
		"jsdoc/require-description-complete-sentence": 1,
		"jsdoc/require-example": 0,
		"jsdoc/require-hyphen-before-param-description": 0,
		"jsdoc/require-jsdoc": 1, // Recommended
		"jsdoc/require-param": 1, // Recommended
		"jsdoc/require-param-description": 1, // Recommended
		"jsdoc/require-param-name": 1, // Recommended
		"jsdoc/require-param-type": 1, // Recommended
		"jsdoc/require-returns": 1, // Recommended
		"jsdoc/require-returns-check": 1, // Recommended
		"jsdoc/require-returns-description": 1, // Recommended
		"jsdoc/require-returns-type": 1, // Recommended
		"jsdoc/valid-types": 1 // Recommended
	},
	"plugins": [
		"jsdoc"
	]
};
