(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 4117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(4117);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showDetailHandler() {
        // redirecting progratimitically
        router.push("/" + props.id);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id))
    });
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

;// CONCATENATED MODULE: ./pages/index.js



// import Layout from '../components/layout/Layout'
// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'AI & ML Student Conclave',
//     image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
//     address: 'IIT Madras, Chennai, India',
//     description: 'An event focused on Artificial Intelligence and Machine Learning, featuring student-led research, workshops, and hackathons.'
//   },
//   {
//     id: 'm2',
//     title: 'DevFest for CSE Juniors',
//     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
//     address: 'Online (Zoom & Discord)',
//     description: 'A beginner-friendly developer festival with talks, coding challenges, and peer networking sessions.'
//   },
//   {
//     id: 'm3',
//     title: 'Data Structures Bootcamp',
//     image: 'https://images.unsplash.com/photo-1573164574396-9d6b2211f56f',
//     address: 'NIT Trichy, Tamil Nadu, India',
//     description: '3-day offline bootcamp to dive deep into DS & Algorithms with hands-on mentorship from alumni.'
//   },
//   {
//     id: 'm4',
//     title: 'Full Stack Student Hackathon',
//     image: 'https://images.unsplash.com/photo-1581091870620-eb89cceba1b3',
//     address: 'VIT Vellore, India',
//     description: 'Team-based hackathon where students solve real-world problems using MERN stack or Django.'
//   },
//   {
//     id: 'm5',
//     title: 'Cloud Computing Meetup',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
//     address: 'Online (Google Meet)',
//     description: 'A meetup covering the basics and use cases of AWS, GCP, and Azure — ideal for CSE cloud enthusiasts.'
//   },
//   {
//     id: 'm6',
//     title: 'Open Source Sprint Day',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
//     address: 'IIIT Hyderabad Campus',
//     description: 'Hands-on contributions to real GitHub repositories with help from mentors and OSS contributors.'
//   },
//   {
//     id: 'm7',
//     title: 'Cybersecurity & Ethical Hacking Meet',
//     image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1',
//     address: 'Online',
//     description: 'A virtual conference on ethical hacking, bug bounty, and cybersecurity careers for students.'
//   },
//   {
//     id: 'm8',
//     title: 'Women in Tech Circle',
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
//     address: 'BITS Pilani, Rajasthan',
//     description: 'A meetup to empower women CSE students through talks, workshops, and mentorship.'
//   },
//   {
//     id: 'm9',
//     title: 'AI for Social Good Meetup',
//     image: 'https://images.unsplash.com/photo-1549924231-f129b911e442',
//     address: 'IISc Bangalore',
//     description: 'Meet developers working on AI solutions that impact education, health, and environment.'
//   },
//   {
//     id: 'm10',
//     title: 'Code & Chill Evening',
//     image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
//     address: 'Local Cafés (Pan-India)',
//     description: 'Relaxed coding sessions in local cafés with pizza, peers, and productive vibes.'
//   }
// ];
function HomePage(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
        meetups: props.meetups
    });
}
// before the component renders this below code will be executed.
// statis generation
async function getStaticProps() {
    // fetch data from an API
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs");
    const db = client.db("meetups");
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    // any thing inside this will never run on client machine
    return {
        props: {
            meetups: meetups.map((meetup)=>({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                }))
        },
        revalidate: 1
    };
}
// // it runs for every request
// export async function getServerSideProps(){
//     const req = context.req;
//     const res = context.req;
//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7032));
module.exports = __webpack_exports__;

})();