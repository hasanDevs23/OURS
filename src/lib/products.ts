export type Fit = "drop" | "regular" | "cardigan" | "offer";

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  featuredOffer?: boolean;
  category: string;
  fit: Fit;
  description: string;
  sizes: string[];
  image?: string;
};

export const fitLabels: Record<Fit, string> = {
  drop: "Drop Shoulder Hoodies",
  regular: "Regular Fit Hoodies",
  cardigan: "Cardigans (Ladies wearables)",
  offer: "Offers",
};

export const products: Product[] = [
  { id: "nyc-black-drop", name: "NYC 89 Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_1.jpeg", description: "Black drop-shoulder fleece with a tan collegiate NYC chest print, All Boys Team Sports Club lettering and 89 / 9 sleeve numbers.", sizes: ["M", "L", "XL"] },
  { id: "nyc-white-drop", name: "NYC 89 Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_2.jpeg", description: "Clean white drop-shoulder fleece with the tan collegiate NYC chest print and numbered sleeves.", sizes: ["M", "L", "XL"] },
  { id: "track-911-white-drop", name: "Track 911 Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_3.jpeg", description: "White drop-shoulder hoodie with an oversized 911 track-car print and spec lettering across the back.", sizes: ["M", "L", "XL"] },
  { id: "track-911-black-drop", name: "Track 911 Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_4.jpeg", description: "Black drop-shoulder hoodie with the oversized 911 track-car print and spec lettering in white across the back.", sizes: ["M", "L", "XL"] },
  { id: "people-poison-drop", name: "People Poison Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_5.jpeg", description: "Black drop-shoulder fleece with a bubbly People Poison back graphic, Massive and Authentic tags and small-print manifesto.", sizes: ["M", "L", "XL"] },
  { id: "people-poison-white-drop", name: "People Poison Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_6.jpeg", description: "White drop-shoulder fleece with the bubbly black People Poison back graphic, Massive and Authentic tags and the small-print manifesto.", sizes: ["M", "L", "XL"] },
  { id: "born-to-stand-out-drop", name: "Born To Stand Out Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_7.jpeg", description: "Black drop-shoulder fleece with a dripping red spider emblem and Born To Stand Out script across the back.", sizes: ["M", "L", "XL"] },
  { id: "born-to-stand-out-white-drop", name: "Born To Stand Out Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_8.jpeg", description: "White drop-shoulder hoodie with a dripping red spider emblem and Born To Stand Out script across the back.", sizes: ["M", "L", "XL"] },
  { id: "brooklyn-black-drop", name: "Brooklyn Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_9.jpeg", description: "Black drop-shoulder hoodie with white gothic Brooklyn NY City of Churches lettering, hood eyelets and tribal flame sleeves.", sizes: ["M", "L", "XL"] },
  { id: "brooklyn-white-drop", name: "Brooklyn Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_10.jpeg", description: "White drop-shoulder fleece with navy gothic Brooklyn NY City of Churches print and tribal flame sleeves.", sizes: ["M", "L", "XL"] },
  { id: "v-monogram-drop", name: "V Monogram Drop Hoodie", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_11.jpeg", description: "Deep navy-black fleece with a cloud-stippled V across the back and scattered lilac stars.", sizes: ["M", "L", "XL"] },
  { id: "dimension-white-drop", name: "Dimension Drop Hoodie — White", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_12.jpeg", description: "White drop-shoulder hoodie with a red-and-black Dimension back graphic and matching sleeve prints.", sizes: ["M", "L", "XL"] },
  { id: "dimension-black-drop", name: "Dimension Drop Hoodie — Black", price: 899, category: "Drop Shoulder", fit: "drop", image: "/ds_13.jpeg", description: "Black drop-shoulder hoodie with a red Dimension back graphic, white lettering and matching sleeve prints.", sizes: ["M", "L", "XL"] },
  
  { id: "raven-oath-black", name: "Raven Oath Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_1.jpeg", description: "Black fleece with a Norse raven, knotwork medallion and the Fear Not Death oath printed in pale grey across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "raven-oath-white", name: "Raven Oath Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_2.jpeg", description: "White fleece with the Norse raven, knotwork medallion and Fear Not Death oath printed in navy across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "lowkey-speed-white", name: "Lowkey Speed Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_3.jpeg", description: "White fleece with a widebody GT car, Lowkey Street Aesthetics script and SPEED lettering in navy across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "lowkey-speed-black", name: "Lowkey Speed Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_4.jpeg", description: "Black fleece with a widebody GT car, Lowkey Street Aesthetics script and SPEED lettering in white across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "catcher-green", name: "Catcher Hoodie — Green", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_5.jpeg", description: "Washed forest-green fleece with a vintage baseball glove graphic and collegiate cream lettering on the front, kangaroo pocket.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "catcher-white", name: "Catcher Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_6.jpeg", description: "White fleece with a vintage baseball glove graphic and black collegiate lettering on the front, kangaroo pocket.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "catcher-black", name: "Catcher Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_7.jpeg", description: "Black fleece with a vintage baseball glove graphic and cream collegiate lettering on the front, kangaroo pocket.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "limit-speed-white", name: "Limit Speed Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_8.jpeg", description: "White fleece with a red-and-white widebody race car, bold LIMIT lettering, red Absolute speed script and katakana bars on the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "limit-speed-black", name: "Limit Speed Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_9.jpeg", description: "Black fleece with a red-and-white widebody race car, bold LIMIT lettering, red Absolute speed script and katakana bars on the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "mui-dragon-white", name: "Mui Dragon Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_10.jpeg", description: "White fleece with a black ink dragon coiled around bold brush-stroke kanji across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "mui-dragon-black", name: "Mui Dragon Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_11.jpeg", description: "Black fleece with a white ink dragon coiled around bold brush-stroke kanji across the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "ftwk-brown", name: "For Those Who Know Hoodie — Brown", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_12.jpeg", description: "Chestnut-brown fleece with brushed For Those Who Know script on the back and tribal filigree sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "ftwk-white", name: "For Those Who Know Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_13.jpeg", description: "White fleece with black brushed For Those Who Know script on the back and tribal filigree sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "ftwk-black", name: "For Those Who Know Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_14.jpeg", description: "Black fleece with white brushed For Those Who Know script on the back and tribal filigree sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "wss-green", name: "Where Style Speaks Hoodie — Green", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_15.jpeg", description: "Forest-green fleece with a falling-figure sketch, small cross and Where Style Speaks script in cream on the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "wss-white", name: "Where Style Speaks Hoodie — White", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_16.jpeg", description: "White fleece with the falling-figure sketch, small cross and Where Style Speaks script in black on the back.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "m4-black", name: "M4 Competition Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_17.jpeg", description: "Black fleece with an M4 Competition front-end illustration, M Power sleeve hits and roundel on the hood.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "wss-black", name: "Where Style Speaks Hoodie — Black", price: 799, category: "Regular Fit", fit: "regular", image: "/reg_18.jpeg", description: "Black fleece with the falling-figure sketch, small cross and Where Style Speaks script in white on the back.", sizes: ["M", "L", "XL", "XXL"] },

  { id: "daisy-cardigan-black", name: "Daisy Knit Cardigan — Black", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_1.jpeg", description: "Chunky black open-front knit covered in 3D white daisy appliqués with yellow centres, finished with voluminous sleeves and a cropped hem.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "cherry-cardigan-white", name: "Cherry Knit Cardigan — White", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_2.jpeg", description: "Cropped white button-front knit with red cherry pom appliqués and green leaves scattered across the body and sleeves, brass buttons down the front.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "sunflower-cardigan-black", name: "Sunflower Knit Cardigan — Black", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_3.jpeg", description: "Heavy black open-front knit with hand-crocheted yellow sunflower appliqués across the shoulders and sleeves, dropped shoulders and a relaxed crop.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "rose-cardigan-white", name: "Rose Knit Cardigan — White", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_4.jpeg", description: "Open-weave white knit with crimson crochet roses and green leaves over the shoulders and arms, coral buttons and a neat cropped fit.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "pink-rose-cardigan-white", name: "Pink Rose Knit Cardigan — White", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_5.jpeg", description: "Soft white button-front knit with blush-pink crochet roses on the collar, sleeves and hem, pink buttons and billowy balloon sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "bloom-cardigan-cream", name: "Bloom Knit Cardigan — Cream", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_6.jpeg", description: "Cream open-front knit scattered with golden-yellow crochet blooms, relaxed balloon sleeves and an easy cropped silhouette.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "cherry-cardigan-black", name: "Cherry Knit Cardigan — Black", price: 899, category: "Cardigans", fit: "cardigan", image: "/cardigan_7.jpeg", description: "Black ribbed button-front cardigan with plush red cherry poms and green leaves across the sleeves and body, gold buttons and a cosy cropped fit.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "butterfly-cardigan-cream", name: "Butterfly Knit Cardigan — Cream", price: 799, category: "Cardigans", fit: "cardigan", image: "/cardigan_8.jpeg", description: "Cream chunky button-front knit with yellow butterfly appliqués and balloon sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "butterfly-cardigan-blue", name: "Butterfly Knit Cardigan — Blue", price: 799, category: "Cardigans", fit: "cardigan", image: "/cardigan_9.jpeg", description: "Light blue chunky button-front knit with blue butterfly appliqués and balloon sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "butterfly-cardigan-white", name: "Butterfly Knit Cardigan — White", price: 799, category: "Cardigans", fit: "cardigan", image: "/cardigan_10.jpeg", description: "White chunky button-front knit with pink butterfly appliqués and balloon sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  { id: "butterfly-cardigan-black", name: "Butterfly Knit Cardigan — Black", price: 799, category: "Cardigans", fit: "cardigan", image: "/cardigan_11.jpeg", description: "Black chunky button-front knit with red butterfly appliqués and balloon sleeves.", sizes: ["M", "L", "XL", "XXL"] },
  
  { id: "dimension-hoodie-jeans-bundle", name: "Dimension Hoodie + Jeans Bundle", price: 1299, category: "Offers", fit: "offer", featuredOffer: true, image: "/ds_12.jpeg", description: "White Dimension graphic hoodie paired with black wide-leg jeans.", sizes: ["M", "L", "XL", "XXL"] },
];

export const dropShoulder = products.filter((p) => p.fit === "drop");
export const regularFit = products.filter((p) => p.fit === "regular");
export const cardigans = products.filter((p) => p.fit === "cardigan");

export const offers = products.filter((p) => p.featuredOffer || p.oldPrice);
export const featuredOffer = products.find((p) => p.featuredOffer);

export const formatPrice = (price: number) => `${price.toLocaleString("en-US")} BDT`;