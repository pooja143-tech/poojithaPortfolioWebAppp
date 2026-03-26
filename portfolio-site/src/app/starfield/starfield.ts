import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as THREE from 'three';

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
export class Starfield implements AfterViewInit {
  
  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  

  ngAfterViewInit() {
    if (typeof window === 'undefined' || !this.canvasRef?.nativeElement) return;
    

    setTimeout(() => {
      const canvas = this.canvasRef.nativeElement;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // // 🌌 Glowing Background Stars
      //     // 🌌 Background Stars
      // const starGeometry = new THREE.BufferGeometry();
      // const starCount = 1500;
      // const starPositions = [];

      // for (let i = 0; i < starCount; i++) {
      //   starPositions.push((Math.random() - 0.5) * 1000);
      //   starPositions.push((Math.random() - 0.5) * 1000);
      //   starPositions.push((Math.random() - 0.5) * 1000);
      // }

      // starGeometry.setAttribute(
      //   'position',
      //   new THREE.Float32BufferAttribute(starPositions, 3)
      // );

      // const starMaterial = new THREE.PointsMaterial({
      //   color: 0xffffff,
      //   size: 1.5,
      //   transparent: true,
      //   opacity: 0.8,
      //   blending: THREE.AdditiveBlending
      // });

      // const stars = new THREE.Points(starGeometry, starMaterial);
      // scene.add(stars);    
//'''''''''''''''''''''''''''''''''''''''''''''''''''''  

      // 🌌  colr full Background Stars
const starGeometry = new THREE.BufferGeometry();
const starCount = 1500;

const starPositions = [];
const starColors = [];

for (let i = 0; i < starCount; i++) {
  // Random positions
  starPositions.push((Math.random() - 0.5) * 1000);
  starPositions.push((Math.random() - 0.5) * 1000);
  starPositions.push((Math.random() - 0.5) * 1000);

  // Random colors (RGB between 0 and 1)
  const color = new THREE.Color();
  color.setHSL(Math.random(), 1.0, 0.5); // vibrant random hues
  starColors.push(color.r, color.g, color.b);
}

// Add attributes
starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starPositions, 3)
);
starGeometry.setAttribute(
  "color",
  new THREE.Float32BufferAttribute(starColors, 3)
);

// Material with vertex colors enabled
const starMaterial = new THREE.PointsMaterial({
  size: 1.3,
  transparent: true,
  opacity: 0.9,
  blending: THREE.AdditiveBlending,
  vertexColors: true, // ⭐ important
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);
//'''''''''''''''''''''''''''''''''''''''''''''''''''''

      // 🌠 Linear Shooting Stars
      const shootingStars: THREE.Group[] = [];
      const colors = [0xff0000, 0x0000ff, 0x00ff00, 0xffff00, 0xff69b4];

      for (let i = 0; i < 5; i++) {
        const color = colors[i % colors.length];
        const trailMaterial = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending
        });

        const trail = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
          trailMaterial
        );
        trail.rotation.x = Math.PI / 2;

        const head = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 12, 12),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending
          })
        );

        const group = new THREE.Group();
        group.add(trail);
        group.add(head);
        scene.add(group);
        shootingStars.push(group);
      }

      // 🌠 Random Shooting Stars
      const randomStars: { group: THREE.Group; velocity: THREE.Vector3 }[] = [];

      for (let i = 0; i < 20; i++) {
        const color = colors[i % colors.length];
        const trailMaterial = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });

        const trail = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
          trailMaterial
        );
        trail.rotation.x = Math.PI / 2;

        const head = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 14, 14),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending
          })
        );

        const group = new THREE.Group();
        group.add(trail);
        group.add(head);
        group.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          -20
        );

        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 1.5,
          0
        );

        scene.add(group);
        randomStars.push({ group, velocity });
      }

      // ☄️ Glowing Comets
     // ☄️ Stylized Comet with Forward-Flowing Tail
const comets: THREE.Group[] = [];

for (let i = 0; i < 3; i++) {
  let colors =[0xffff00, 0xff69b4,0x0000ff]

  const color = colors[i % colors.length];

  // Comet head
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 32),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  head.position.z = 0;

  // Reversed tail — tapered cylinder extending forward
  const tail = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.3, 6, 50, 1, true),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  tail.rotation.x = Math.PI / 2;   // Point tail forward
  tail.position.z = 3.5;           // Extend in front of head

  // Group head and tail
  const cometGroup = new THREE.Group();
  cometGroup.add(head);
  cometGroup.add(tail);
  scene.add(cometGroup);
  comets.push(cometGroup);
}

      // 🌌 Animation Loop
      let shootingX = -50;
      let cometX = -20;
      
      function animate() {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0005;
        stars.rotation.x += 0.0005;

        // Linear shooting stars
        shootingX += 0.5;
        shootingStars.forEach((star, index) => {
          const offset = index * 5;
          star.position.set(
            shootingX - offset,
            Math.sin((shootingX - offset) * 0.05) * 10,
            -20
          );
        });
        if (shootingX > 50) shootingX = -50;

        

        // Random shooting stars
        randomStars.forEach(({ group, velocity }) => {
          group.position.add(velocity);
          if (group.position.x > 100 || group.position.x < -100 ||
              group.position.y > 100 || group.position.y < -100) {
            group.position.set(
              (Math.random() - 0.5) * 100,
              (Math.random() - 0.5) * 100,
              -20
            );
          }
        });

        // Comets
        cometX += 0.5;
        comets.forEach((comet, index) => {
          const offset = index * 30;
          comet.position.set(
            cometX - offset,
            Math.cos((cometX - offset) * 0.03) * 15,
            -40
          );
          comet.rotation.set(-1, -1, -1);
        });
        if (cometX > 100) cometX = -100;

        renderer.render(scene, camera);
      }

      animate();
    }, 0);
  }
}