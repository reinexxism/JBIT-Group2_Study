const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

leaderboard.splice(1, 1, "Luna");
leaderboard.pop();
leaderboard.push("Draco");

console.log(leaderboard); // 실행결과 : ['Harry', 'Luna', 'Hermione', 'Draco']
