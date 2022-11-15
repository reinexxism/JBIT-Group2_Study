const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets); // 실행결과 : ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn']
