import React, { useState } from "react";
import DisplayProducts from "./DisplayProducts";

function Home() {
  let products_details = [
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/4/h/w/xxl-mens-jkt-009-black-candy-house-original-imafg4hz7xz6pjpr.jpeg?q=70",
      brand: "Christy World",
      discription: "Full Sleeve Solid Men Padded Jacket",
      discountPrice: 649,
      mrp: "₹2,999",
      color: "block",
      usage: "men"
    },

    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/xif0q/jacket/c/f/0/s-mnt-7003-montrez-original-imagffv4hs3k6quc-bb.jpeg?q=50",
      brand: "MONTREZ",
      discription: "Full Sleeve Solid Men Denim Jacket",
      discountPrice: 599,
      mrp: "₹2,499",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/ke0a7ww0/jacket/c/x/r/m-wjjk3119-wrogn-original-imafurzguaqhztpq.jpeg?q=70",
      brand: "WROGN",
      discription: "Full Sleeve Solid Men Bomber Jacket",
      discountPrice: 2199,
      mrp: "₹3,999",
      color: "brown",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/m/h/j/l-mens-jkt-009-mrn-candy-house-original-imafg4hzyjzfffq2.jpeg?q=70",
      brand: "Christy World",
      discription: "Full Sleeve Solid Men Padded Jacket",
      discountPrice: 649,
      mrp: "₹2,999",
      color: "red",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/kdnf98w0hlty2aw-0/jacket/2/u/g/m-1-aw18-zip-jacket-black-way-maniac-original-imafumytf7zgd6dz.jpeg?q=50",
      brand: "Christy World",
      discription: "Full Sleeve Solid Men Padded Jacket",
      discountPrice: 649,
      mrp: "₹2,999",
      color: "block",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/kz5vwy80/jacket/b/n/1/l-no-of130006-124-furo-original-imagb8gutzcvfgkr.jpeg?q=50",
      brand: "Furo",
      discription: "Full Sleeve Solid Men Sports Jacke",
      discountPrice: 1360,
      mrp: "₹3,399",
      color: "green",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/kg2l47k0/jacket/f/v/k/xl-aw18-zip-jacket-yellow-way-maniac-original-imafwdg3hqaykzga.jpeg?q=50",
      brand: "MANIAC",
      discription: "Full Sleeve Colorblock Men Bomber Jacket ",
      discountPrice: 429,
      mrp: "₹2,019",
      color: "yellow",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/2/u/3/l-mens-t-d2-brucella-original-imaghyzyty4ugeyg.jpeg?q=50",
      brand: "Brucella",
      discription: "Printed Men Round Neck Grey T-Shirt",
      discountPrice: 299,
      mrp: "₹1,299",
      color: "gray",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/l41n2q80/t-shirt/q/n/j/l-1jgrf-013-blk-jugular-original-imagff7wfjvxtdjb.jpeg?q=50",
      brand: "JUGULAR",
      discription: "Printed Men Round Neck Black T-Shirt",
      discountPrice: 289,
      mrp: "₹888",
      color: "block",
      usage: "men"
    },

    {
      productpic:
        "Https://rukminim1.flixcart.com/image/495/594/kq9ta4w0/t-shirt/o/t/d/s-723-6-ftx-original-imag4bhzkshdkr68.jpeg?q=50",
      brand: "FTX ",
      discription: "Solid Men Round Neck Blue T-Shirt",
      discountPrice: 199,
      mrp: "₹599",
      color: "block",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70&quot",
      brand: "EyeBogler ",
      discription: "T410 Printed Men Hooded Neck Blue, Black T-Shirt",
      discountPrice: 355,
      mrp: "₹1299",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/l4zxn680/t-shirt/6/f/u/s-hood-260-checkedshirt-white-lewel-original-imagfryhczbhtjfh.jpeg?q=70&quot",
      brand: "LEWEL",
      discription: "Checkered Men Hooded Neck White, Black T-Shirt",
      discountPrice: 427,
      mrp: "₹1999",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=70&quot",
      brand: "EyeBogler ",
      discription: "Striped Men Polo Neck White, Blue, Yellow T-Shirt",
      discountPrice: 329,
      mrp: "₹1299",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/kyrlifk0/t-shirt/0/u/s/l-tdgyblhenful-d37-tripr-original-imagax9x6pkgwwg9.jpeg?q=70&quot",
      brand: "TRIPR",
      discription: "Solid Men Mandarin Collar Black, Grey T-Shirt",
      discountPrice: 309,
      mrp: "₹1999",
      color: "multicolo",
      usage: "men"
    },
    ///////////////////////////////////////////////////
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/kyyqpow0/t-shirt/l/t/n/l-t67-wrwh-eyebogler-original-imagb2zyfxb3gg3g.jpeg?q=70&quot",
      brand: "EyeBogler",
      discription: "Striped Men Round Neck Red T-Shirt",
      discountPrice: 299,
      mrp: "₹1299",
      color: "red",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/o/q/f/l-t305-as10yldnwh-eyebogler-original-imagb62bzjrgqa5v-bb.jpeg?q=70&quot",
      brand: "EyeBogler",
      discription: "Striped Men Round Neck Yellow T-Shirt",
      discountPrice: 199,
      mrp: "₹1299",
      color: "yellow",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/ksqeky80/shirt/a/9/q/m-nvk-4444-nivick-original-imag68nhdq5nnfxx.jpeg?q=70&quot",
      brand: "NIVICK",
      discription: "Men Regular Fit Solid Spread Collar Formal Shirt",
      discountPrice: 439,
      mrp: "₹1499",
      color: "blue",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/9/p/42-001-urban-shade-original-imaggnkppadn8tby.jpeg?q=70&quot",
      brand: "Urban Shade",
      discription: "Men Slim Fit Solid Slim Collar Formal Shirt",
      discountPrice: 474,
      mrp: "₹999",
      color: "black",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/i/t/n/m-maroon-5-jai-textiles-original-imag5efnjxs6bmhp-bb.jpeg?q=70&quot",
      brand: "Jai Textiles",
      discription: "Men Slim Fit Solid Spread Collar Casual Shirt",
      discountPrice: 379,
      mrp: "₹1899",
      color: "red",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/kzd147k0/shirt/t/t/u/m-wnsh0052-wrogn-original-imagbdshe92fqfyq.jpeg?q=70&quot",
      brand: "WROGN",
      discription: "Men Regular Fit Checkered Casual Shirt",
      discountPrice: 1049,
      mrp: "₹2199",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/t-shirt/m/w/a/m-bylrnful-z56-blive-original-imaggnwhufnbx6h6.jpeg?q=50&quot",
      brand: "BLIVE",
      discription: "Printed Men Round Neck Yellow T-Shirt",

      discountPrice: 217,
      mrp: "$999",
      color: "yellow",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50&quot",
      brand: "Urbano Plus ",
      discription: "Solid Men Henley Neck Dark Blue T-Shirt",

      discountPrice: 517,
      mrp: "$1999",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/2/t/a/xs-t51-bl-eyebogler-original-imagbf5tcgxyyyhp.jpeg?q=50&quot",
      brand: "HELMONT ",
      discription: "Color Block Men Hooded Neck Red, Black T-Shirt",

      discountPrice: 317,
      mrp: "$399",
      color: "multicolo",
      usage: "men"
    },

    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/o/j/o/6-12-months-kids-dungree-navy-blue-6-12-krijal-original-imagge9na4kgnsyy.jpeg?q=50&quot",
      brand: "The Silk Shop ",
      discription: "Boys Casual Shirt Dungaree",

      discountPrice: 317,
      usage: "kids",
      mrp: "$1298",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/t/n/y/9-10-years-brighteye-blk-namma-ooru-trend-original-imaggsfanw2f8bk8.jpeg?q=50&quot",
      brand: "NAMMA OORU TREND ",
      discription: "Boys Casual T-shirt Pant",
      usage: "kids",
      color: "multicolo",
      discountPrice: 317,
      mrp: "$399"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/2/t/a/xs-t51-bl-eyebogler-original-imagbf5tcgxyyyhp.jpeg?q=50&quot",
      brand: "HELMONT ",
      discription: "Color Block Men Hooded Neck Red, Black T-Shirt",

      discountPrice: 317,
      mrp: "$399",
      color: "multicolo",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l55nekw0/kids-apparel-combo/n/y/3/6-7-years-3pc-sm-munif-dresses-original-imagfw8zrpba6vrk.jpeg?q=50&quot",
      brand: "SM MUNIF DRESSES",
      discription: "Girls Party(Festive) Top Pant, Shrug",

      discountPrice: 317,
      mrp: "$399",
      usage: "kids",
      color: "pink"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l1qrjbk0/kids-apparel-combo/9/i/d/2-3-years-197-mustard-kidzarea-original-imagd8u6hvhsdtxt.jpeg?q=50&quot",
      brand: "Kidzarea",
      discription: "Boys Casual Blazer Jean",

      discountPrice: 317,
      mrp: "$399",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/krjjde80/kids-apparel-combo/8/n/h/18-24-months-racing-chatni-skii-original-imag5b6zdcmmzqsj.jpeg?q=50&quot",
      brand: "SKII ",
      discription: "Boys Casual T-shirt Dungaree",

      discountPrice: 317,
      mrp: "$399",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l0lbrm80/kids-apparel-combo/x/l/5/12-13-years-3pc-325-new-makhi-check-zolario-original-imagccdeghncztuy.jpeg?q=50&quot",
      brand: "Zolario",
      discription: "Boys Party(Festive) Waistco",

      discountPrice: 317,
      mrp: "$399",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/keg02a80/kids-apparel-combo/u/w/s/6-12-months-boys-202-20-boom-boys-original-imafv4ufspwaccm2.jpeg?q=50&quot",
      brand: "Boom Boys",
      discription: "Boys Casual Shirt Pant, Cap",

      discountPrice: 555,
      mrp: "$999",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l5bd5zk0/kids-apparel-combo/6/q/q/4-5-years-t-hf11-rust-alphabets-mars-infiniti-original-imaggypcw9ksnznh.jpeg?q=50&quot",
      brand: "Mars Infiniti ",
      discription: "Boys Casual T-shirt Shorts",

      discountPrice: 717,
      mrp: "₹445",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/y/l/3/2-3-years-gmw-dungaree01-smartbazar-original-imaggzjwmcddxfhk.jpeg?q=50&quot",
      brand: "smartbazar",
      discription: "Girls Party(Festive) Shirt Dungaree, Top, Belt",

      discountPrice: 177,
      mrp: "₹299",
      usage: "women",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/sweatshirt/z/q/7/xxl-222056461-1-monte-carlo-original-imaggbz8t6phwgtz.jpeg?q=50&quot",
      brand: "MONTE CARLO",
      discription: "Full Sleeve Printed Men Sweatshirt",

      discountPrice: 117,
      mrp: "₹1399",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kw104nk0/sweatshirt/u/n/d/xxl-udsws0063-u-s-polo-assn-original-imag8sekzaaqgxrj.jpeg?q=50&quot",
      brand: "U.S. POLO ASSN.",
      discription: "Full Sleeve Graphic Print Me",

      discountPrice: 117,
      mrp: "₹999",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/ksj9dow0/sweatshirt/d/r/s/m-maw21ss012b-metronaut-original-imag62rzhz5zyuze.jpeg?q=50&quot",
      brand: "METRONAUT",
      discription: "Full Sleeve Graphic Print M",

      discountPrice: 317,
      mrp: "₹3399",
      usage: "men"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/xif0q/kids-apparel-combo/f/y/k/3-4-years-ruth-red-namma-ooru-trend-original-imaggsexfcgbgx8v.jpeg?q=50",
      brand: "NAMMA OORU TREND ",
      discription: "Boys Casual T-shirt Pant",
      discountPrice: 382,
      mrp: "₹1,499",
      usage: "kids",
      color: "Red"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/k0463rk0/kids-apparel-combo/4/j/e/6-12-months-jb-2166g-zadmus-original-imafjzfyuahyfy2c.jpeg?q=50",
      brand: "ZADMUS",
      discription: "Boys Party(Festive) T-shirt Pant",

      discountPrice: 494,
      mrp: "₹1,399",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/495/594/l2z26q80/kids-apparel-combo/n/6/f/2-3-years-baby-flowrs-top-hot-pant-set-002-peach-20-styled-original-image6ghpddbfgbz.jpeg?q=50",
      brand: "STYLED FASHION",
      discription: "Girls Party(Festive) Top Jeans",

      discountPrice: 331,
      mrp: "₹1,199",
      usage: "kids",
      color: "multicolo"
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-apparel-combo/j/2/2/0-3-months-cherry-pt-0-3-ak-dresses-original-imaghk75rxxf9ahn.jpeg?q=70",
      brand: "AK DRESSES",
      discription: "Girls Party(Festive) Top Pant",

      discountPrice: 212,
      mrp: "₹499",
      usage: "kids",
      color: "multicolo"
    },
    {
        productpic:
        "https://rukminim1.flixcart.com/image/495/594/xif0q/kurta/f/y/p/s-mahi-purple-s-fashion-mint-original-imag3w3cqfpruqwn-bb.jpeg?q=50",
        brand: "Pooja Creation ",
        discription: "Women Embroidere..",
        discountPrice: 450,
        mrp: "₹1,150 72% off",
        Color: "Purple",
        usage: "women"
        }
        ];
       
        let [products, setProdects] = useState([...products_details]);
       
        return (
        <div>
        <DisplayProducts products={products} title="ALL PRODUCTS" />
        <DisplayProducts
        products={products.filter((product) => {
        return product.usage == "men";
        })}
        title="Men"
        />
        <DisplayProducts
        products={products.filter((product) => {
        return product.usage == "women";
        })}
        title="Women"
        />
        <DisplayProducts
        products={products.filter((product) => {
        return product.usage == "kids";
        })}
        title="kids"
        />
       
        <DisplayProducts
        products={products.filter((product) => {
        return product.discountPrice <= 1000;
        })}
        title="Less then 1000RS"
        />
        <DisplayProducts
        products={products.filter((product) => {
        return product.discountPrice >= 1000;
        })}
        title="Greater then 1000RS"
        />
        </div>
        );
       }
       export default Home;