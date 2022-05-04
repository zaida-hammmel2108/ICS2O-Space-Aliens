/* global Phaser */

// Copyright (c) 2022 Zaida Hammel All rights reserved
//
// Created by: Zaida Hammel
// Created on: April 2022
// This is the splash scene

/**
 * This class is the title scene.
 */
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });

<<<<<<< HEAD
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "200px Times", fill: "fde4b9", align: "center", }
=======
    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "fde4b9",
      align: "center",
    };
>>>>>>> origin/main
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Title Scene");
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg");
  }

  create(data) {
<<<<<<< HEAD
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
=======
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75);
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;

    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5);
  }

  update(time, delta) {}
>>>>>>> origin/main
}

export default TitleScene;
