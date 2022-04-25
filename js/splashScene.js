/* global Phaser */

// Copyright (c) 2022 Zaida Hammel All rights reserved
//
// Created by: Zaida Hammel
// Created on: April 2022
// This is the splash scene

/**
 * This class is the splash scene.
 */
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Splash Scene");
  }

  create(data) {}

  update(time, delta) {
    this.scene.switch("titleScene");
  }
}
export default SplashScene;
