// ThreePipe + GSAP:
// import {
//     ThreeViewer
// } from 'threepipe';
// import {gsap} from 'gsap';

// ThreePipe + GSAP with access to Three methods
// import * as THREE from 'threepipe';
// These ones are in root level, not in addons subfolder
// import { OrbitControls } from 'threepipe';
// import { GLTFLoader } from 'threepipe';
// // ThreeViewer == THREE.ThreeViewer

// Three + GSAP:
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three';
import { gsap } from "gsap";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3d").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
loader.load('assets/models/SM_Chair.glb',
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
camera.position.z = 5;