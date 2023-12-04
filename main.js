import * as THREE from 'three';
import { OrbitControls } from 'THREE/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';  
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { GUI } from 'dat.gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Cubo
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshNormalMaterial({wireframe: true});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

//Cilindro
//const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32, 5);
//const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
//const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//cylinder.position.x = 2;
//scene.add(cylinder);

//Caixa arredondada
//const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
//const roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
//const roundedBoxMesh = new THREE.Mesh( roundedBoxGeometry, roundedBoxMaterial);
//roundedBoxMesh.position.x = -2;
//scene.add(roundedBoxMesh);

//Bule de chá
//const teapotGeometry = new TeapotGeometry(0.5, 8);
//const teapotMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
//const teapotMesh = new THREE.Mesh(teapotGeometry, teapotMaterial);
//teapotMesh.position.x = 4;
//scene.add(teapotMesh);


//Esfera
//const sphereGeometry = new THREE.SphereGeometry( 1 , 32, 32);
//const sphereMaterial = new THREE.MeshNormalMaterial({wireframe: true});
//const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial);
//sphere.position.x = -4;
//scene.add(sphere);

//Inicializamos o dat.gui
// const gui = new GUI();
// gui.add(cube.rotation, 'x', 0, Math.PI).name('Rotação eixo X');
// gui.add(cube.rotation, 'y', 0, Math.PI).name('Rotação eixo Y');
// gui.add(cube.rotation, 'z', 0, Math.PI).name('Rotação eixo Z');
// gui.add(cube.scale, 'x', 0, 2).name('Escala eixo X');
// gui.add(cube.scale, 'y', 0, 2).name('Escala eixo Y');
// gui.add(cube.scale, 'z', 0, 2).name('Escala eixo Z');
// gui.add(cube.material, 'wireframe');


//dat.gui em pastas
// const geometryFolder = gui.addFolder('Mesh Geometry');
// geometryFolder.open();
// const rotationFolder = geometryFolder.addFolder('Rotation');
// rotationFolder.add(cube.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
// rotationFolder.add(cube.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
// rotationFolder.add(cube.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
// const scaleFolder = geometryFolder.addFolder('Scale');
// scaleFolder.add(cube.scale, 'x', 0, 2).name('Scale X Axis');
// scaleFolder.add(cube.scale, 'y', 0, 2).name('Scale Y Axis');
// scaleFolder.add(cube.scale, 'z', 0, 2).name('Scale Z Axis');
// const materialFolder = gui.addFolder('Mesh Material');
// materialFolder.add(cube.material, 'wireframe');

// const groundGeometry = new THREE.BoxGeometry(8, 0.5, 8);
// const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xfafafa });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.receiveShadow = true;
// groundMesh.position.y = -2;



// set up red box mesh
// const bg1 = new THREE.BoxGeometry(1, 1, 1);
// const bm1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
// const boxMesh1 = new THREE.Mesh(bg1, bm1);
// boxMesh1.castShadow = true;
// boxMesh1.position.x = -2;

// set up green box mesh
// const bg2 = new THREE.BoxGeometry(1, 1, 1);
// const bm2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
// const boxMesh2 = new THREE.Mesh(bg2, bm2);
// boxMesh2.castShadow = true;
// boxMesh2.position.x = 0;

// set up blue box mesh
// const bg3 = new THREE.BoxGeometry(1, 1, 1);
// const bm3 = new THREE.MeshPhongMaterial({ color: 0x0000ff });
// const boxMesh3 = new THREE.Mesh(bg3, bm3);
// boxMesh3.castShadow = true;
// boxMesh3.position.x = 2;

// set up ambient light
// const al = new THREE.AmbientLight(0xffffff, 0.5);


// const mainGroup = new THREE.Group();
// mainGroup.position.y = 0.5;

// mainGroup.add(groundMesh);
// mainGroup.add(boxMesh1);
// mainGroup.add(boxMesh2);
// mainGroup.add(boxMesh3);
// mainGroup.add(al);
//  scene.add(mainGroup);

