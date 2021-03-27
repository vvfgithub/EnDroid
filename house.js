
//house
	const groupv = new THREE.Group();       

	v=10; hm=3*v; am=11.4*v; dm=2*v; bm=10.4*v; cm=0.5*bm;
	ac=10*v; bc=9*v;
	const pointsv = [];
	
pointsv.push( new THREE.Vector3( 0, 0, 0 ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am, 0, 0 ) );

pointsv.push( new THREE.Vector3( 0, 0, 0 ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( am, 0, bm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );
pointsv.push( new THREE.Vector3( 0, 0, 0 ) );

pointsv.push( new THREE.Vector3( am, 0, 0 ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am, 0, bm ) );

	const geometryv = new THREE.BufferGeometry().setFromPoints( pointsv );	
	const materialv = new THREE.MeshBasicMaterial( {color: 0xFFFAFA, side: THREE.DoubleSide} ); 
	
	const meshv = new THREE.Mesh( geometryv, materialv ); 
	meshv.position.set(-5.7*v, 3*v, -bm*0.5);
	groupv.add( meshv );

	scene.add( groupv ); 

    const geometryv2 = new THREE.BoxGeometry( ac, 6*v, bc ); 
    const materialv2 = new THREE.MeshPhongMaterial( { emissive:0x884535, emissiveIntensity:1});    
    const cubev2 = new THREE.Mesh( geometryv2, materialv2 );
    cubev2.position.set(0, 0, 0);
    groupv.add( cubev2 );
    
    const geometryv3 = new THREE.BoxGeometry( ac, 0.2*v, 4.3*v ); 
    const materialv3 = new THREE.MeshPhongMaterial( {emissive:0xFFFAFA, emissiveIntensity:1} ); 
    const cubev3 = new THREE.Mesh( geometryv3, materialv3 );
    cubev3.position.set(0, 0.29*v, 6.7*v );
    cubev3.rotation.x=0.15;
    groupv.add( cubev3 );
    
    const geometryv4 = new THREE.BoxGeometry( am-1.4*v, v, 3*v+bm-1.3*v + 35 ); 
    const materialv4 = new THREE.MeshPhongMaterial( {emissive:0x8A9597, emissiveIntensity:0.3 } ); 
    const cubev4 = new THREE.Mesh( geometryv4, materialv4 );
    cubev4.position.set(0, -3.5*v, 1.5*v-7);
    groupv.add( cubev4 );
    
    const geometryvs = new THREE.BoxGeometry( 0.25*v, 3*v, 0.25*v ); 
    const cubevs = new THREE.Mesh( geometryvs, materialv2 );
    cubevs.position.set(3*v, -1.5*v, 8.5*v);
    groupv.add( cubevs );
    
    var cubevs1 = cubevs.clone();
    cubevs1.position.x=-4.9*v;
    groupv.add(cubevs1);
    
    var cubevs2 = cubevs.clone();
    cubevs2.position.x=4.85*v;
    groupv.add(cubevs2);
    
    var cubevs3 = cubevs.clone();
    cubevs3.position.x=-2.7*v;
    groupv.add(cubevs3);
     
    var cubevs4 = cubevs.clone();
    cubevs4.position.x=-0.7*v;
    groupv.add(cubevs4);
     
    var cubevs5 = cubevs.clone();
    cubevs5.position.x=1.2*v;
    groupv.add(cubevs5);
     
    const shapew = new THREE.Shape(); 
    shapew.moveTo( 0, 0 ); 
    shapew.lineTo( 0.5*v, 0.25*v ); 
	shapew.lineTo( v, 0.25*v ); 
	shapew.lineTo( 1.5*v, 0 ); 
	shapew.lineTo( 1.5*v, -1.4*v ); 
	shapew.lineTo( 0., -1.4*v ); 
	
	colorw=0x8A9597; //0xC0C0C0; // 0x474A51
	const geometryw = new THREE.ShapeBufferGeometry( shapew );  
	const materialw = new THREE.MeshPhongMaterial({emissive:colorw, emissiveIntensity:1, side: THREE.DoubleSide}); 	
	const meshw = new THREE.Mesh( geometryw, materialw ) ; 
	meshw.position.set(-3.5*v, 2.5*v, 4.6*v);
	groupv.add(meshw);

	var meshw2 = meshw.clone();
	meshw2.position.set(2*v, 2.5*v, 4.6*v);
	groupv.add(meshw2);

	const geoplanw = new THREE.PlaneGeometry( 1.5*v, 1.5*v );
	const matplanw = new THREE.MeshPhongMaterial( { emissive:colorw, emissiveIntensity:1});    
	const meshw3 = new THREE.Mesh( geoplanw, matplanw ); 
	meshw3.position.set(-2.8*v, -1.2*v, 4.6*v);
	groupv.add(meshw3);
	
	var meshw4 = meshw3.clone();
	meshw4.position.set(2.7*v, -1.2*v, 4.6*v);
	groupv.add(meshw4);	

	var meshw5 = meshw.clone();
	meshw5.rotation.y=-Math.PI*0.5;
	meshw5.position.x=-5.1*v;
	meshw5.position.z=1*v;
	groupv.add(meshw5);

	var meshw6 = meshw.clone();
	meshw6.rotation.y=-Math.PI*0.5;
	meshw6.position.x=-5.1*v;
	meshw6.position.z=-3*v;
	groupv.add(meshw6);

	var meshw7 = meshw.clone();
	meshw7.rotation.y=Math.PI*0.5;
	meshw7.position.x=5.1*v;
	meshw7.position.z=-1.5*v;
	groupv.add(meshw7);

	var meshw8 = meshw.clone();
	meshw8.rotation.y=Math.PI*0.5;
	meshw8.position.x=5.1*v;
	meshw8.position.z=3*v;
	groupv.add(meshw8);

	var meshw9 = meshw.clone();
	meshw9.scale.x=0.6;
	meshw9.rotation.y=Math.PI;
	meshw9.position.x=4*v;
	meshw9.position.z=-4.55*v;
	groupv.add(meshw9);

	var meshw10 = meshw.clone();
	meshw10.scale.x=0.6;
	meshw10.rotation.y=Math.PI;
	meshw10.position.x=-3.2*v;
	meshw10.position.z=-4.55*v;
	groupv.add(meshw10);

	var meshw11 = meshw.clone();
	meshw11.scale.x=0.9;
	meshw11.rotation.y=Math.PI;
	meshw11.position.x=0.75*v;
	meshw11.position.z=-7*v;
	groupv.add(meshw11);
	
	var meshw12 = meshw.clone();
	meshw12.scale.x=0.6;
	meshw12.rotation.y=-Math.PI*0.65;
	meshw12.position.x=-2*v;
	meshw12.position.z=-6.3*v;
	groupv.add(meshw12);
	
	var meshw13 = meshw.clone();
	meshw13.scale.x=0.6;
	meshw13.rotation.y=Math.PI*0.65;
	meshw13.position.x=2.5*v;
	meshw13.position.z=-5.5*v;
	groupv.add(meshw13);
	
	const shapew2 = new THREE.Shape(); 
	shapew2.moveTo( 0, 0 ); 
	shapew2.lineTo( 1.5*v, 0 ); 
	shapew2.lineTo( 1.5*v, -1.5*v ); 
	shapew2.lineTo( 0, -1.5*v ); 
	
	const geometryw2 = new THREE.ShapeBufferGeometry( shapew2 );  
	const meshw14 = new THREE.Mesh( geometryw2, materialw ) ; 
	meshw14.rotation.y=Math.PI;
	meshw14.position.set(0.7*v, -0.5*v, -7*v);
	groupv.add(meshw14);
	
	meshw15 = meshw14.clone();
	meshw15.scale.x=0.65;
	meshw15.position.set(4*v, -0.5*v, -4.55*v);
	groupv.add(meshw15);
	
	meshw16 = meshw14.clone();
	meshw16.scale.x=0.65;
	meshw16.position.set(-3.2*v, -0.5*v, -4.55*v);
	groupv.add(meshw16);
	
	const geoplanw2 = new THREE.PlaneGeometry( 0.9*v, 1.5*v );
	const matplanw2 = new THREE.MeshPhongMaterial( { emissive:colorw, emissiveIntensity:1, side: THREE.DoubleSide});    
	const meshw17 = new THREE.Mesh( geoplanw2, matplanw2 ); 
	meshw17.rotation.y=-Math.PI*0.65;
	meshw17.position.set(-2.5*v, -1.2*v, -6*v);
	groupv.add(meshw17);
	
	meshw18 = meshw14.clone();
    meshw18.rotation.y = Math.PI*0.5;
	meshw18.position.set(5.1*v, -0.5*v, -1.5*v);
	groupv.add(meshw18);
	
	meshw19 = meshw14.clone();
	meshw19.rotation.y = Math.PI*0.5;
	meshw19.position.set(5.1*v, -0.5*v, 3*v);
	groupv.add(meshw19);
	
	meshw20 = meshw14.clone();
	meshw20.rotation.y = -Math.PI*0.5;
	meshw20.position.set(-5.1*v, -0.5*v, -3*v);
	groupv.add(meshw20);
	
	
	const shaped = new THREE.Shape(); 
   	shaped.moveTo( 0, 0 ); 
   	shaped.lineTo( 1.5*v, 0 );  
   	shaped.lineTo( 1.5*v, 2.3*v );
   	shaped.lineTo( 0, 2.3*v ); 
	const geometryd = new THREE.ShapeBufferGeometry( shaped );
	const materiald = new THREE.MeshPhongMaterial({emissive:0x45322E, emissiveIntensity:1}); 		
	const meshd = new THREE.Mesh( geometryd, materiald ) ; 
	meshd.position.set(-v, -2.9*v, 4.6*v);
	groupv.add(meshd);

    meshd2 = meshd.clone();
    meshd2.rotation.y = Math.PI*0.636;
    meshd2.position.set(2.6*v, -3*v, -5*v);
    groupv.add(meshd2);

const shapeE = new THREE.Shape(); 
   	shapeE.moveTo( 0, 0 ); 
   	shapeE.lineTo( 56, 0 );  
   	shapeE.lineTo( 45, 24 );
   	shapeE.lineTo( 11, 24 ); 

const extrudeSettingsE = {
   	 steps: 2, 	depth: 60,
   	 bevelEnabled: false, 	bevelThickness: 0.1, 	
   	 bevelSize: 1, 	bevelOffset: 0, 	
   	 bevelSegments: 2 
   	 }; 
  const geoshapeE = new THREE.ExtrudeBufferGeometry( shapeE, extrudeSettingsE ); 
  const Ercer = new THREE.Mesh( geoshapeE, materialv2) ; 
  Ercer.position.set(-28, -30, -45.5);
  Ercer.rotation.x=-Math.PI*0.5;
  groupv.add(Ercer);       
	
  pointsr = [];  	
  pointsr.push( new THREE.Vector3( 0, 0, 0 ) );
  pointsr.push( new THREE.Vector3( 41.3, 0, 0 ) );
  pointsr.push( new THREE.Vector3( 20.65, 15, 25 ) );  	
  
  pointsr.push( new THREE.Vector3( 20.65, 15, 25 ) );  	
  pointsr.push( new THREE.Vector3( 20.65, 15, 50 ) );  	
  pointsr.push( new THREE.Vector3( 50, 0, 25 ) );  	
  
  pointsr.push( new THREE.Vector3( 50, 0, 25 ) );  	
  pointsr.push( new THREE.Vector3( 20.65, 15, 25 ) );  	
  pointsr.push( new THREE.Vector3( 41.3, 0, 0 ) );  	
  
  pointsr.push( new THREE.Vector3( -8.7, 0, 25 ) );  	
  pointsr.push( new THREE.Vector3( 20.65, 15, 25 ) );  	
  pointsr.push( new THREE.Vector3( 0, 0, 0 ) );  	

  pointsr.push( new THREE.Vector3( 20.65, 15, 25 ) );  	
  pointsr.push( new THREE.Vector3( 20.65, 15, 50 ) );  	
  pointsr.push( new THREE.Vector3( -8.7, 0, 25 ) );  	
  
  const geometryr = new THREE.BufferGeometry().setFromPoints( pointsr );	
  const meshr = new THREE.Mesh( geometryr, materialv ); 
  meshr.position.set(-20, 30, -75);
  groupv.add(meshr);

  const geonav = new THREE.PlaneGeometry( 40, 90 );
  const meshnav = new THREE.Mesh( geonav, materialv ); 
  meshnav.rotation.x = Math.PI*0.5;
  meshnav.rotation.y = Math.PI*0.05;
  meshnav.position.set(-70, -10, -80);
  groupv.add(meshnav);  	
	
  const geostolb = new THREE.CylinderGeometry( 1, 1, 30, 6 ); 
  const matstolb = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
  const stolb = new THREE.Mesh( geostolb, matstolb ); 
  stolb.position.set(-87, -28, -78);
  groupv.add(stolb);  	
	
  stolb2 = stolb.clone();
  stolb2.position.set(-87, -28, -40);
  groupv.add(stolb2);  	
	
  stolb3 = stolb.clone();
  stolb3.position.set(-94, -29, -125);
  groupv.add(stolb3);  	
	
  stolb4 = stolb.clone();
  stolb4.position.set(-53, -23, -125);
  groupv.add(stolb4);  	
  		
  stolb5 = stolb.clone();
  stolb5.position.set(-53, -23, -78);
  groupv.add(stolb5); 
  		
  stolb6 = stolb.clone();
  stolb6.position.set(-53, -23, -40);
  groupv.add(stolb6); 
  		
  const geostolbt = new THREE.CylinderGeometry( 0.5, 0.5, 45, 4 ); 
  const stolbt = new THREE.Mesh( geostolbt, matstolb ); 
  stolbt.rotation.z = Math.PI*0.55;
  stolbt.position.set(-73, -11, -125);
  groupv.add(stolbt);  	
  		
  const geostolbt2 = new THREE.CylinderGeometry( 0.5, 0.5, 90, 4 ); 
  const stolbt2 = new THREE.Mesh( geostolbt2, matstolb ); 
  stolbt2.rotation.x = Math.PI*0.5;
  stolbt2.position.set(-53, -8, -80);
  groupv.add(stolbt2);
  	 		
  stolbt3 = stolbt2.clone();
  stolbt3.position.set(-87, -13.5, -80);  
  groupv.add(stolbt3);	 		
  		
  pointsr2 = [];  	
  pointsr2.push( new THREE.Vector3( 0, 0, 0 ) );
  pointsr2.push( new THREE.Vector3( 32, 0, 25 ) );
  pointsr2.push( new THREE.Vector3( 10, 7, 25 ) );  	
  const geometryr2 = new THREE.BufferGeometry().setFromPoints( pointsr2 );	
  const meshr2 = new THREE.Mesh( geometryr2, materialv ); 
  meshr2.position.set(18, 0, -70);
  groupv.add(meshr2);
  
  const geoplanv = new THREE.PlaneGeometry( 100, 1.0 );
  // 0xD3D3D3
  const matplanv = new THREE.MeshPhongMaterial( { emissive:0xC0C0C0, emissiveIntensity:1, side: THREE.DoubleSide});    
  const meshplan = new THREE.Mesh( geoplanv, matplanv ); 
  meshplan.position.set(0, -7, 85);
  groupv.add(meshplan);
  
  meshplan2 = meshplan.clone();
  meshplan2.position.set(0, -29, 85);
  groupv.add(meshplan2);
    
  meshplan2a = meshplan.clone();
  meshplan2a.position.set(0, -20, 85);
  groupv.add(meshplan2a);
  
  
  meshplan3 = meshplan.clone();
  meshplan3.scale.x = 0.4;
  meshplan3.rotation.y = Math.PI*0.5;
  meshplan3.position.set(-50, -29, 65);
  groupv.add(meshplan3);
  
  meshplan3c = meshplan3.clone();  
  meshplan3c.position.set(49, -29, 65);
  groupv.add(meshplan3c);
  
  meshplan4 = meshplan3.clone();
  meshplan4.position.set(-50, -7, 65);
  groupv.add(meshplan4);
   
  meshplan4c = meshplan3.clone();
  meshplan4c.position.set(49, -7, 65);
  groupv.add(meshplan4c);
  
  
  meshplan4a = meshplan3.clone();
  meshplan4a.position.set(-50, -20, 65);
  groupv.add(meshplan4a);
   
  meshplan4d = meshplan3.clone();
  meshplan4d.position.set(49, -20, 65);
  groupv.add(meshplan4d);
   
   
  meshplan5 = meshplan.clone();
  meshplan5.scale.x = 0.35;
  meshplan5.rotation.z = Math.PI*0.5;
  meshplan5.rotation.y = Math.PI*0.5;
  meshplan5.position.set(-50, -11, 45.5);
  groupv.add(meshplan5);
    
  meshplan5b = meshplan5.clone();
  meshplan5b.position.set(49, -12, 46);
  groupv.add(meshplan5b);
  
  
  meshplan6 = meshplan.clone();
  meshplan6.scale.x = 0.33;
  meshplan6.rotation.z = Math.PI*0.5;
  meshplan6.rotation.y = Math.PI*0.5;
  meshplan6.position.set(-50, -13, 58);    
  groupv.add(meshplan6);
   
  meshplan6b = meshplan6.clone();
  meshplan6b.position.set(49, -13, 58);
  groupv.add(meshplan6b);
      
  meshplan7 = meshplan.clone();
  meshplan7.scale.x = 0.3;
  meshplan7.rotation.z = Math.PI*0.5;
  meshplan7.rotation.y = Math.PI*0.5;
  meshplan7.position.set(-50, -14, 72);    
  groupv.add(meshplan7);
   
  meshplan7b = meshplan6.clone();
  meshplan7b.position.set(49, -14, 72);
  groupv.add(meshplan7b);
   
   
  meshplan3a = meshplan.clone();
  meshplan3a.scale.x = 0.3;
  meshplan3a.rotation.z = Math.PI*0.5;
  meshplan3a.position.set(-38, -14, 85);
  groupv.add(meshplan3a);
    
  meshplan4a = meshplan3a.clone();
  meshplan3a.position.set(-17, -14, 85);
  groupv.add(meshplan4a);
    
  meshplan5a = meshplan3a.clone();
  meshplan5a.position.set(-7, -14, 85);
  groupv.add(meshplan5a);
    
  meshplan6a = meshplan3a.clone();
  meshplan6a.position.set(2.5, -14, 85);
  groupv.add(meshplan6a);
    
  meshplan7a = meshplan3a.clone();
  meshplan7a.position.set(21, -14, 85);
  groupv.add(meshplan7a);
    
  meshplan8a = meshplan3a.clone();
  meshplan8a.position.set(39, -14, 85);
  groupv.add(meshplan8a);
    
    
  groupv.position.set(10, v, -115);
 