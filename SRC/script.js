let category = document.querySelectorAll("#category");
let color = document.querySelectorAll("#color");
let watchesCont = document.querySelector("#watches-cont");
let tab = document.querySelector("#categoryCont");
let colorCont = document.querySelector("#colorCont");
let priceRange = document.querySelector("#priceRange");
let priceRangeValue = document.querySelector("#priceRangeValue");
let modalCont = document.querySelector("#modalCont");
let searchBar = document.querySelector("#searchBar");

let allWatches;

function createWatch({ name, discountedPrice, price, imgURL }) {
  const watchCard = `
    <div class="mb-4 shadow-md h-fit py-3 sm:w-[31.5%] w-[100%] rounded-md">
      <div class="h-64 w-full rounded-t-md relative">
          <div id="On-hover">
              <div class="w-full h-full absolute rounded-t-md"></div>
              <div class="flex gap-3 bottom-2 right-1/2 absolute translate-x-2/4">
                <button class="h-8 w-8 flex justify-center items-center rounded-full bg-bgColor hover:bg-black"><i class="hover:text-bgColor fa-solid fa-cart-shopping"></i></button>
                <button  class="btns h-8 w-8 flex justify-center items-center rounded-full bg-bgColor hover:bg-black" id="eyeIcon"><i class="hover:text-bgColor fa-solid fa-eye"></i></button>
                <button class="h-8 w-8 flex justify-center items-center rounded-full bg-bgColor hover:bg-black"><i class="hover:text-bgColor fa-solid fa-arrow-right-arrow-left"></i></button>
              </div>
          </div>
          <div class="flex justify-center items-center h-fit">
            <img src="${imgURL}" alt="">
          </div>
        </div>
          <div class="py-3 mt-7">
              <div class="text-center">
                <p>⭐⭐⭐⭐⭐</p>
            </div>
              <div class="text-center font-bold py-2">
                <p>${name}</p>
            </div>
              <div class="flex justify-center gap-5 font-bold">
                <p class="line-through text-red-500">#${discountedPrice}.00</p>
                <p>#${price}.00</p>
            </div>
        </div> 
    </div>
  `;
  return watchCard;
}

const renderWatches = function (watches) {
  watchesCont.innerHTML = "";
  watches.forEach((watch) => {
    const watchC = createWatch(watch);
    watchesCont.insertAdjacentHTML("beforeend", watchC);
  });

  const eyeIcons = document.querySelectorAll("#eyeIcon");
  eyeIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      watches.forEach((watch, i) => {
        if (index === i) {
          displayPopup(watch);
        }
      });
    });
  });
};

const fetchAll = async function () {
  try {
    const res = await fetch("./json/watches.json");
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to get data" + res.status);
    allWatches = data;
    renderWatches(data);
    return data;
  } catch (err) {
    return err.message;
  }
};

fetchAll();

