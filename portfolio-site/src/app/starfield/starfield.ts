
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THRee from 'three';

@Component({
  selector: 'app-starfield',
   standalone: true,
  template: `<canvas #canvas></canvas>`,
  styles: [`
    canvas {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }
  `]

})
export class Starfield implements AfterViewInit{
   @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const renderer = new THRee.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THRee.Scene();
    const camera = new THRee.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 🌌 Glowing Particles (Stars)
    const starGeometry = new THRee.BufferGeometry();
    const starCount = 1500;
    const starPositions = [];
 for (let i = 0; i < starCount; i++) {
      starPositions.push((Math.random() - 0.5) * 1000);
      starPositions.push((Math.random() - 0.5) * 1000);
      starPositions.push((Math.random() - 0.5) * 1000);
    }

    starGeometry.setAttribute('position', new THRee.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THRee.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      blending: THRee.AdditiveBlending
    });

    const stars = new THRee.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 🌠 Colorful Shooting Star
    const shootingStar = new THRee.Mesh(
      new THRee.SphereGeometry(0.3, 8, 8),
      new THRee.MeshBasicMaterial({ color: 0xff00ff })
    );
    scene.add(shootingStar);
 let shootingX = -50;

    function animate() {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.0005;

      // Shooting star motion
      shootingX += 0.5;
      shootingStar.position.set(shootingX, Math.sin(shootingX * 0.05) * 10, -20);
      if (shootingX > 50) shootingX = -50;

      renderer.render(scene, camera);
    }

    animate();
  }


}
