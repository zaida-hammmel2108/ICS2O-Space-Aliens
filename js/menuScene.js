/* global Phaser */

// Copyright (c) 2022 Zaida Hammel All rights reserved
//
// Created by: Zaida Hammel
// Created on: May 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
<<<<<<< HEAD
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
}
=======
    super({ key: "menuScene" });
  }
>>>>>>> origin/main

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
<<<<<<< HEAD
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "assets/aliens_screen_image2.jpg")
    this.load.image("startButton", "assets/start.png")
=======
    console.log("Menu Scene");
>>>>>>> origin/main
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  update(time, delta) {
  }

  clickButton () {
    this.scene.start("gameScene")
  }
}

export default MenuScene;
