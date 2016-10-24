window.onload = function() {
  //Aliases
  let Container = PIXI.Container
  let autoDetectRenderer = PIXI.autoDetectRenderer
  let loader = PIXI.loader
  let resources = PIXI.loader.resources
  let Sprite = PIXI.Sprite;
  let TextureCache = PIXI.utils.TextureCache;
  let Rectangle = PIXI.Rectangle;

  //Create the stage and renderer
  let stage = new Container()
  let renderer = autoDetectRenderer(500, 500);
  document.body.appendChild(renderer.view);

  //Load an image and call the `setup` function
  loader
    .add("../images/tileset.png")
    .load(setup);

  function setup() {


    //Create the `tileset` sprite from the texture
    var texture = TextureCache["../images/tileset.png"];
    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    var rectangle = new Rectangle(192, 128, 64, 64);
    //Tell the texture to use that rectangular section
    texture.frame = rectangle;
    //Create the sprite from the texture
    var rocket = new Sprite(texture);
    //Position the rocket sprite on the canvas
    rocket.x = 32;
    rocket.y = 32;
    //Optionally use `pivot` to move the sprite's x and y position
    /*
    rocket.pivot.set(32, 32);
    rocket.rotation = 0.3;
    console.log(rocket.position)
    */
    //Add the rocket to the stage
    stage.addChild(rocket);

    //Render the stage
    renderer.render(stage);
  }

}
