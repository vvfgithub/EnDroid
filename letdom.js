//LetDom     	      	      	
     const groupLetD = new THREE.Group();       
     const matLetD = new THREE.MeshPhongMaterial( { emissive:0x884535, emissiveIntensity:1});
     
     const matLetDF = new THREE.MeshBasicMaterial( {color: 0xC0C0C0} ); 
     const geoLetDF = new THREE.BoxGeometry( 120, 3, 60 ); 
     const cubeLetDF = new THREE.Mesh( geoLetDF, matLetDF );
     cubeLetDF.position.set(-22, -30, 0);
     groupLetD.add( cubeLetDF );
     
     const geoPlLetD = new THREE.PlaneGeometry( 60, 60 );
     const matPlLetD = new THREE.MeshBasicMaterial( {color: 0xFFFAFA, side: THREE.DoubleSide} ); 
     const planeLetD = new THREE.Mesh( geoPlLetD, matPlLetD ); 
     planeLetD.position.set(4, 5, 0);
     planeLetD.rotation.x=Math.PI*0.5;
     planeLetD.rotation.y=-Math.PI*0.04;
     var planeLetD2 = planeLetD.clone();
     planeLetD2.rotation.y=Math.PI*0.1;
     planeLetD2.position.x-=58;
     planeLetD2.position.y-=6;
     
     groupLetD.add( planeLetD );
     groupLetD.add( planeLetD2 );
         
     h1=37; h2=31; a1=53;      
     const shapeL = new THREE.Shape(); 
     shapeL.moveTo( 0, 0 ); 
     shapeL.lineTo( a1, 0 ); 
     shapeL.lineTo( a1, h2 ); 
     shapeL.lineTo( 0, h1 ); 
     shapeL.lineTo( 0, 0 ); 
     
     const extrudeSettingsL = {
      	 steps: 2, 	depth: 60,
      	 bevelEnabled: false, 	bevelThickness: 0.1, 	
      	 bevelSize: 1, 	bevelOffset: 0, 	
      	 bevelSegments: 2 
      	 }; 
     const geoshapeL = new THREE.ExtrudeBufferGeometry( shapeL, extrudeSettingsL ); 
     const LetD = new THREE.Mesh( geoshapeL, matLetD) ; 
     LetD.position.set(-21, -30, -30);
     groupLetD.add(LetD);     
     
     h1=22; h2=37; h3=36; a1=53; a2=8;     
     const shapeL2 = new THREE.Shape(); 
     shapeL2.moveTo( 0, 0 ); 
     shapeL2.lineTo( a1, 0 ); 
     shapeL2.lineTo( a1, h3 ); 
     shapeL2.lineTo( a1-a2, h2 ); 
     shapeL2.lineTo( 0, h1 );      
     shapeL2.lineTo( 0, 0 ); 
     
     const extrudeSettingsL2 = {
      	 steps: 2, 	depth: 28,
      	 bevelEnabled: false, 	bevelThickness: 0.1, 	
      	 bevelSize: 1, 	bevelOffset: 0, 	
      	 bevelSegments: 2 
      	 }; 
     const geoshapeL2 = new THREE.ExtrudeBufferGeometry( shapeL2, extrudeSettingsL2 ); 
     const LetD2 = new THREE.Mesh( geoshapeL2, matLetD) ; 
     LetD2.position.set(-69, -29, 2 );
     groupLetD.add(LetD2);     
     
     const geoLDW = new THREE.PlaneGeometry( 11, 12 );
     const matLDW = new THREE.MeshPhongMaterial( {emissive:colorw, side: THREE.DoubleSide, emissiveIntensity:1} ); 
     const LDW = new THREE.Mesh( geoLDW, matLDW ); 
     LDW.position.set(12, -13, -31);
     groupLetD.add(LDW);     
     
     const geoLDW2 = new THREE.PlaneGeometry( 8, 12 );
     const LDW2 = new THREE.Mesh( geoLDW2, matLDW ); 
     LDW2.position.set(-10, -13, -31);
     groupLetD.add(LDW2);
     LDW3=LDW2.clone();
     LDW3.rotation.y=Math.PI*0.5;     
     LDW3.position.set(-22, -13, -17);
     groupLetD.add(LDW3);     
     
     const geoLDD = new THREE.PlaneGeometry( 9, 20 );
     const matLDD = new THREE.MeshPhongMaterial( {emissive:0x45322E, side: THREE.DoubleSide, emissiveIntensity:1} );      
     const LDD = new THREE.Mesh( geoLDD, matLDD ); 
     LDD.position.set(-35, -18, 1);
     groupLetD.add(LDD);
     
     const geotube = new THREE.CylinderGeometry( 2, 2, 20, 32 ); 
     const mattube = new THREE.MeshBasicMaterial( {color: 0xC0C0C0} ); 
     const tube = new THREE.Mesh( geotube, mattube ); 
     tube.position.x-=50;
     tube.position.z+=10;
     groupLetD.add(tube);
     
     var cubevsLD = cubevs.clone();
     cubevsLD.position.set(-68,-21, -25);
     groupLetD.add(cubevsLD);
     var cubevsLD2 = cubevs.clone();
     cubevsLD2.position.set(-45,-13.5, -28);
     groupLetD.add(cubevsLD2);
                              
     scene.add( groupLetD ); 
     groupLetD.position.set(76, 0, 200);
   