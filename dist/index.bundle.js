/******/ (() => { // webpackBootstrap
var __webpack_modules__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Define leaderboard array of scores
let leaderboard = [
    { name: "John", score: 85 },
    { name: "Jane", score: 72 },
    { name: "Bob", score: 67 }
  ];
  
  // Display leaderboard function
  function displayLeaderboard() {
    // Get leaderboard HTML element
    let leaderboardEl = document.getElementById("leaderboard");
  
    // Clear existing leaderboard HTML
    leaderboardEl.innerHTML = "";
  
    // Create leaderboard header
    let headerEl = document.createElement("li");
    headerEl.classList.add("header");
  
    let nameEl = document.createElement("span");
    nameEl.classList.add("name");
    nameEl.innerText = "Name:";
    headerEl.appendChild(nameEl);
  
    let scoreEl = document.createElement("span");
    scoreEl.classList.add("score");
    scoreEl.innerText = "Score:";
    headerEl.appendChild(scoreEl);
  
    leaderboardEl.appendChild(headerEl);
  
    // Loop through each score in leaderboard array and create HTML elements
    for (let score of leaderboard) {
      let scoreEl = document.createElement("li");
      scoreEl.classList.add("score");
  
      let nameEl = document.createElement("span");
      nameEl.classList.add("name");
      nameEl.innerText = score.name;
      scoreEl.appendChild(nameEl);
  
      let valueEl = document.createElement("span");
      valueEl.classList.add("score");
      valueEl.innerText = score.score;
      scoreEl.appendChild(valueEl);
  
      leaderboardEl.appendChild(scoreEl);
    }
  }
  
  // Add score function
  function addScore(name, score) {
    leaderboard.push({ name, score });
  }
  
  // Test display leaderboard and add score functions
  displayLeaderboard();
  addScore("Alice", 93);
  displayLeaderboard();
  
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU0seUJBQXlCO0FBQy9CLE1BQU0seUJBQXlCO0FBQy9CLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgbGVhZGVyYm9hcmQgYXJyYXkgb2Ygc2NvcmVzXHJcbmxldCBsZWFkZXJib2FyZCA9IFtcclxuICAgIHsgbmFtZTogXCJKb2huXCIsIHNjb3JlOiA4NSB9LFxyXG4gICAgeyBuYW1lOiBcIkphbmVcIiwgc2NvcmU6IDcyIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9iXCIsIHNjb3JlOiA2NyB9XHJcbiAgXTtcclxuICBcclxuICAvLyBEaXNwbGF5IGxlYWRlcmJvYXJkIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gZGlzcGxheUxlYWRlcmJvYXJkKCkge1xyXG4gICAgLy8gR2V0IGxlYWRlcmJvYXJkIEhUTUwgZWxlbWVudFxyXG4gICAgbGV0IGxlYWRlcmJvYXJkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWRlcmJvYXJkXCIpO1xyXG4gIFxyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgbGVhZGVyYm9hcmQgSFRNTFxyXG4gICAgbGVhZGVyYm9hcmRFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIGxlYWRlcmJvYXJkIGhlYWRlclxyXG4gICAgbGV0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBcclxuICAgIGxldCBuYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG5hbWVFbC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWVFbC5pbm5lclRleHQgPSBcIk5hbWU6XCI7XHJcbiAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChuYW1lRWwpO1xyXG4gIFxyXG4gICAgbGV0IHNjb3JlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNjb3JlRWwuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xyXG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBcIlNjb3JlOlwiO1xyXG4gICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoc2NvcmVFbCk7XHJcbiAgXHJcbiAgICBsZWFkZXJib2FyZEVsLmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICBcclxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNjb3JlIGluIGxlYWRlcmJvYXJkIGFycmF5IGFuZCBjcmVhdGUgSFRNTCBlbGVtZW50c1xyXG4gICAgZm9yIChsZXQgc2NvcmUgb2YgbGVhZGVyYm9hcmQpIHtcclxuICAgICAgbGV0IHNjb3JlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHNjb3JlRWwuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xyXG4gIFxyXG4gICAgICBsZXQgbmFtZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIG5hbWVFbC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgICAgbmFtZUVsLmlubmVyVGV4dCA9IHNjb3JlLm5hbWU7XHJcbiAgICAgIHNjb3JlRWwuYXBwZW5kQ2hpbGQobmFtZUVsKTtcclxuICBcclxuICAgICAgbGV0IHZhbHVlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgdmFsdWVFbC5jbGFzc0xpc3QuYWRkKFwic2NvcmVcIik7XHJcbiAgICAgIHZhbHVlRWwuaW5uZXJUZXh0ID0gc2NvcmUuc2NvcmU7XHJcbiAgICAgIHNjb3JlRWwuYXBwZW5kQ2hpbGQodmFsdWVFbCk7XHJcbiAgXHJcbiAgICAgIGxlYWRlcmJvYXJkRWwuYXBwZW5kQ2hpbGQoc2NvcmVFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkZCBzY29yZSBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIGFkZFNjb3JlKG5hbWUsIHNjb3JlKSB7XHJcbiAgICBsZWFkZXJib2FyZC5wdXNoKHsgbmFtZSwgc2NvcmUgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRlc3QgZGlzcGxheSBsZWFkZXJib2FyZCBhbmQgYWRkIHNjb3JlIGZ1bmN0aW9uc1xyXG4gIGRpc3BsYXlMZWFkZXJib2FyZCgpO1xyXG4gIGFkZFNjb3JlKFwiQWxpY2VcIiwgOTMpO1xyXG4gIGRpc3BsYXlMZWFkZXJib2FyZCgpO1xyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==