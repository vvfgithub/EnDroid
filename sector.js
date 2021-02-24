const InitTree = function (xt, yt, h) {
 
  const material = new THREE.LineBasicMaterial({ color: 0xC0C0C0, linewidth: 3});		
  const points = []; 
  const b = 0.5;
  const a = 1;
    //   const h = 100;
  const dl = 5;
  for (let i = 20; i < h; i++) {
	     y = i*b;
    	 al=a*i*Math.random();
   		 c=(h-i)*0.3;
		 
    x = Math.cos(al)*c*Math.random();
    z = Math.sin(al)*c*Math.random();
    y1=y+dl;
    points.push( new THREE.Vector3( 0, y, 0 ) );        
    points.push( new THREE.Vector3( x, y1, z ) );
    points.push( new THREE.Vector3( 0, y, 0 ) );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints( points );	
  const line = new THREE.Line( geometry, material );
  line.position.set(0, -30, 0);
  const geometry3 = new THREE.ConeBufferGeometry( h/100, h*0.5, 32 ); 
  const material3 = new THREE.MeshPhongMaterial( {color: 0xFFFAFA} ); 
  const cone = new THREE.Mesh( geometry3, material3 ); 
  cone.position.set(0, -5, 0);
  var linegroup = new THREE.Group();       
  linegroup.add( line ); 
  linegroup.add( cone );
  linegroup.position.set(xt, 0, yt);
  linegroup.rotation.y=Math.PI*Math.random();       
  scene.add( linegroup );
  return linegroup;
    }
         
    tree1 = new InitTree(-75, 70, 70);    
    tree2 = new InitTree(-70, 130, 90);    
    tree3 = new InitTree(-50, 200, 110);    
    tree4 = new InitTree(80, 150, 120);    
    tree5 = new InitTree(-20, 180, 130);    
    tree6 = new InitTree(80, 30, 80);    
            
  radius=400; segments=64;

  geometryp = new THREE.CircleGeometry( radius, segments );
  var materialp = new THREE.MeshPhongMaterial( { emissive:0xFFFFFF, emissiveIntensity:1 } );
   // F0F8FF    
  mesh = new THREE.Mesh(geometryp, materialp ); 
  mesh.position.y = -30; 
  mesh.rotation.x = -Math.PI*0.5;
  mesh.doubleSided = true;  
  scene.add( mesh );        
 	
//fence     
const geoplane1 = new THREE.PlaneGeometry( 200, 23 );
//     const matplane = new THREE.MeshBasicMaterial( {color: 0xC0C0C0, side: THREE.DoubleSide} ); 
const matplane = new THREE.MeshPhongMaterial( { emissive:0xC0C0C0, emissiveIntensity:1, side: THREE.DoubleSide});

const plane1 = new THREE.Mesh( geoplane1, matplane ); 
plane1.position.set(15,-18, -240);
var plane2 = plane1.clone();
plane2.position.set(15,-18, 260);

scene.add( plane1 );	
scene.add( plane2 );	
 	
const matplane0 = new THREE.MeshBasicMaterial( {color: 0x45322E, side: THREE.DoubleSide} ); 
const plane0 = new THREE.Mesh( geoplane1, matplane0 ); 
plane0.position.set(15,-17.5, -241);
scene.add( plane0 );

const geoplane2 = new THREE.PlaneGeometry( 500, 23 );
const plane3 = new THREE.Mesh( geoplane2, matplane ); 
plane3.position.set(-85,-18, 10);     
plane3.rotation.y=Math.PI*0.5;     
scene.add( plane3 );	
var plane4 = plane3.clone();
plane4.position.set(115,-18, 10);
scene.add( plane4 );  
   	      	      	
const geoplanesn = new THREE.PlaneGeometry( 200, 500 );
//const matplanesn = new THREE.MeshPhongMaterial( { emissive:0xF0F8FF, emissiveIntensity:1, side: THREE.DoubleSide});    
const matplanesn = new THREE.MeshBasicMaterial( { color:0xF0F8FF, side: THREE.DoubleSide});
const planesn = new THREE.Mesh( geoplanesn, matplanesn ); 
planesn.position.set(15, -29, 12);
planesn.rotation.x=Math.PI*0.5;   
scene.add(planesn);
   	      	      	