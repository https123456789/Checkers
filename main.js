var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("game").appendChild(renderer.domElement);

// Globals
var turn = 0;

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var board = new Board(scene);
board.create();
board.add();

function update() {
	requestAnimationFrame(update);
	cube.rotation.x += 0.01;
	cube.rotation.z += 0.01;
	if (turn == 0) {
		board.rotate((Math.PI / 180) * 0, "z", false);
	} else {
		board.rotate((Math.PI / 180) * 90, "z", false);
	}
	renderer.render(scene, camera);
}

function start() {
	board.rotate(-1, "x", false);
	camera.position.z = 10;
	update();
}

start();