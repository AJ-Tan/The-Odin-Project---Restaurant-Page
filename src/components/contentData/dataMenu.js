import  { menuBelabogSausage,menuBottledSoda,menuComfortFood,menuCosmicFriedRice,menuCrystalLizardSatay,menuDeepFriedRockCrab,menuDietFriedRice,menuMungBeanSoda,menuRyeBreadSodaIceberg,menuSnapperJamAppetizer,menuSnowPlainsStew,menuSonglotusCake,menuSteamedPuffergoatMilk,menuStoneGrilledOlm,menuTuskpirWrap } from "../assetImports";

export const dataMenuContent = {
  pageHeader: "Menu",
  contentHeader: "Menu List",
  contentText: [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non harum animi praesentium blanditiis itaque corrupti at, sequi quis, sunt architecto porro consequatur reiciendis. Odio, dolor ad. Soluta, dolorem et.`,
    `QWE Cumque minus maiores voluptatibus recusandae ex? Id voluptas unde ea, dolorum consectetur, minus placeat sit hic saepe neque culpa quibusdam incidunt et recusandae ex dolor, voluptates nesciunt assumenda ratione corrupti.`
  ],
  // Price in string for display only
  menuList: [
    {
      name: "Diet Fried Rice",
      description: "A lighter take on fried rice — subtle, simple, and ideal if you want something easy on the stomach.",
      price: "₱170",
      img: menuDietFriedRice,
      type: "rice"
    },
    {
      name: "Cosmic Fried Rice",
      description: "A golden, savory fried rice — hearty and familiar, like the meals served aboard the Astral Express.",
      price: "₱180",
      img: menuCosmicFriedRice,
      type: "rice"
    },
    {
      name: "Snow Plains Combo Stew",
      description: "A warm stew with mixed meats and vegetables — rich, hearty, and perfect for cold nights or weary travellers.",
      price: "₱240",
      img: menuSnowPlainsStew,
      type: "dish"
    },
    {
      name: "Deep-Fried Rock Crab",
      description: "Crispy fried crab dish — crunchy shell, tender meat: a seafood treat for lovers of coastal flavors.",
      price: "₱230",
      img: menuDeepFriedRockCrab,
      type: "dish"
    },
    {
      name: "Crystal Lizard Satay",
      description: "Skewered lizard-meat satay — grilled to perfection, offering a bold, earthy flavour for adventurers with daring palates.",
      price: "₱200",
      img: menuCrystalLizardSatay,
      type: "dish"
    },
    {
      name: "Stone-Grilled Olm",
      description: "Tender, grilled “olm” — a rustic, meaty dish reminiscent of camp-fire cooking on distant planets.",
      price: "₱220",
      img: menuStoneGrilledOlm,
      type: "dish"
    },
    {
      name: "Comfort Food",
      description: "Simple but satisfying — a homestyle bowl that warms the soul, for when you just want something familiar.",
      price: "₱150",
      img: menuComfortFood,
      type: "dish"
    },
    {
      name: "Snapper Jam Appetizer",
      description: "Crispy fried fish fillet glazed with sweet jam — a savory starter that whets the appetite.",
      price: "₱170",
      img: menuSnapperJamAppetizer,
      type: "dish"
    },
    {
      name: "Belobog Sausage",
      description: "A hearty meat sausage — rich, savory and filling, ideal for those craving protein after long travels.",
      price: "₱210",
      img: menuBelabogSausage,
      type: "dish"
    },
    {
      name: "Tuskpir Wrap",
      description: "A rolled wrap inspired by exotic beasts — a traveller’s-on-the-go meal: easy, portable, and satisfying.",
      price: "₱160",
      img: menuTuskpirWrap,
      type: "dish"
    },
    {
      name: "Songlotus Cake",
      description: "A lightly sweet fried snack — crispy and satisfying, great as dessert or a quick bite between journeys.",
      price: "₱130",
      img: menuSonglotusCake,
      type: "dessert"
    },
    {
      name: "Rye Bread Soda Iceberg",
      description: "A chilled shaved-ice dessert with a distinct wheat-bread flavor — perfect to cool you down after a heavy meal.",
      price: "₱120",
      img: menuRyeBreadSodaIceberg,
      type: "dessert"
    },
    {
      name: "Bottled Soda",
      description: "Classic fizzy soda — simple, cheerful, and the go-to drink to wash down any meal.",
      price: "₱80",
      img: menuBottledSoda,
      type: "beverage"
    },
    {
      name: "Mung Bean Soda",
      description: "A fermented-legume soda: slightly sour, slightly refreshing — a unique drink for the curious.",
      price: "₱90",
      img: menuMungBeanSoda,
      type: "beverage"
    },
    {
      name: "Steamed Puffergoat Milk (Hot Beverage)",
      description: "A warm, creamy drink — comforting and wholesome, ideal after a heavy meal or during a chilly evening.",
      price: "₱110",
      img: menuSteamedPuffergoatMilk,
      type: "beverage"
    },
  ]
}