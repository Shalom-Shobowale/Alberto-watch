// const url = "https://live-view-count-api.p.rapidapi.com/snipe";

// const options = {
//   method: "POST",
//   headers: {
//     "x-rapidapi-key": "16b5b415b1msh7cfdea873864269p13a51bjsn5ec40d5e83c6",
//     "x-rapidapi-host": "live-view-count-api.p.rapidapi.com",
//     "Content-Type": "application/json",
//   },

//   body: {
//     video_id: "http://127.0.0.1:5501/SRC/product.html",
//   },
// };

// async function getCount() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getCount()

// async function getCount() {
//   try {
//     const res = await fetch(
//       `https://api.countapi.xyz/hit/https://aptechota-plantpalace-cyberminds.vercel.app/visits`
//     );
//     const data = res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// getCount();

// let xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   "https://api.countapi.xyz/hit/aptechota-plantpalace-cyberminds.vercel.app/visits"
// );
// xhr.responseType = "json";
// xhr.onload = function () {
//   console.log(this.response.value);
// };
// xhr.send();'


// https://api.countapi.xyz/create?namespace=mywebsite&key=visits



// async function getVisitorCount() {
//   try {
//     const response = await fetch(
//       "https://api.countapi.xyz/get/https://aptechota-plantpalace-cyberminds.vercel.app/visits"
//     );
//     const data = await response.json();
//     console.log(data);
//     console.log('fgdhjdosim')
//   } catch (error) {
//     console.error("Error fetching visitor count:", error);
//   }
// }

// async function incrementVisitorCount() {
//   try {
//     await fetch("https://api.countapi.xyz/hit/mywebsite/visits");
//     getVisitorCount();
//   } catch (error) {
//     console.error("Error incrementing visitor count:", error);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   incrementVisitorCount();
// });


