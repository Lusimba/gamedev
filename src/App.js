import React, { Component } from 'react';
import * as THREE from 'three';

import 'tachyons';

class App extends Component {
  render() {
    
    const scene = new THREE.Scene();
    const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z=5;
    const renderer= new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //updating viewport
    window.addEventListener('resize', ()=>{
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();
    });
    // Game Logic
    const update=(x)=>{
      cube.rotation.x +=0.01;
      cube.rotation.y += 0.005;
    }
    //controls
    
    // create a cube
    const geometry= new THREE.BoxGeometry(1, 1, 1);
    const material= new THREE.MeshBasicMaterial({color:0xffff00, wireframe: false});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    

    //Draw Scene
    const render=()=>{
      renderer.render(scene, camera);
    };

    //run game loop (update, render, repeat)
    const GameLoop=()=>{
      requestAnimationFrame(GameLoop);
      update();
      render();
    };
    GameLoop();

    return (
      <h1 className="tc">Rotating Cube</h1>
      
    );
  }
}

export default App;
