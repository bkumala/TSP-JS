const routes = [
  { startCity: "Białystok", endCity: "Olsztyn", distance: 210 },
  { startCity: "Białystok", endCity: "Warszawa", distance: 132 },
  { startCity: "Białystok", endCity: "Lublin", distance: 226 },
  { startCity: "Białystok", endCity: "Bydgoszcz", distance: 306 },
  { startCity: "Białystok", endCity: "Gdańsk", distance: 289 },
  { startCity: "Białystok", endCity: "Łódź", distance: 209 },
  { startCity: "Białystok", endCity: "Poznań", distance: 306 },
  { startCity: "Białystok", endCity: "Szczecin", distance: 448 },
  { startCity: "Białystok", endCity: "GorzówWielkopolski", distance: 391 },
  { startCity: "Białystok", endCity: "Wrocław", distance: 333 },
  { startCity: "Białystok", endCity: "Opole", distance: 343 },
  { startCity: "Białystok", endCity: "Katowice", distance: 309 },
  { startCity: "Białystok", endCity: "Kielce", distance: 247 },
  { startCity: "Białystok", endCity: "Kraków", distance: 327 },
  { startCity: "Białystok", endCity: "Rzeszów", distance: 320 },
  { startCity: "Olsztyn", endCity: "Warszawa", distance: 161 },
  { startCity: "Olsztyn", endCity: "Lublin", distance: 263 },
  { startCity: "Olsztyn", endCity: "Bydgoszcz", distance: 187 },
  { startCity: "Olsztyn", endCity: "Gdańsk", distance: 114 },
  { startCity: "Olsztyn", endCity: "Łódź", distance: 211 },
  { startCity: "Olsztyn", endCity: "Poznań", distance: 268 },
  { startCity: "Olsztyn", endCity: "Szczecin", distance: 367 },
  { startCity: "Olsztyn", endCity: "GorzówWielkopolski", distance: 353 },
  { startCity: "Olsztyn", endCity: "Wrocław", distance: 335 },
  { startCity: "Olsztyn", endCity: "Opole", distance: 350 },
  { startCity: "Olsztyn", endCity: "Katowice", distance: 316 },
  { startCity: "Olsztyn", endCity: "Kielce", distance: 273 },
  { startCity: "Olsztyn", endCity: "Kraków", distance: 353 },
  { startCity: "Olsztyn", endCity: "Rzeszów", distance: 355 },
  { startCity: "Warszawa", endCity: "Lublin", distance: 118 },
  { startCity: "Warszawa", endCity: "Bydgoszcz", distance: 200 },
  { startCity: "Warszawa", endCity: "Gdańsk", distance: 229 },
  { startCity: "Warszawa", endCity: "Łódź", distance: 104 },
  { startCity: "Warszawa", endCity: "Poznań", distance: 198 },
  { startCity: "Warszawa", endCity: "Szczecin", distance: 340 },
  { startCity: "Warszawa", endCity: "GorzówWielkopolski", distance: 283 },
  { startCity: "Warszawa", endCity: "Wrocław", distance: 225 },
  { startCity: "Warszawa", endCity: "Opole", distance: 228 },
  { startCity: "Warszawa", endCity: "Katowice", distance: 193 },
  { startCity: "Warszawa", endCity: "Kielce", distance: 128 },
  { startCity: "Warszawa", endCity: "Kraków", distance: 209 },
  { startCity: "Warszawa", endCity: "Rzeszów", distance: 207 },
  { startCity: "Lublin", endCity: "Bydgoszcz", distance: 286 },
  { startCity: "Lublin", endCity: "Gdańsk", distance: 341 },
  { startCity: "Lublin", endCity: "Łódź", distance: 189 },
  { startCity: "Lublin", endCity: "Poznań", distance: 287 },
  { startCity: "Lublin", endCity: "Szczecin", distance: 429 },
  { startCity: "Lublin", endCity: "GorzówWielkopolski", distance: 372 },
  { startCity: "Lublin", endCity: "Wrocław", distance: 314 },
  { startCity: "Lublin", endCity: "Opole", distance: 319 },
  { startCity: "Lublin", endCity: "Katowice", distance: 248 },
  { startCity: "Lublin", endCity: "Kielce", distance: 148 },
  { startCity: "Lublin", endCity: "Kraków", distance: 211 },
  { startCity: "Lublin", endCity: "Rzeszów", distance: 114 },
  { startCity: "Bydgoszcz", endCity: "Gdańsk", distance: 116 },
  { startCity: "Bydgoszcz", endCity: "Łódź", distance: 155 },
  { startCity: "Bydgoszcz", endCity: "Poznań", distance: 97 },
  { startCity: "Bydgoszcz", endCity: "Szczecin", distance: 219 },
  { startCity: "Bydgoszcz", endCity: "GorzówWielkopolski", distance: 183 },
  { startCity: "Bydgoszcz", endCity: "Wrocław", distance: 197 },
  { startCity: "Bydgoszcz", endCity: "Opole", distance: 254 },
  { startCity: "Bydgoszcz", endCity: "Katowice", distance: 258 },
  { startCity: "Bydgoszcz", endCity: "Kielce", distance: 262 },
  { startCity: "Bydgoszcz", endCity: "Kraków", distance: 312 },
  { startCity: "Bydgoszcz", endCity: "Rzeszów", distance: 380 },
  { startCity: "Gdańsk", endCity: "Łódź", distance: 206 },
  { startCity: "Gdańsk", endCity: "Poznań", distance: 197 },
  { startCity: "Gdańsk", endCity: "Szczecin", distance: 262 },
  { startCity: "Gdańsk", endCity: "GorzówWielkopolski", distance: 281 },
  { startCity: "Gdańsk", endCity: "Wrocław", distance: 295 },
  { startCity: "Gdańsk", endCity: "Opole", distance: 345 },
  { startCity: "Gdańsk", endCity: "Katowice", distance: 311 },
  { startCity: "Gdańsk", endCity: "Kielce", distance: 314 },
  { startCity: "Gdańsk", endCity: "Kraków", distance: 365 },
  { startCity: "Gdańsk", endCity: "Rzeszów", distance: 422 },
  { startCity: "Łódź", endCity: "Poznań", distance: 143 },
  { startCity: "Łódź", endCity: "Szczecin", distance: 282 },
  { startCity: "Łódź", endCity: "GorzówWielkopolski", distance: 226 },
  { startCity: "Łódź", endCity: "Wrocław", distance: 145 },
  { startCity: "Łódź", endCity: "Opole", distance: 167 },
  { startCity: "Łódź", endCity: "Katowice", distance: 137 },
  { startCity: "Łódź", endCity: "Kielce", distance: 139 },
  { startCity: "Łódź", endCity: "Kraków", distance: 193 },
  { startCity: "Łódź", endCity: "Rzeszów", distance: 274 },
  { startCity: "Poznań", endCity: "Szczecin", distance: 168 },
  { startCity: "Poznań", endCity: "GorzówWielkopolski", distance: 109 },
  { startCity: "Poznań", endCity: "Wrocław", distance: 127 },
  { startCity: "Poznań", endCity: "Opole", distance: 182 },
  { startCity: "Poznań", endCity: "Katowice", distance: 232 },
  { startCity: "Poznań", endCity: "Kielce", distance: 260 },
  { startCity: "Poznań", endCity: "Kraków", distance: 286 },
  { startCity: "Poznań", endCity: "Rzeszów", distance: 368 },
  { startCity: "Szczecin", endCity: "GorzówWielkopolski", distance: 73 },
  { startCity: "Szczecin", endCity: "Wrocław", distance: 247 },
  { startCity: "Szczecin", endCity: "Opole", distance: 289 },
  { startCity: "Szczecin", endCity: "Katowice", distance: 337 },
  { startCity: "Szczecin", endCity: "Kielce", distance: 402 },
  { startCity: "Szczecin", endCity: "Kraków", distance: 391 },
  { startCity: "Szczecin", endCity: "Rzeszów", distance: 473 },
  { startCity: "GorzówWielkopolski", endCity: "Wrocław", distance: 187 },
  { startCity: "GorzówWielkopolski", endCity: "Opole", distance: 229 },
  { startCity: "GorzówWielkopolski", endCity: "Katowice", distance: 278 },
  { startCity: "GorzówWielkopolski", endCity: "Kielce", distance: 342 },
  { startCity: "GorzówWielkopolski", endCity: "Kraków", distance: 332 },
  { startCity: "GorzówWielkopolski", endCity: "Rzeszów", distance: 414 },
  { startCity: "Wrocław", endCity: "Opole", distance: 81 },
  { startCity: "Wrocław", endCity: "Katowice", distance: 129 },
  { startCity: "Wrocław", endCity: "Kielce", distance: 252 },
  { startCity: "Wrocław", endCity: "Kraków", distance: 183 },
  { startCity: "Wrocław", endCity: "Rzeszów", distance: 265 },
  { startCity: "Opole", endCity: "Katowice", distance: 83 },
  { startCity: "Opole", endCity: "Kielce", distance: 210 },
  { startCity: "Opole", endCity: "Kraków", distance: 138 },
  { startCity: "Opole", endCity: "Rzeszów", distance: 220 },
  { startCity: "Katowice", endCity: "Kielce", distance: 132 },
  { startCity: "Katowice", endCity: "Kraków", distance: 67 },
  { startCity: "Katowice", endCity: "Rzeszów", distance: 148 },
  { startCity: "Kielce", endCity: "Kraków", distance: 100 },
  { startCity: "Kielce", endCity: "Rzeszów", distance: 145 },
  { startCity: "Kraków", endCity: "Rzeszów", distance: 112 },
];

