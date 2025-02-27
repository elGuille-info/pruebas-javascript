﻿// [railsstudent - longestSlideDown.js](https://gist.github.com/railsstudent/d40bd874d773794ff358c3465a6d2f5d)


// https://www.codewars.com/kata/pyramid-slide-down/train/javascript
// longestSlideDown.js

// http://stackoverflow.com/questions/8002252/euler-project-18-approach
function longestSlideDown (pyramid) {
  let pyramidSum = [];
  pyramid.forEach((r, i) => {
    pyramidSum.push(r.map((e) => {
      return (i === pyramid.length - 1) ? e : 0;
    }));
  });

  for (let i = pyramidSum.length - 2; i >= 0; i--) {
      for (let j = 0; j < pyramidSum[i].length; j++) {
          pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
      }
  }
  return pyramidSum[0][0];
}