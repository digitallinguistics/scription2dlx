const result = /---(?<header>.*)---/gsu.exec(`---\n---`);

console.log(result);
