class Board {
	constructor(scene) {
		this.width = 10;
		this.length = 10;
		this.scene = scene;
		this.texturePath = "res/board.svg";
		this.board;
		this.wireframe;
	}
	create() {
		var geometry = new THREE.PlaneGeometry(this.width, this.length);
		var wireframe = new THREE.WireframeGeometry(geometry);
		this.wireframe = new THREE.LineSegments(wireframe);
		var texture = new THREE.TextureLoader().load(this.texturePath);
		var material = new THREE.MeshBasicMaterial({
			map: texture
		});
		this.board = new THREE.Mesh(geometry, material);
	}
	add() {
		scene.add(this.board);
		scene.add(this.wireframe);
	}
	rotate(amount, axis, add = true) {
		if (add) {
			this.board.rotation[axis] += amount;
			this.wireframe.rotation[axis] += amount;
		} else {
			this.board.rotation[axis] = amount;
			this.wireframe.rotation[axis] = amount;
		}
	}
}