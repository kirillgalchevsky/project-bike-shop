// FIREBASE_URL = "https://bikes-29629-default-rtdb.firebaseio.com/";

// function addEntity(name, obj){
//     fetch(FIREBASE_URL + name, {
//         method: "POST",
//         headers: {"Content-Type": "applicatoin/json"},
//         body: JSON.stringify(obj),
//     })
//     .then(function (res){
//         return res.json();
//     })
//     .then(function (res){
//         console.log(res);
//     })
//     .catch(function (err){
//         console.log(err);
//     });
// }

// // let categories = [
// //     {
// //         title: "Road Bikes",
// //         description: "The road calls. From high mountain peaks to neighborhood streets and bike paths, Giant road bikes for men are your invitation to ride. Whether you’re digging deep for a new PR, commuting in the city, or on a casual cruise, make the most of every ride with one of our men’s road bikes.",
// //         cover: "https://images.giant-bicycles.com/b_white,c_crop,h_600,q_70,w_1920/tamlnc8qonfc8ikersbl/road_category_race.jpg",

// //     },
// //     {
// //         title: "MOUNTAIN BIKES",
// //         description:
// //             "This is where you go to get away from it all. From steep, technical trails to fast and flowy singletrack, our full collection of mountain bikes for men has just what you need. Choose the perfect men’s MTB and get ready to hit the trails.",
// //         cover:
// //             "https://images.giant-bicycles.com/b_white,c_crop,h_600,q_70,w_1920/y11muho9u62fvrlguezt/giant_mtb_banner_navi21.jpg",
// //     },
// //     {
// //         title: "CROSS & GRAVEL BIKES",
// //         description:
// //             "The most adventurous rides often veer into the unknown — from the road to the dirt and back again. Whether you’re blasting through mud in a cyclocross race, going long on a gravel road expedition, or tackling rough roads on your daily commute, there’s a Giant bike to help you conquer all conditions.",
// //         cover:
// //             "https://images.giant-bicycles.com/b_white,c_crop,h_600,q_70,w_1920/qy6hc0va8iq4o2evnynt/giant_crossgravel_banner_navi21.jpg",
// //     },
// // ]

// // categories.forEach(function(cat){
// //     addEntity("categories.json", cat)
// // })

// let posts = [
//     {
//       title: "title",
//       description: "lallalala",
//       cover:
//         "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/xxg7dbtmnlrhzddzpa8n/350000155-56.jpg",
//       createAt: Date.now(),
//     },
//     {
//       title: "title",
//       description: "lallalala",
//       cover:
//         "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/xxg7dbtmnlrhzddzpa8n/350000155-56.jpg",
//       createAt: Date.now(),
//     },
//   ];

// let sliderBlock = document.querySelector(".slider");
// function getPosts(){
//     fetch(FIREBASE_URL + "posts.json")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(bikes){
//         for(let key in bikes){
//             let bike = bikes[id];
//             sliderBlock.innerHTML +=
//             `
//             <div class="slide">
//                 <img class="bike_photo" src ="${bike.cover}" alt="img">
//                 <h3 class="bike_title">${bike.title}</h3>
//                 <a href="post.html?page=post&id=${id}'>show more</a>
//             </div>
//             `
//         }
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// };

// getPosts();



const btnToggle = document.querySelector(".card_2");
const navBar = document.querySelector(".navbar-links");
const navBarClose = document.querySelector(".close-navbar");
const navBarLink = document.querySelectorAll(".link-a");
const buyCont = document.querySelector(".buy-content");
const buyContOpen = document.querySelector(".btn-buy-content");
const buyContClose = document.querySelector(".btn-close-buy-content");

buyContOpen.addEventListener("click", function(){
    buyCont.style.display = "block";
})
buyContClose.addEventListener("click", function(){
    buyCont.style.display = "none"
})


// var x =window.matchMedia("(max-width: 1600px)")

btnToggle.addEventListener("click", function(){
    // document.getElementsByClassName(".navbar-links").style.display = "block";
    // var elems = document.getElementsByClassName('.navbar-links');
    // for (var i=0;i<elems.length;i+=1){
    //     elems[i].display = 'block';
    // }
    // navBar.display = "block";
    navBar.style.display = "block";
    // navBar.style.marginTop = "100px";
    // navBar.style.marginRight = "10px;"
    navBar.style.right = "0";
    btnToggle.style.marginRight = "450px";
    buyCont.style.right = "550px";
})

navBarClose.addEventListener("click", function(){
    navBar.style.display = "none";
    btnToggle.style.marginRight = "75px";
    buyCont.style.right = "165px";
})

navBarLink.forEach( navBarLink => navBarLink.addEventListener("click", function(){
    navBar.style.display = "none";
    btnToggle.style.marginRight = "75px";
}))

// function myFunction(x, navBar, btnToggle){
//     if ((x.matches) || (navBar.style.display = "block")){
//         btnToggle.style.marginRight = "0px"
//     }

// }
// myFunction(x, navBar, btnToggle);





