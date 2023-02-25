// initBattery();

// function initBattery() {
//     const batteryLiquid = document.querySelector(".Bliquid");
//     const batteryStatus = document.querySelector(".Bstatus");
//     const Bpercentage = document.querySelector(".Bpercentage");
//     navigator.getBattery().then((batt) => {
//         updateBattery = () => {
//             let level = Math.floor(batt.level * 100);
//             Bpercentage.innerHTML = level + "%";
//             batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
//             if (level == 100) {
//                 batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
//                 batteryLiquid.style.height = "103%";
//             } else if (level <= 20 &! batt.charging) {
//                 batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
//             } else if (batt.charging){
//                 batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
//             } else {
//                 batteryStatus.innerHTML = "";
//             }

//             if(level <=20) {
//                 batteryLiquid.classList.add("gradient-color-red");
//                 batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-yellow");
//             } else if(level <=48) {
//                 batteryLiquid.classList.add("gradient-color-orange");
//                 batteryLiquid.classList.remove("gradient-color-green", "gradient-color-red", "gradient-color-yellow");
//             } else if(level <=80) {
//                 batteryLiquid.classList.add("gradient-color-yellow");
//                 batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-red");
//             } else {
//                 batteryLiquid.classList.add("gradient-color-green");
//                 batteryLiquid.classList.remove("gradient-color-red", "gradient-color-orange", "gradient-color-yellow");
//             }

//         }
//         updateBattery();
//         batt.addEventListener("chargingchange", () => { updateBattery () });
//         batt.addEventListener("levelchange", () => { updateBattery });

        
//     })
// }


  function myFunction() {
    setInterval(function() {
        initBattery();
  }, 1000);
}

function initBattery() {
    const batteryLiquid = document.querySelector(".Bliquid");
    const batteryStatus = document.querySelector(".Bstatus");
    const Bpercentage = document.querySelector(".Bpercentage");
    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let level = Math.floor(batt.level * 100);
            Bpercentage.innerHTML = level + "%";
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
            if (level == 100) {
                batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
            } else if (level <= 20 &! batt.charging) {
                batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging){
                batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }

            if(level <=20) {
                batteryLiquid.classList.add("gradient-color-red");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-yellow");
            } else if(level <=48) {
                batteryLiquid.classList.add("gradient-color-orange");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-red", "gradient-color-yellow");
            } else if(level <=80) {
                batteryLiquid.classList.add("gradient-color-yellow");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-red");
            } else {
                batteryLiquid.classList.add("gradient-color-green");
                batteryLiquid.classList.remove("gradient-color-red", "gradient-color-orange", "gradient-color-yellow");
            }

        }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery () });
        batt.addEventListener("levelchange", () => { updateBattery }); 
    })
}

myFunction();

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});