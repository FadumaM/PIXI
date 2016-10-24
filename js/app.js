window.onload = function() {
  // Create the renderer Object
  let renderer = PIXI.autoDetectRenderer(600, 500, {
    antialias: false,
    transparent: false,
    resolution: 1
  });
  // Force Canvas
  // renderer = new PIXI.CanvasRenderer(256, 256);
  // Force WEBGL
  // renderer = new PIXI.WebGLRenderer(256, 256);

  // Add the canvas to the HTML document
  document.body.appendChild(renderer.view)

  // Create a container object called the 'stage'
  let stage = new PIXI.Container();

  // Tell the 'renderer' to 'render' the 'stage'

  renderer.render(stage);



  // Get the widthe and height of the container
  console.log(renderer.view.width);
  console.log(renderer.view.height);

  // To change the width and the height
  // renderer.resize(window.innerWidth, window.innerHeight);
  // console.log("changes the width", renderer.view.width);
  // console.log("changes the height", renderer.view.height);



  // Add the style to container
  // renderer.view.style.width = window.innerWidth + "px";
  // renderer.view.style.height = window.innerHeight + "px";

  //Use Pixi's built-in `loader` object to load an image
  PIXI.loader
    .add([
      "../images/fish1.png",
      "../images/fish2.png",
      "../images/fish3.png",
      "../images/fish4.png",
      "../images/waves.png",
      "../images/pondFloor.jpg",
      "../images/displacementMap.jpg"
    ])
    .load(setup);
  //This `setup` function will run when the image has loaded
  function setup() {
    //Create the sprite from the texture
    let fish1 = new PIXI.Sprite(
      PIXI.loader.resources["../images/fish1.png"].texture
    );
    let fish2 = new PIXI.Sprite(
      PIXI.loader.resources["../images/fish2.png"].texture
    );
    //Add the sprite to the stage
    stage.addChild(fish1);
    stage.addChild(fish2);
    //Render the stage
    renderer.render(stage);
  }

}
