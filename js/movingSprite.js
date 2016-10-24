window.onload = function() {

  //Aliases
  let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;
  //Create a Pixi stage and renderer
  let stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
  document.body.appendChild(renderer.view);
  //Set the canvas's border style and background color
  renderer.view.style.border = "1px dashed black";
  renderer.backgroundColor = "0xFFFFFF";
  //load an image and run the `setup` function when it's done
  loader
    .add("../images/cat.png")
    .load(setup);
  //Define any variables that are used in more than one function
  let cat;
  //Set the game's current state to `play`:
  let state = play;

  function setup() {
    //Create the `cat` sprite
    cat = new Sprite(resources["../images/cat.png"].texture);
    //Position the sprite at the top left corner
    cat.x = 0;
    cat.y = 0;
    //Initialize the sprites's velocity variables
    cat.vx = 0;
    cat.vy = 0;
    //Add the sprite to the stage
    stage.addChild(cat);
    //Start the game loop
    gameLoop();
  }

  function gameLoop() {
    //Loop this function 60 times per second
    requestAnimationFrame(gameLoop);
    //Update the current game state
    state();
    //Render the stage
    renderer.render(stage);
  }

  function play() {
    //Update the sprite's velocity
    cat.vx = 1;
    cat.vy = 1;
    //Apply the velocity values to the sprite's position to make it move
    cat.x += cat.vx;
    cat.y += cat.vy;
  }
}