// // set up ambient light gui
// const gui = new GUI();
// const alFolder = gui.addFolder('ambient light');
// const alSettings = { color: al.color.getHex() };
// alFolder.add(al, 'visible');
// alFolder.add(al, 'intensity', 0, 1, 0.1);
// alFolder
//   .addColor(alSettings, 'color')
//   .onChange((value) => al.color.set(value));


// // setup directional light + helper
// const dl = new THREE.DirectionalLight(0xffffff, 0.5);
// use this for YouTube thumbnail
// dl.position.set(0, 2, 2);
// dl.castShadow = true;
// const dlHelper = new THREE.DirectionalLightHelper(dl, 3);
// mainGroup.add(dl);
// mainGroup.add(dlHelper);

// // set up directional light gui
// const dlSettings = {
//   visible: true,
//   color: dl.color.getHex(),
// };
// dlHelper.visible = false;
// const dlFolder = gui.addFolder('directional light');
// dlFolder.add(dlSettings, 'visible').onChange((value) => {
//   dl.visible = value;
// });
// dlFolder.add(dl, 'intensity', 0, 3, 0.25);
// dlFolder.add(dl.position, 'y', 1, 4, 0.5);
// dlFolder
//   .addColor(dlSettings, 'color')
//   .onChange((value) => dl.color.set(value));
// dlFolder.add(dlHelper, 'visible').name('Helper');

// // set up spot light + helper
// const sl = new THREE.SpotLight(0x00ff00, 1, 8, Math.PI / 8, 0);
// sl.position.set(0, 2, 2);
// const slHelper = new THREE.SpotLightHelper(sl);
// mainGroup.add(sl, slHelper);

// // set up spot light gui
// const slSettings = {
//     visible: true,
// };
// slHelper.visible = false;
// const slFolder = gui.addFolder('spot light');
// slFolder.add(slSettings, 'visible').onChange((value) => {
//     sl.visible = value;
// });
// slFolder.add(sl, 'intensity', 0, 4, 0.5);
// slFolder.add(sl, 'angle', Math.PI / 16, Math.PI / 2, Math.PI / 16);
// slFolder.add(slHelper, 'visible').name('Helper');



// const pl = new THREE.PointLight(0xffffff, 1, 8, 2);
// pl.position.set(2, 2, 2);
// const plHelper = new THREE.PointLightHelper(pl, 0.5);
// mainGroup.add(pl, plHelper);

// // set up point light gui
// const plSettings = {
//     visible: true,
//     color: pl.color.getHex(),
// };
// plHelper.visible = false;
// const plFolder = gui.addFolder('point light');
// plFolder.add(plSettings, 'visible').onChange((value) => {
//     pl.visible = value;
// });
// plFolder.add(pl, 'intensity', 0, 5, 0.25);
// plFolder.add(pl.position, 'x', -2, 4, 0.5);
// plFolder.add(pl.position, 'y', -2, 4, 0.5);
// plFolder.add(pl.position, 'z', -2, 4, 0.5);
// plFolder
//     .addColor(plSettings, 'color')
//     .onChange((value) => pl.color.set(value));
// plFolder.add(plHelper, 'visible').name('Helper');

// Part 1
const spaceTexture = new THREE.TextureLoader().load('./assets/space.jpeg');
spaceTexture.wrapS = THREE.RepeatWrapping;
spaceTexture.wrapT = THREE.RepeatWrapping;
spaceTexture.repeat.set(2, 2);
scene.background = spaceTexture;

const uvTexture = new THREE.TextureLoader().load('./assets/uv.png');
const crateTexture = new THREE.TextureLoader().load('./assets/crate.png');
const earthTexture = new THREE.TextureLoader().load('./assets/earth.jpeg');
const brickTexture = new THREE.TextureLoader().load('./assets/brick.jpeg');



// Part 1.5
// const ge0 = new THREE.BoxGeometry(7, 7, 7);
// const me0 = new THREE.MeshBasicMaterial({
//     map: uvTexture,
// });
// const boxMe0 = new THREE.Mesh(ge0, me0);
// boxMe0.position.x = -9;
// boxMe0.position.y = -5;
// scene.add(boxMe0);

