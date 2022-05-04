/* global Phaser */

// Copyright (c) 2022 Zaida Hammel All rights reserved
//
// Created by: Zaida Hammel
// Created on: April 2022
// This is the Menu Scene

/**
 * This class is the menu scene.
 */
class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
}

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

  create(data) {
    //pass
  }

  update(time, delta) {
    //pass
  }
}

export default MenuScene