let totalDistance = 0;
const trueStart = "Warszawa";
let start = "Warszawa";
let alreadyVisited = [start];

const reversedRoutes = routes.map((route) => {
  return {
    startCity: route.endCity,
    endCity: route.startCity,
    distance: route.distance,
  };
});

const allRoutes = [...routes, ...reversedRoutes];

const findNeighbourCities = (city) => {
  return allRoutes.filter(
    (route) => route.startCity === city || route.endCity === city
  );
};

const setShortestDistance = (routes) => {
  let shortestDistance = Infinity;
  let nearestCity = "";
  routes.forEach((route) => {
    if (route.endCity === start) {
      [route.endCity, route.startCity] = [route.startCity, route.endCity];
    }
  });
  routes.forEach((route) => {
    if (
      !alreadyVisited.includes(route.endCity) &&
      route.distance < shortestDistance
    ) {
      shortestDistance = route.distance;
      nearestCity = route.endCity;
    }
  });
  alreadyVisited.push(nearestCity);
  totalDistance += shortestDistance;
  start = nearestCity;
};

const findShortestRoute = () => {
  let neighbourCities = findNeighbourCities(start);
  setShortestDistance(neighbourCities);
};

///
while (alreadyVisited.length < 16) {
  findShortestRoute();
}
let oneBeforeLastCity = alreadyVisited[alreadyVisited.length - 1];

let lastRoute = allRoutes.filter(
  (route) =>
    route.startCity === trueStart && route.endCity === oneBeforeLastCity
);

totalDistance += lastRoute[0].distance;

console.log(totalDistance);
console.log(alreadyVisited);
console.log(oneBeforeLastCity);
