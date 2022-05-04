/* global Phaser */

// Copyright (c) 2022 Zaida Hammel All rights reserved
//
// Created by: Zaida Hammel
// Created on: May 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Game Scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default GameScene;
