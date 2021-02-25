function addsphere(geometry, idcolor, x,y,z) {
         const material = new THREE.MeshPhongMaterial({
         			emissive:idcolor, emissiveIntensity:1});
         const sphere = new THREE.Mesh(geometry, material);
//         scene.add(sphere);
         sphere.position.set(x, y, z);
         return sphere;
       }   

	const groupsn = new THREE.Group();       

	xs=-25; zs=-25;
	ds=0.05;       
	const geometrysn = new THREE.SphereBufferGeometry( 6.0, 32, 32 ); 
	const spheresn = addsphere(geometrysn, 0xD3D3D3, 0, -22, 0);
	groupsn.add(spheresn);
	const geometrysn2 = new THREE.SphereBufferGeometry( 4.0, 32, 32 ); 
	const spheresn2 = addsphere(geometrysn2, 0xD3D3D3, 0, -14, 0);
	groupsn.add(spheresn2);
	const geometrysn3 = new THREE.SphereBufferGeometry( 3, 32, 32 ); 	
	const spheresn3 = addsphere(geometrysn3, 0xD3D3D3, 3, 32, 32);	
	spheresn3.position.set(0, -8, 0);
	const group = new THREE.Group();       
	group.add(spheresn3);

	const geometrysn4 = new THREE.SphereBufferGeometry( 2, 32, 32 ); 

	const spheresn4 = addsphere(geometrysn4, 0xD3D3D3, 5, -14+ds, 0);
	const spheresn5 = addsphere(geometrysn4, 0xD3D3D3, -5, -14-ds, 0);
	groupsn.add(spheresn4);
	groupsn.add(spheresn5);

	const spheresn6 = addsphere(geometrysn4, 0xD3D3D3, 5, -26-ds, 0);
	const spheresn7 = addsphere(geometrysn4, 0xD3D3D3, -5, -26+ds, 0);
	groupsn.add(spheresn6);
	groupsn.add(spheresn7);

	   const radialSegments=16;
	   const radiusc=0.5;
	   const heightc=3;
	   const geometryc = new THREE.ConeBufferGeometry(radiusc, heightc, radialSegments);
	   
	const materialc = new THREE.MeshBasicMaterial( {color: 0xFF0000} ); 
	   con = new THREE.Mesh(geometryc, materialc ); 
	   con.position.set(0, -7.6, 4); 
	   con.rotation.x = Math.PI*0.45;  
	group.add(con);
	   
	const geometryt = new THREE.CylinderBufferGeometry(  1.8, 2.7, 4, 32 ); 
	   const materialt = new THREE.MeshPhongMaterial( {emissive:0x633A34, emissiveIntensity:1 } ); 
	   const cylindert = new THREE.Mesh( geometryt, materialt );
	   cylindert.position.set(-0.5, -4, -1);
	   cylindert.rotation.x=-0.3;
	   cylindert.rotation.z=0.1;
	group.add(cylindert);

	geometrye = new THREE.CircleGeometry( 0.3, 16 );
	var materiale = new THREE.MeshBasicMaterial( { color:000000} );
	eyes = new THREE.Mesh(geometrye, materiale ); 
	eyes.position.set(1.1,-7,3); 
	group.add(eyes);
	eyes2 = new THREE.Mesh(geometrye, materiale ); 
	eyes2.position.set(-1.1,-7,3); 
	group.add(eyes2);

	const curve = new THREE.EllipseCurve(	
		   0, 0, // ax, aY 	
		   1.1, 0.7, // xRadius, yRadius 	
		   0, Math.PI, // aStartAngle, aEndAngle 	
		   false, // aClockwise 	
		   0 // aRotation 
		   ); 
const pointsm = curve.getPoints( 5 ); 
const geometrym = new THREE.BufferGeometry().setFromPoints( pointsm );
const materialm = new THREE.LineBasicMaterial( { color : 0x000000, linewidth: 1 } );
const mouth = new THREE.Line( geometrym, materialm );	   
mouth.rotation.x=Math.PI;
mouth.position.set(0, -8.3, 2.9);
group.add(mouth);

groupsn.add(group);
//groupsn.position.set(xs+20, -2.0, zs+50);
groupsn.rotation.y=Math.PI*0.9;

//машина     	      	      	
const mash = new THREE.Group();
const matmash = new THREE.MeshPhongMaterial( {emissive:0xC34D0A, emissiveIntensity:1 } ); 

const shapeM = new THREE.Shape(); 
v=3.5;
shapeM.moveTo( 0, 0 );
shapeM.lineTo( v, v );
shapeM.lineTo( v, 2*v );
shapeM.lineTo( 0, 3*v );

const extrudeSettingsM = {
 	 steps: 2, 	depth: 12,
 	 bevelEnabled: false, 	bevelThickness: 0.1, 	
 	 bevelSize: 1, 	bevelOffset: 0, 	
 	 bevelSegments: 2 
 	 }; 
const geoshapeM = new THREE.ExtrudeBufferGeometry( shapeM, extrudeSettingsM ); 
const mash0 = new THREE.Mesh( geoshapeM, matmash) ; 
mash0.position.set(-6, -3, 0);
mash0.rotation.y=Math.PI*0.5;
mash.add(mash0); 

const geomashc = new THREE.CylinderBufferGeometry(  0.4, 0.4, 10, 8 );
const mash1 = new THREE.Mesh( geomashc, matmash );
mash1.position.y+=8;
mash1.position.x+=5;
mash1.position.z-=5;
mash1.rotation.x=-Math.PI*0.25;
mash.add(mash1);
mash2=mash1.clone();
mash2.position.x-=10;
mash.add(mash2);
mash.position.set(0, -25, 10);
groupsn.add( mash );

//groupsn.position.set(xs+20, -2.0, zs+50);
//groupsn.position.set(83.7, -2.0, -162.2);
groupsn.position.set(-2.26, -2.0, 28.0 );

scene.add( groupsn );