// const ge1 = new THREE.BoxGeometry(7, 7, 7);
// const me1 = new THREE.MeshBasicMaterial({
//     map: crateTexture,
// });
// const boxMe1 = new THREE.Mesh(ge1, me1);
// boxMe1.position.x = 0;
// boxMe1.position.y = -5;
// scene.add(boxMe1);

// const ge2 = new THREE.BoxGeometry(7, 7, 7);
// const me2 = new THREE.MeshBasicMaterial({
    // map: earthTexture,
//     map: brickTexture,
// });
// const boxMe2 = new THREE.Mesh(ge2, me2);
// boxMe2.position.x = 9;
// boxMe2.position.y = -5;
// scene.add(boxMe2);

// const ge3 = new THREE.SphereGeometry(4);
// const me3 = new THREE.MeshBasicMaterial({
//     map: uvTexture,
// });
// const sphereMe3 = new THREE.Mesh(ge3, me3);
// sphereMe3.position.x = -9;
// sphereMe3.position.y = 5;
// scene.add(sphereMe3);

// const ge4 = new THREE.SphereGeometry(4);
// const me4 = new THREE.MeshBasicMaterial({
//     map: crateTexture,
// });
// const sphereMe4 = new THREE.Mesh(ge4, me4);
// sphereMe4.position.x = 0;
// sphereMe4.position.y = 5;
// sphereMe4.rotation.y = -Math.PI / 2;
// scene.add(sphereMe4);

// const ge5 = new THREE.SphereGeometry(4);
// const me5 = new THREE.MeshBasicMaterial({
    // map: earthTexture,
//     map: brickTexture,
// });
// const sphereMe5 = new THREE.Mesh(ge5, me5);
// sphereMe5.position.x = 9;
// sphereMe5.position.y = 5;
// scene.add(sphereMe5);

const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
const planeMaterial = new THREE.MeshNormalMaterial({color: 0xffffff});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);


plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);


const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshNormalMaterial({color: 0xff0000});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


cube.position.x = -9;
cube.position.y = 3;
cube.position.z = 0;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshNormalMaterial({color: 0x7777ff});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphere.position.x = 20;
sphere.position.y = 0;
sphere.position.z = 2;
scene.add(sphere);

const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 20);
const cylinderMaterial = new THREE.MeshNormalMaterial({color: 0x77ff77});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

cylinder.position.set(0, 0, 1);

scene.add(cylinder);


// position and point the camera to the center of the scene
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);


const ambientLight = new THREE.AmbientLight(0x0c0c0c);
scene.add(ambientLight);


const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);

scene.add(spotLight);

// call the render function
var step = 0;
var scalingStep = 0;

var controle = new function () {
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
    this.scalingSpeed = 0.03;
};

const gui = new GUI();
gui.add(controle, 'rotationSpeed', 0, 0.5);
gui.add(controle, 'bouncingSpeed', 0, 0.5);
gui.add(controle, 'scalingSpeed', 0, 0.5);


const controls = new OrbitControls(camera, renderer.domElement);

const stats = Stats();
document.body.appendChild(stats.dom);

// camera.position.z = 3;

// const controls = new OrbitControls(camera, renderer.domElement);

// const stats = Stats();
// document.body.appendChild(stats.dom);

const animate = () => {

    requestAnimationFrame(animate);

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    cube.rotation.x += controle.rotationSpeed;
    cube.rotation.y += controle.rotationSpeed;
    cube.rotation.z += controle.rotationSpeed;

    step += controle.bouncingSpeed;
    sphere.position.x = 20 + ( 10 * (Math.cos(step)));
    sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));


    scalingStep += controle.scalingSpeed;
    var scaleX = Math.abs(Math.sin(scalingStep / 4));
    var scaleY = Math.abs(Math.cos(scalingStep / 5));
    var scaleZ = Math.abs(Math.sin(scalingStep / 7));
    cylinder.scale.set(scaleX, scaleY, scaleZ);

    stats.update();
    controls.update();

    renderer.render( scene, camera );
    
}

animate();