"use strict";

/**
 * Vue config
 * See: https://cli.vuejs.org/config/
 */
module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "My Trainer | トレーニング管理システム",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  devServer: {
    port: 8080
  }
};
