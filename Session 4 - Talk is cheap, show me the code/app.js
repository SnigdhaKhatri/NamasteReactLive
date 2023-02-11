import ReactDOM from "react-dom/client";

//DATA

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "504341",
      name: "Sardar Ji Late Night Kitchen (Paschim Vihar)",
      uuid: "ac43f000-662e-4bc2-bd8e-cd341a9b662b",
      city: "4",
      area: "Paschim Vihar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "xax24mb5ktl439uewghm",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Chinese",
        "Biryani",
        "Beverages",
        "Tandoor",
        "Indian",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 5.699999809265137,
      slugs: {
        restaurant: "sardar-ji-late-night-kitchen-paschim-vihar-paschim-vihar",
        city: "delhi",
      },
      cityState: "4",
      address: "Shop- 13, Block A, DDA complex, Paschim Vihar  110063",
      locality: "A Block",
      parentId: 13225,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5856328~p=1~eid=00000186-1ded-dba0-0ba8-e88e006e013f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "504341",
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 5.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "168043",
      name: "Burger Singh (Big Punjabi Burgers)",
      uuid: "cec4da8b-ae44-4482-be18-d9dbf292c3d7",
      city: "4",
      area: "Rohini",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "fyuyd6jokqveketdmzpn",
      cuisines: ["American", "Fast Food", "Snacks"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "burger-singh-rohini",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Shop No-11, Ground Floor, D Mall, Twin District Centre, Sector-10,Rohini, Rohini, North West , Delhi-110085",
      locality: "Sector 10",
      parentId: 375065,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "168043",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "175782",
      name: "Go Pappe",
      uuid: "6e0cb87c-e41e-4286-adcf-023b8d46443a",
      city: "4",
      area: "Rohini",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "oatgpxnuuezpzfvwcuma",
      cuisines: ["North Indian", "Chinese", "Snacks"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant:
          "go-pappe-opposite-ndpl-office-jaipur-golden-hospital-road-rohini",
        city: "delhi",
      },
      cityState: "4",
      address:
        " SHOP NO.17, CSC-2, SECTOR-6, ROHINI DELHI-110085, Rohini, North West , Delhi-110085",
      locality: "Sector 6",
      parentId: 16483,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "175782",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "356627",
      name: "ROLLSOME",
      uuid: "27cd3480-5637-4743-9adb-bc8e2bb8b41b",
      city: "4",
      area: "Rohini",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
      cuisines: ["Fast Food", "Snacks", "Street Food"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "rollsome-rohini-rohini-2",
        city: "delhi",
      },
      cityState: "4",
      address:
        "H.NO- A-50, 3rd FLOOR, SEC-7, NAHARPUR , NAHAR PUR , SARASWATI VIHAR, North West , Delhi",
      locality: "Naharpur",
      parentId: 171215,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5804257~p=4~eid=00000186-1ded-dba0-0ba8-e88f006e041c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "356627",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

//This is react element
const title = (
  <a href="/">
    <img
      className="logo"
      src="https://graphicriver.img.customer.envatousercontent.com/files/108993892/Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1e2963d89741c8472bf471555549a04d"
      alt="logo"
    ></img>
  </a>
);
const HeaderComponent = () => {
  return (
    <div className="header">
      {title}
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ssxank9fefciz75pfrau",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};

/**
 * 
 * props is used as props
 * we can also do object destructuring and use {restaurant}
 * 
 */
//RestCard1
// const RestCard = (props) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h3>{props.restaurant.data?.name}</h3>
//       <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
//       <h4>{props.restaurant.data?.avgRating} stars</h4>
//     </div>
//   );
// };

//RestCard2
// const RestCard = ({ restaurant }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h3>{restaurant.data?.name}</h3>
//       <h4>{restaurant.data?.cuisines.join(", ")}</h4>
//       <h4>{restaurant.data?.avgRating} stars</h4>
//     </div>
//   );
// };

//RestCard3
// const RestCard = ({ restaurant }) => {
  
//   // more destructuring of the restaurant object
//   const { name, cloudinaryImageId, cuisines, avgRating} = restaurant.data
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating} stars</h4>
//     </div>
//   );
// };

//RestCard4
const RestCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};


/**
 * props -- properties 
 * restaurant = {restaurantList[0]} this is a prop passed into the component 
 * basically passing props is a way of passing data inside your component
 * 
 * argumants vs parameter 
 * you pass arguments and you recieve parameters
 * 
 * here we are writing same piece of line with one chnage again and again, this is not functional programmimg, we can loop
 * but in functional programming, we dont use for loop, we use map
 * map is the best way to do functional programming 
 */
//functional way
const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map(restaurant => {
          return <RestCard {...restaurant.data}/>
        })
      }
    </div>
  );
};

//non functional way 
// const BodyComponent = () => {
//   return (
//     <div className="restaurant-list">
//       <RestCard {...restaurantList[0].data}/>
//       <RestCard {...restaurantList[1].data}/>
//       <RestCard {...restaurantList[2].data}/>
//       <RestCard {...restaurantList[3].data}/>
//     </div>
//   );
// };

const FooterComponent = () => {
  return <h2>Footer componet</h2>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

/**
 * Style in JSX
 *
 *
 * React fragment is an empty tag .. it is used to wrap the tags in a parent element without adding a additional div
 * <React.Fragment></React.Fragment> === <></> (shorthand)
 * But if we need to add CSS, we will need a div
 */

const styleObj = {
  backgroundColor: "pink",
};
//inline style in react
const jsx = (
  // <div style={styleObj}>
  //   <h1>This is JSX element</h1>
  //   <h2> This si also JSX element </h2>
  // </div>

  //We can also give style as below - this is also inline style in react
  <div
    style={{
      backgroundColor: "pink",
    }}
  >
    <h1>This is JSX element</h1>
    <h2> This si also JSX element </h2>
  </div>

  //We can also add a classname and then style it in style.css

  // <>
  //   <h1>This is JSX element</h1>
  //   <h2> This si also JSX element </h2>
  // </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
