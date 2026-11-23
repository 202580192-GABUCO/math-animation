  let centerX;
  let centerY;
  let orbitRadius = 100;     
  let angle = 1;             
  let angularSpeed = 0.05;   
  let isPaused = false;      

  function setup() {
    createCanvas(600, 500);

    centerX = width / 2;
    centerY = height / 2;
  }

  function draw() {
    background(20, 24, 35);

    handleContinuousControls(); 

  
    noFill();
    stroke(80, 90, 110);
    strokeWeight(1);
    circle(centerX, centerY, orbitRadius * 2);

    
    fill(255, 204, 0);
    noStroke();
    circle(centerX, centerY, 40);

    
    let planetX = centerX + orbitRadius * cos(angle);
    let planetY = centerY + orbitRadius * sin(angle);


    stroke(130, 200, 255, 120);
    line(centerX, centerY, planetX, planetY);

    
    fill(70, 180, 255);
    noStroke();
    circle(planetX, planetY, 24);

    
    if (!isPaused) {
      angle += angularSpeed;
    }

  
    displayUI(planetX, planetY);
  }

  function handleContinuousControls() {
    
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      angularSpeed = min(0.3, angularSpeed + 0.002);
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      angularSpeed = max(0, angularSpeed - 0.002);
    }


    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      orbitRadius = min(220, orbitRadius + 2);
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      orbitRadius = max(30, orbitRadius - 2);
    }
  }

  function displayUI(px, py) {
    fill(255);
    noStroke();
    textSize(14);
    textAlign(LEFT, TOP);

    text("Angle (rad): " + angle.toFixed(1), 15, 15);
    text("Radius: " + Math.round(orbitRadius), 15, 35);
    text("Speed: " + angularSpeed.toFixed(3), 15, 55);
    text("Position: (" + px.toFixed(1) + ", " + py.toFixed(1) + ")", 15, 75);

    textAlign(LEFT, BOTTOM);
    text("Click canvas first | [SPACE] Pause | [UP/DOWN or W/S] Speed | [LEFT/RIGHT or A/D] Radius", 10, height - 15);
  }

  function keyPressed() {
  
    if (key === ' ') {
      isPaused = !isPaused;
      return false; 
    }
    
    
  }
