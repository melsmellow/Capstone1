new TypeIt("#txt-me", {
	strings: ["Hi I'm Mel!"],
	speed: 60,
	waitUntilVisible: true,
}).go();

new TypeIt("#txt-me2", {
	speed: 50,
	startDelay: 1600
})
.type('A Full-stack Web Developer.', {delay: 400})
.go();



