import React, { Component } from 'react';
import * as THREE from 'three';
import './App.css';

class App extends Component {
  render() {
    const scene = new THREE.Scene();
    const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer= new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // Game Logic
    const update=(x)=>{

    }

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
      <h1 ></h1>
      
    );
  }
}

export default App;