function displayPopup({
  name,
  price,
  imgURL,
  sku,
  productID,
  productCategory,
}) {
  let noOfItem = 1;
  const popUp = `
    <div class="fixed top-0 z-[999] popUp" id="popUp">
        <div class="flex h-screen justify-center items-center">
            <div class="w-[75%]">
                <div class="flex md:flex-row flex-col bg-bgColor rounded-md shadow-md border relative">
                    <div class="absolute z-[999] right-2 top-2" id="Close"><a href="javascript:void(0);">❌</a></div>
                    <div class="md:w-[50%]">
                        <div>
                            <section class="bg-white text-gray-800">
                                <div class="max-w-3xl mx-auto flex items-center flex-col-reverse">
                                    <!-- Tabs -->
                                    <div>
                                        <nav class="flex flex-wrap gap-1 justify-center -mb-px mb-2" id="tabs">
                                            <button data-target="tab1" class="tab-link px-2 py-4 border rounded-md hover:border-touch focus:outline-none">
                                                <img src=${imgURL} alt="" class="w-20 h-16">
                                            </button>
                                            <button data-target="tab2" class="tab-link px-2 py-4 border rounded-md hover:border-touch focus:outline-none">
                                                <img src=${imgURL} alt="" class="w-20 h-16">
                                            </button>
                                            <button data-target="tab3" class="tab-link px-2 py-4 border rounded-md hover:border-touch focus:outline-none">
                                                <img src=${imgURL} alt="" class="w-20 h-16">
                                            </button>
                                            <button data-target="tab4" class="tab-link px-2 py-4 border rounded-md hover:border-touch focus:outline-none">
                                                <img src=${imgURL} alt="" class="w-20 h-16">
                                            </button>
                                        </nav>
                                    </div>
                            
                                    <!-- Tab Content -->
                                    <div class="my-16">
                                        <div class="tab-content">
                                          <img src=${imgURL} alt="" class="w-80">
                                        </div>
                                        <div class="tab-content hidden">
                                          <img src=${imgURL} alt="" class="w-80">
                                        </div>
                                        <div class="tab-content hidden">
                                          <img src=${imgURL} alt="" class="w-80">
                                        </div>
                                        <div class="tab-content hidden">
                                          <img src=${imgURL} alt="" class="w-80">
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
            
                    <div class="md:w-[50%] px-5 relative">
                        <div class="mt-8">
                            <h1 class="text-4xl font-semibold">${name}</h1>
                            <div class="flex items-center my-2">
                                <p class="flex gap-2">
                                    <i class="fa-solid fa-star text-touch"></i>
                                    <i class="fa-solid fa-star text-touch"></i>
                                    <i class="fa-solid fa-star text-touch"></i>
                                    <i class="fa-solid fa-star text-touch"></i>
                                    <i class="fa-regular fa-star text-touch"></i>
                                </p>
                                <h1> ( Customer Review )</h1>
                            </div>
                            <div class="border-y h-80 overflow-y-scroll no-scrollbar">
                                <div class="flex gap-5 my-1">
                                    <h1 class="line-through font-semibold"><i class="fa-solid fa-naira-sign"></i>${new Intl.NumberFormat().format(
                                      price
                                    )}.00</h1>
                                    <h1 class="font-semibold"><i class="fa-solid fa-naira-sign"></i>${new Intl.NumberFormat().format(
                                      price - 0.15 * price
                                    )}.00</h1>
                                    <div class="text-bgColor text-[12px] bg-textBg px-4 py-1 rounded-md hover:bg-touch font-semibold">-15%</div>
                                </div>
                                <h6 class="font-bold text-red-600">Technology</h6>
                                <div class="mb-2">
                                    <p class="text-sm"><span class="font-bold">Touchscreen interface:</span>Allows users to interact with the watch by tapping, swiping, and pinching on the display.</p>
                                    <p><span class="font-bold"> Processor: </span>A small computer processor that runs the watch's operating system and apps.</p>
                                    <p class="text-sm"><span class="font-bold">Bluetooth: </span>Connectivity technology for pairing with smartphones or other devices.</p>
                                    <p class="text-sm"><span class="font-bold">Battery: </span>A rechargeable battery, often with several days or weeks of battery life.</p>
                                    <p class="text-sm"><span class="font-bold">Water Resistance: </span>Many smartwatches feature water resistance or waterproofing.</p>
                                </div>
                                <div>
                                    <h6 class="text-[14px] my-2">Product Features:</h6>
                                    <li class="text-[14px]"><span class="font-bold">SKU: </span> ${sku} </li>
                                    <li class="text-[14px]"><span class="font-bold">Product Id:</span> ${productID}</li>
                                    <li class="text-[14px]"><span class="font-bold">Product Category:</span> ${productCategory}'s Wrist Watch</li>
                                    <li class="text-[14px]"><span class="font-bold">Battery Capacity:</span> 72 Hours</li>
                                </div> 

                                <div class="flex items-center gap-6 my-4">
                                    <div class="flex flex-col items-center">
                                        <h6 class="font-bold mb-2">Select Size</h6>
                                        <div class="flex gap-2">
                                            <h6 class="h-7 w-7 border shadow-md rounded-md flex justify-center items-center">S</h6>
                                            <h6 class="h-7 w-7 border shadow-md rounded-md flex justify-center items-center">M</h6>
                                            <h6 class="h-7 w-7 border shadow-md rounded-md flex justify-center items-center">L</h6>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h6 class="font-bold mb-3">Color</h6>
                                        <div class="flex gap-2 ">
                                            <div class="h-4 w-4 bg-green-400 rounded-full"></div>
                                            <div class="h-4 w-4 bg-green-600 rounded-full"></div>
                                            <div class="h-4 w-4 bg-green-800 rounded-full"></div>
                                            <div class="h-4 w-4 bg-green-950 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-6 border-t py-2 absolute bottom-6 pt-5">
                                <div class="flex">
                                    <div class="w-8 h-8 text-[12px] border z-[999] flex justify-center items-center cursor-pointer" onclick="${() =>
                                      console.log(noOfItem)}" >+</div>
                                    <div class="w-8 h-8 text-[12px] border flex justify-center items-center">${noOfItem}</div>
                                    <div class="w-8 h-8 text-[12px] border flex justify-center items-center cursor-pointer">-</div>
                                </div>
                                <div class="flex gap-3">
                                    <div>
                                        <button class="text-white text-[12px] bg-textBg font-semibold px-4 py-2 rounded-md hover:bg-touch">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                    <div>
                                        <button class="text-white text-[12px] bg-textBg font-semibold px-4 py-2 rounded-md hover:bg-touch">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                    <div class="px-4 py-2 flex text-[12px] justify-center hover:bg-touch items-center rounded-md bg-textBg"><i class="fa-solid fa-heart text-white"></i></div>
                                </div>
                            
                            </div>
                            
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  modalCont.insertAdjacentHTML("beforeend", popUp);

  const closeBtn = document.getElementById("Close");
  closeBtn.addEventListener("click", function () {
    const modal = document.querySelector("#popUp");
    if (modal) {
      modal.remove();
    }
  });
  return popUp;
}

const fetchByCategory = async function (category) {
  watchesCont.innerHTML = "";
  allWatches = [];
  try {
    const res = await fetchAll();
    if (category === "All") {
      return res;
    }
    const data = res.filter((watch) => watch.productCategory === category);
    allWatches = data;

    const eyeIcons = document.querySelectorAll("#eyeIcon");
    eyeIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        displayPopup();
      });
    });
    return data;
  } catch (err) {
    return err.message;
  }
};

async function fetchByColor(color) {
  watchesCont.innerHTML = "";
  allWatches = [];
  try {
    const res = await fetchAll();
    const data = res.filter((watch) => watch.color === color);
    allWatches = data;
    return data;
  } catch (err) {
    return err.message;
  }
}

const fetchByPrice = async function (maxPrice) {
  try {
    const res = await fetchAll();
    let priceRang = res.filter(
      (watch) => watch.price >= 0 && watch.price <= maxPrice
    );
    renderWatches(priceRang);
  } catch (e) {
    return e.message;
  }
};

tab?.addEventListener("click", async function (e) {
  let categorys = e.target.closest("#category");

  if (!categorys) return;

  if (categorys.checked) {
    let amen = await fetchByCategory(categorys.dataset.filter);
    renderWatches(amen);
  }
});

colorCont?.addEventListener("click", async function (e) {
  let colors = e.target.closest("#color");

  if (colors.checked) {
    let color = await fetchByColor(colors.dataset.filter);
    renderWatches(color);
  }
});

// PRICE
priceRange?.addEventListener("change", function (e) {
  priceRangeValue.textContent = `$${new Intl.NumberFormat().format(
    e.target.value
  )}`;
  fetchByPrice(+e.target.value);
});

async function fetchBySearch(value) {
  try {
    const res = await fetchAll();
    let searchedWatch = res.filter((watch) =>
      watch.name.toLowerCase().includes(value.toLowerCase())
    );
    renderWatches(searchedWatch);
  } catch (e) {
    return e.message;
  }
}

searchBar?.addEventListener("keyup", function (e) {
  fetchBySearch(e.target.value);
});


// const date = document.querySelector("#date")
// const time = document.querySelector("#time")
// const locations = document.querySelector("#location")
// console.log(date, time, locations)

// function displayDateTime() {
//   const now = new Date();
//   const date = now.toLocaleDateString();
//   const time = now.toLocaleTimeString();
//   date.innerHTML = `Date: ${date} | Time: ${time}`;
// }

// function displayLocation(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   location.textContent = `Latitude: ${latitude} | Longitude: ${longitude}`;
// }

// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       document.getElementById("location").textContent =
//         "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       document.getElementById("location").textContent =
//         "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       document.getElementById("location").textContent =
//         "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       document.getElementById("location").textContent =
//         "An unknown error occurred.";
//       break;
//   }
// }

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(displayLocation, showError);
//   } else {
//     document.getElementById("location").textContent =
//       "Geolocation is not supported by this browser.";
//   }
// }

// displayDateTime();
// getLocation();
// // document.addEventListener("DOMContentLoaded", () => {
// //   displayDateTime();
// //   getLocation();

// //   // Update time every second
// //   setInterval(displayDateTime, 1000);
// // });