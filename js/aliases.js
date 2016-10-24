window.onload = function() {
  //Aliases
  let Container = PIXI.Container
  let autoDetectRenderer = PIXI.autoDetectRenderer
  let loader = PIXI.loader
  let resources = PIXI.loader.resources
  let Sprite = PIXI.Sprite;

  //Create the stage and renderer
  let stage = new Container()
  let renderer = autoDetectRenderer(800, 650);
  document.body.appendChild(renderer.view);

  //Load an image and call the `setup` function
  loader
    .add("fish1Image", "../images/fish1.png")
    .add("fish2Image", "../images/fish2.png")
    .add("fish3Image", "../images/fish3.png")
    .add("fish4Image", "../images/fish4.png")
    .add("wavesImage", "../images/waves.png")
    .add("mapImage", "../images/displacementMap.jpg")
    .add("pondFloorImage", "../images/pondFloor.jpg")
    .on("progress", loadProgressHandler)
    .load(setup);

  function setup() {

    //Create the sprite, add it to the stage and render it
    let fish1Image = new Sprite(resources.fish1Image.texture);
    // let fish2Image = new Sprite(resources.fish2Image.texture);
    // let fish3Image = new Sprite(resources.fish3Image.texture);
    // let fish4Image = new Sprite(resources.fish4Image.texture);
    // let wavesImage = new Sprite(resources.wavesImage.texture);
    // let mapImage = new Sprite(resources.mapImage.texture);
    // let pondFloorImage = new Sprite(resources.pondFloorImage.texture);
    // positioning the spirite
    fish1Image.x = 96;
    fish1Image.y = 128;

    // width of the sprite
    fish1Image.width = 200;
    fish1Image.height = 120;
    // Scale the spirite image
    // fish1Image.scale.x = 0.5;
    // fish1Image.scale.y = 0.5;
    fish1Image.scale.set(0.5, 0.5);

    fish1Image.rotation = 0.5;
    // pivot and anchor are similar but the pivot uses pixels  fish1Image.anchor.set(0.5, 0.5)
    fish1Image.pivot.set(32, 32)

    stage.addChild(fish1Image);
    // stage.addChild(fish2Image);
    // stage.addChild(fish3Image);
    // stage.addChild(fish4Image);
    // stage.addChild(wavesImage);
    // stage.addChild(pondFloorImage);
    // stage.addChild(mapImage);
    renderer.render(stage);
  }

  function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
    console.log(`loading: ${resource.url}`);
    //Display the percentage of files currently loaded
    console.log(`progress: ${loader.progress}`);
    //Display error
    console.log(`error: ${resource.error}`);
  }
}
