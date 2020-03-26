const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')
const User = require('./models/user')
const dbURI = 'mongodb://localhost/restaurant-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            "username": "ben",
            "email": "ben@ben.com",
            "password": "password",
            "passwordConfirmation": "password"
          },
          {
            "username": "denise",
            "email": "denise@denise.com",
            "password": "password",
            "passwordConfirmation": "password"
          },
          {
            "username": "emma",
            "email": "emma@emma.com",
            "password": "password",
            "passwordConfirmation": "password"
          },
          {
            "username": "subash",
            "email": "subash@subash.com",
            "password": "password",
            "passwordConfirmation": "password"
          }
        ])
      })
      .then(users => {
        return Restaurant.create([
          {
            "name":"Sichuan Chef",
            "link":"http://sichuanchef.co.uk/",
            "address":"15 Kenway Rd, Earl's Cour",
            "postcode":"SW5 0RP",
            "telephone":"020 7244 7888",
            "bookingLink":"https://www.opentable.co.uk/r/sichuan-chef-london",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Canton Element",
            "link":"http://cantonelement.co.uk/",
            "address":"48 Red Lion St",
            "postcode":"WC1R 4PF",
            "telephone":"020 7242 1515",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Gold Mine",
            "link":"https://www.facebook.com/Gold-Mine-101752186554376/",
            "address":"102 Queensway, Bayswater",
            "postcode":"W2 3RR",
            "telephone":"020 7792 8331",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Ma La Sichuan",
            "link":"https://malasichuan.co.uk/",
            "address":"37 Monck St",
            "postcode":" SW1P 2BL",
            "telephone":"020 7222 2218",
            "bookingLink":"https://malasichuan.co.uk/reservations",
            "cuisine":["Chinese "],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Orient London",
            "link":"https://www.orientlondon.com/",
            "address":"15 Wardour St",
            "postcode":"W1D 6PH",
            "telephone":"020 7989 8880",
            "bookingLink":"https://www.opentable.co.uk/orient-london",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Kym’s Restaurant",
            "link":"https://www.kymsrestaurant.com/",
            "address":"19 Bloomberg Arcade",
            "postcode":"EC4N 8AR",
            "telephone":"020 7220 7088",
            "bookingLink":"https://www.resdiary.com/restaurant/kyms",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"Good Earth - KnightsBridge",
            "link":"https://www.goodearthgroup.co.uk/",
            "address":"233 Brompton Rd",
            "postcode":"SW3 2EP",
            "telephone":"020 7584 3658",
            "bookingLink":"https://www.opentable.co.uk/r/the-good-earth-knightsbridge-london",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"Hot May Pot Pot",
            "link":"https://www.hotmay.co.uk/",
            "address":"30 Beauchamp Pl",
            "postcode":"SW3 1NJ",
            "telephone":"020 3637 6666",
            "bookingLink":"https://www.opentable.co.uk/r/hot-may-pot-pot-london",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":4,
            "user":users[1]
          },
          {
            "name":"Hutong",
            "link":"https://www.hutong.co.uk/experience",
            "address":"31 St. Thomas Street | Level 33 The Shard",
            "postcode":"SE1 9RY",
            "telephone":"020 3011 1257",
            "bookingLink":"https://www.hutong.co.uk/reservation/booking",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":4,
            "user":users[1]
          },
          {
            "name":"Yauatcha Soho",
            "link":"https://www.yauatcha.com/soho/",
            "address":"15-17 Broadwick St",
            "postcode":"W1F 0DL",
            "telephone":"020 7494 8888",
            "bookingLink":"https://www.opentable.co.uk/yauatcha-soho-reservations-london",
            "cuisine":["Chinese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":4,
            "user":users[1]
          },
          {
            "name":"Misato",
            "link":"https://misato.has.restaurant/",
            "address":"11 Wardour St",
            "postcode":"W1D 6PG",
            "telephone":"020 7734 0808",
            "cuisine":["Japanese"],
            "serveAlcohol":false,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":1,
            "user":users[1]
          },
          {
            "name":"Kanada-Ya",
            "link":"https://www.kanada-ya.com/piccadilly",
            "address":"3 Panton St",
            "postcode":"SW1Y 4DL",
            "telephone":"020 7930 3511",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Abeno",
            "link":"http://www.abeno.co.uk/index.html",
            "address":"47 Museum S",
            "postcode":"WC1A 1LY",
            "telephone":"020 7405 3211",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Robata",
            "link":"https://robata.co.uk/",
            "address":"56 Old Compton Street",
            "postcode":"W1D 4UE",
            "telephone":"020 7287 5766",
            "bookingLink":"https://www.opentable.co.uk/r/robata-london",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[1]
          },
          {
            "name":"Sticks n Sushi Covent Garden",
            "link":"https://sticksnsushi.com/en/restaurants/london/covent-garden",
            "address":"11 Henrietta St",
            "postcode":"WC2E 8PY",
            "telephone":"020 3141 8810",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"Oka Kingly Court",
            "link":"https://okarestaurant.co.uk/kingly-court/",
            "address":"Kingly Court, Carnaby S",
            "postcode":"W1B 5PW",
            "telephone":"020 7734 3556",
            "bookingLink":"https://www.opentable.co.uk/oka-kingly-court",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"Aqua Kyoto",
            "link":"https://aquakyoto.co.uk/",
            "address":"5th Floor 240 Regent Street Entrance 30 Argyll St",
            "postcode":"W1B 3BR",
            "telephone":"020 7478 0540",
            "bookingLink":"https://www.opentable.co.uk/aqua-kyoto",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"SUSHISAMBA Covent Garden",
            "link":"https://www.sushisamba.com/locations/uk/london-covent-garden",
            "address":"35 The Market",
            "postcode":"WC2E 8RF",
            "telephone":"020 3053 0000",
            "bookingLink":"https://www.opentable.co.uk/r/sushisamba-covent-garden-london-2",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[1]
          },
          {
            "name":"Roka Charlotte Street ",
            "link":"https://www.rokarestaurant.com/restaurant/roka-charlotte-street/",
            "address":"37 Charlotte St",
            "postcode":"W1T 1RR",
            "telephone":"020 7580 6464",
            "bookingLink":"https://www.opentable.co.uk/r/roka-charlotte-street-and-shochu-lounge-london",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":4,
            "user":users[1]
          },
          {
            "name":"Endo at the Rotunda",
            "link":"https://www.endoatrotunda.com/",
            "address":"8th Floor, The Helios, Television Centre, 101 Wood Ln, Shepherd's Bush",
            "postcode":"W12 7FR",
            "telephone":"020 3972 9000",
            "cuisine":["Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":4,
            "user":users[1]
          },
          {
            "name":"Olivelli",
            "link":"https://ristoranteolivelli.co.uk/",
            "address":"45 Shad Thames",
            "postcode":"SE1 2NJ",
            "telephone":"02073786606",
            "bookingLink":"https://ristoranteolivelli.co.uk/",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":1,
            "user":users[2]
          },
          {
            "name":"Rosso",
            "link":"http://www.enotecarosso.com/",
            "address":"276-280 Kensington High Street",
            "postcode":"W8 6ND",
            "telephone":"07384 595191",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"Trullo",
            "link":"https://www.trullorestaurant.com",
            "address":"300 - 302 St Paul's Road",
            "postcode":"N1 2LH",
            "telephone":"020 7226 2733",
            "bookingLink":"https://www.trullorestaurant.com/reservations",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"La Pappardella",
            "link":"https://la-pappardella.com/",
            "address":"253 Old Bromption Road",
            "postcode":"SW5 9HP",
            "telephone":"02073737777",
            "bookingLink":"https://la-pappardella.com/contact/",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":1,
            "user":users[2]
          },
          {
            "name":"Novikov",
            "link":"http://www.novikovrestaurant.co.uk/",
            "address":"50A Berkeley Street",
            "postcode":"W1J 8HA",
            "telephone":"+44 (0) 207 399 4330",
            "bookingLink":"http://www.novikovrestaurant.co.uk/reservations/",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Princi",
            "link":"http://www.princi.com/",
            "address":"53 Shaftesbury Ave",
            "postcode":"W1D 6LB",
            "telephone":"+44 (0)20 7478 8889",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"Zonzo",
            "link":"https://www.zonzorestaurant.co.uk/",
            "address":"342 Edgware Road",
            "postcode":"W2 1EA",
            "telephone":"020 7723 9777",
            "bookingLink":"https://www.zonzorestaurant.co.uk/",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":1,
            "user":users[2]
          },
          {
            "name":"Piazza",
            "link":"http://www.piazza-restaurant.co.uk/",
            "address":"35 Cranbourn Street",
            "postcode":"WC2H 7AD",
            "telephone":"02073796867",
            "bookingLink":"http://www.piazza-restaurant.co.uk/",
            "cuisine":["Italian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"The Pie Crust",
            "link":"https://www.facebook.com/pages/The-Pie-Crust/153147278057927",
            "address":"273 High Street",
            "postcode":"E15 2TF",
            "telephone":"020 8534 2873",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"Yum Yum",
            "link":"https://www.yumyumthain16.co.uk",
            "address":"187 Stoke Newington High Street",
            "postcode":"N16 0LH",
            "telephone":"020 7254 6751",
            "bookingLink":"https://www.yumyumthain16.co.uk/book-a-table",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Champor-Champor",
            "link":"https://www.champor-champor.com/",
            "address":"62-64 Weston Street",
            "postcode":"SE1 3QJ",
            "telephone":"020 7403 4600",
            "bookingLink":"https://www.champor-champor.com/#section-dinner-menu",
            "cuisine":["Thai", "Malay"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Patara",
            "link":"https://www.pataralondon.com",
            "address":"7 Maddox Street",
            "postcode":"W1S 2QB",
            "telephone":"020 7499 6008",
            "bookingLink":"https://www.pataralondon.com/reservations/",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":4,
            "user":users[2]
          },
          {
            "name":"The Begging Bowl",
            "link":"https://thebeggingbowl.co.uk/",
            "address":"168 Bellenden Road",
            "postcode":"SE15 4BW",
            "telephone":"020 7635 2627",
            "bookingLink":"https://thebeggingbowl.co.uk/#bookings",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Rusty Bikes",
            "link":"http://rustybike.pub/",
            "address":"588 Mile End Road",
            "postcode":"E3 4PH",
            "telephone":"020 8981 4100",
            "cuisine":["Thai", "Japanese"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"The Pineapple",
            "link":"https://www.thepineapplepubnw5.com/",
            "address":"51 Leverton Street",
            "postcode":"NW5 2NX",
            "telephone":"0207 284 4631",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"The Churchill Arms",
            "link":"https://www.churchillarmskensington.co.uk/",
            "address":"119 Kensington Church Street",
            "postcode":"W8 7LN",
            "telephone":"020 7727 4242",
            "bookingLink":"https://www.churchillarmskensington.co.uk/food",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"101 Thai Kitchen",
            "link":"https://www.101thaikitchen.com/",
            "address":"352 King Street",
            "postcode":"W6 0RX",
            "telephone":"020 8746 6888",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"Kiln",
            "link":"https://www.kilnsoho.com/",
            "address":"58 Brewer Street",
            "postcode":"W1F 9TL",
            "telephone":"00000000",
            "bookingLink":"https://kilnsoho.com/reservations/",
            "cuisine":["Thai"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Antepliler",
            "link":"https://antepliler.com/",
            "address":"46 Grand Parade",
            "postcode":"N4 1AG",
            "telephone":"020 8802 5588",
            "bookingLink":"https://antepliler.com/antepliler-restaurant/",
            "cuisine":["Turkish"],
            "serveAlcohol":false,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"Cirrik 19 Numara Bos",
            "link":"http://www.cirrik.co.uk/",
            "address":"34 Stoke Newington Road",
            "postcode":"N16 7XJ",
            "telephone":"020 7249 0400",
            "bookingLink":"http://www.cirrik.co.uk/contact.html",
            "cuisine":["Turkish"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "user":users[2]
          },
          {
            "name":"Diyarbakir",
            "link":"https://www.diyarbakir.co.uk/",
            "address":"52-53 Grand Parade",
            "postcode":"N4 1AG",
            "telephone":"0208 802 5498",
            "cuisine":["Turkish"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":2,
            "user":users[2]
          },
          {
            "name":"E. Mono",
            "link":"https://emono.co.uk/",
            "address":"287 Kentish Town Road",
            "postcode":"NW5 2JS",
            "telephone":"+44 20 7485 9779",
            "cuisine":["Turkish"],
            "serveAlcohol":false,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":1,
            "user":users[2]
          },
          {
            "name":"Bombay Bustle",
            "link":"https://www.bombaybustle.com/",
            "address":"29 Maddox Street",
            "postcode":"W1S 2PA",
            "telephone":"+44 20 7290 4470",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "image": "https://media.gqindia.com/wp-content/uploads/2018/08/Bombay-bustle-866x487.jpg",
            "user":users[3]
          },
          {
            "name":"Chai Ki",
            "link":"https://www.chai-ki.com/",
            "address":"1 Crossrail Place",
            "postcode":"E14 5AR",
            "telephone":"+44 20 0516 0444",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":true,
            "priceRange":2,
            "image": "https://canarywharf.com/wp-content/uploads/2015/12/canary-wharf-eating-drinking-chai-ki-aw15-6-741x417.jpg",
            "user":users[3]
          },
          {
            "name":"Masala Zone",
            "link":"https://www.masalazone.com/",
            "address":"9 Marshall Street",
            "postcode":"W1F 7ER",
            "telephone":"+44 20 7287 9966",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "image": "https://www.portico.com/blog/files/masala-zone_3223_1225_85_32_f.jpg",
            "user":users[3]
          },
          {
            "name":"Dishoom",
            "link":"https://www.dishoom.com/shoreditch/",
            "address":"12 Upper St Martin's Lane",
            "postcode":"WC2H 9FB",
            "telephone":"+44 20 7420 9324",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":4,
            "image": "https://secretldn.com/wp-content/uploads/2017/08/dishoom-flat-lay.jpg",
            "user":users[3]
          },
          {
            "name":"Kricket",
            "link":"https://kricket.co.uk/",
            "address":"12 Denman Street",
            "postcode":"W1D 7HH",
            "telephone":"+44 20 7734 5612",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":3,
            "image": "https://images.squaremeal.co.uk/cloud/restaurants/11225/images/kricket-soho-menu_31012020041449.jpg",
            "user":users[3]
          },
          {
            "name":"Dhaba@49",
            "link":"https://dhaba49.com/",
            "address":"49 Chippenham Rd",
            "postcode":"W9 2AH",
            "telephone":"+44 20 3489 2424",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":true,
            "priceRange":3,
            "image": "https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/abt-imgdhab-slide1.jpg",
            "user":users[3]
          },
          {
            "name":"Tamarind",
            "link":"https://www.tamarindrestaurant.com/",
            "address":"20 Queen Street",
            "postcode":"W1J 5PR",
            "telephone":"+44 20 7629 3561",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange": 3,
            "image": "https://www.tamarindrestaurant.com/wp-content/uploads/2019/04/LambChops_016F-867x1300.jpg",
            "user":users[3]
          },
          {
            "name":"Trishna",
            "link":"",
            "address":"15-17 Blandford Street",
            "postcode":"W1U 3DG",
            "telephone":"+44 20 7935 5624",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":3,
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/67/fe/71/aloo-chat-potato-masala.jpg",
            "user":users[3]
          },
          {
            "name":"Amaya",
            "link":"https://www.amaya.biz/",
            "address":"Halkin Arcade Motcombe Street",
            "postcode":"SW1X 8JT",
            "telephone":"+44 20 7887 6226",
            "cuisine":["Indian"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":4,
            "image": "hhttps://www.amaya.biz/media/dbe57978-2042-4169-b119-217e488cacc3/Amay_0163-lamb-chops-may-2012-RB_jpg",
            "user":users[3]
          },
          {
            "name":"Aqua Nueva",
            "link":"https://aquanueva.co.uk/experience",
            "address":"5th Floor entrance on Argyl Street",
            "postcode":"W1B 3BR",
            "telephone":"+44 20 7478 0540",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "image": "https://www.silverspoonlondon.co.uk/wp-content/uploads/2017/02/London-Restaurant-Review-Aqua-Kyoto-1517.jpg",
            "user":users[3]
          },
          {
            "name":"Boqueriata",
            "link":"http://www.boqueriatapas.com/",
            "address":"192 Acre Lane",
            "postcode":"SW2 5UL",
            "telephone":"+44 20 7733 4408",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":2,
            "image": "http://www.boqueriatapas.com/NEW/IMG_0990.jpg",
            "user":users[3]
          },
          {
            "name":"Jose Pizarro",
            "link":"https://josepizarro.com/venues/pizarro-restaurant-bermondsey/",
            "address":"104 Bermondsey Street",
            "postcode":"SE1 3UB",
            "telephone":"+44 20 7256 5333",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange":3,
            "image": "https://storage.googleapis.com/cdn.thelondoneconomic.com/wp-content/uploads/2019/02/Pizarro-food-1200x800.jpg",
            "user":users[3]
          },
          {
            "name":"Copita",
            "link":"http://www.copita.co.uk/",
            "address":"27 D'Arblay Street",
            "postcode":"WW1F 8EP",
            "telephone":"+44 20 7287 7797",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":3,
            "image": "https://img.static-bookatable.com/7c89636d-46bb-4bce-989c-ab28b7890966.jpg?404=bat2%2F404-restaurant.jpg&height=466&width=700&quality=75&mode=crop&scale=both&id=064a00be2519bbf852a6b8fdd7073d5a.jpg",
            "user":users[3]
          },
          {
            "name":"Brindisa",
            "link":"https://www.brindisakitchens.com/",
            "address":"18-20 Southwark Street",
            "postcode":"SE1 1TJ",
            "telephone":"+44 20 7357 8880",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":true,
            "halalFriendly":false,
            "priceRange": 3,
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/18/ad/a7/60/tapas-brindisa-london.jpg",
            "user":users[3]
          },
          {
            "name":"Donostia",
            "link":"http://www.donostia.co.uk/",
            "address":"10 Seymour Place",
            "postcode":"W1H 7ND",
            "telephone":"+44 20 3620 1845",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange": 2,
            "image": "https://images.squarespace-cdn.com/content/v1/589840fa197aeaa034b9682e/1500026341969-Q18FHFY69XAM04NAPYX1/ke17ZwdGBToddI8pDm48kJ3-0qGhB2l8OSdz-dt0jIIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcz7LdqkUWWiV1RVbm7rePUDfGjzBmULvfMyT6wbuzOT3OJodGC9Ts6NcC6PRnnUTF/print-bowles-5181.jpg",
            "user":users[3]
          },
          {
            "name":"Barrafina",
            "link":"https://www.barrafina.co.uk/",
            "address":"10 Adelaide Street",
            "postcode":"WH2N 4HZ",
            "telephone":"+44 20 7440 1486",
            "cuisine":["Spanish"],
            "serveAlcohol":true,
            "veggieFriendly":false,
            "halalFriendly":false,
            "priceRange":3,
            "image": "https://www.hot-dinners.com/images/stories/blog/2018/barrafinacoal/choux.jpg",
            "user":users[3]
          }
        ])
      })
      .then(restaurants => console.log(`${(restaurants.length)} restaurants created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })
