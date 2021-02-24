const scene = new THREE.Scene();	   	       
const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );        
camera.lookAt (new THREE.Vector3(0, 0, 0));        
const controls = new THREE.OrbitControls (camera, renderer.domElement);
controls.maxPolarAngle=Math.PI*0.5;
//controls.maxDistance=1000;
 //      controls.enablePan=true;
//  	   controls.pan(0, 200);
      { 
 const color = 0xFFFFFF; 
 const intensity = 0.25;
//        const light = new THREE.DirectionalLight(color, intensity);
 const light = new THREE.PointLight(color, intensity);
 light.position.set(0, 1000, -1000);
 scene.add(light);
      }     