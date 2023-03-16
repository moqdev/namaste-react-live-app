import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// APP LAYOUT
/**
    Header
      - Title(Logo)
      - Nav Items (Right Side)
      - Cart
    Body 
     - Search Bar
      - List of Restaurants
       - Restaurant Card
        - Image
        - Name
        - Rating
        - Price
        - Cusines
    Footer
     - links
     - copyrights
  */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imgs.search.brave.com/AhuyhPSZ1YUTp8_Pmag_PT73JbMQBCPF2dkZeCsmCQY/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/YjVaR0FMNFd2VTdW/Y3ZxMmN4YUdnQUFB/QSZwaWQ9QXBp"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
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
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
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
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
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
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
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
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
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
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
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
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
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
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

// DESTRUCTURING PROPS OBJECT:
// Is a way to avoid repeating the props object, making the code more readable and the code more flexible, as we can change the name of the props object, and the code will still work.
// Now you can remove props and just have restauarant, and the code will still work.
//<h2> {props.restaurant.data?.name} </h2> to destructured <h2> {restaurant.data?.name} </h2>
//<h3> {props.restaurant.data?.cuisines?.join(", ")} </h3> to destructured <h3> {restaurant.data?.cuisines?.join(", ")} </h3>

const RestaurantCard = ({ restaurant }) => {
  const { data } = restaurant;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          data?.cloudinaryImageId
        }
      />
      <h2> {data?.name} </h2>
      <h3> {data?.cuisines?.join(", ")} </h3>
      <h4> {data?.lastMileTravelString} minutes </h4>
      <h4> {data?.area} </h4>
    </div>
  );
};

// PROPS REVIEW SUMMARY AND EXAMPLE:
// For example IN THE BELOW CODE:
// <RestaurantCard restaurant={restaurantList[0]} />

// <RestaurantCard /> is like the function call.
// {restaurantList[0]}  is where we pass in the arguments.
//  restaurant={restaurantList[0]}  - this whole thing is called PROPS,
//whenever we pass in some props to a Functional Component it is ...
// ... received as a parameter RestaurantCard = ( PROPS ) => {   which is known as PROPS.

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard restaurant={restaurantList[0]} hello="world" />
      <RestaurantCard restaurant={restaurantList[1]} />
      <RestaurantCard restaurant={restaurantList[2]} />
      <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[5]} />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
