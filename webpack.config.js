// Node.js의 path 모듈을 가져옵니다. 이 모듈은 파일 및 디렉토리 경로 작업을 도와줍니다.
const path = require("path");

module.exports = {
  // 웹팩 모드를 설정합니다. 'development' 모드에서는 개발 중에 유용한 설정이 적용되고, 'production' 모드에서는 코드가 최적화됩니다.
  mode: "production", // 또는 'production'으로 설정할 수 있습니다.

  // 웹팩의 진입점을 설정합니다. 웹팩이 빌드 프로세스를 시작할 파일을 지정합니다.
  entry: "./src/index.js",

  // 출력 설정을 정의합니다.
  output: {
    // 번들링된 파일의 이름을 지정합니다.
    filename: "bundle.js",

    // 번들링된 파일이 저장될 디렉토리 경로를 지정합니다. path.resolve를 사용하여 절대 경로를 생성합니다.
    path: path.resolve(__dirname, "dist"),
  },
};
