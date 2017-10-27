import californiaRolls from './images/california-rolls.jpg';
import chickenTeriyaki from './images/chicken-teriyaki.jpg';
import chirashiSushi from './images/chirashi-sushi.jpg';
import ebiRolls from './images/ebi-rolls.jpg';
import edamame from './images/edamame.jpg';
import gohan from './images/gohan.jpg';
import hosomakiMix from './images/hosomaki-mix.jpg';
import maguro from './images/maguro.jpg';
import misoSoup from './images/miso-soup.jpg';
import salmonTeriyaki from './images/salmon-teriyaki.jpg';
import sashimiSalad from './images/sashimi-salad.jpg';
import seattleRolls from './images/seattle-rolls.jpg';
import seaweedSalad from './images/seaweed-salad.jpg';
import shake from './images/shake.jpg';
import shiromi from './images/shiromi.jpg';
import spicytunaRolls from './images/spicytuna-rolls.jpg';
import tekkaMaki from './images/tekka-maki.jpg';
import toriKatsu from './images/tori-katsu.jpg';
import yakiUdon from './images/yaki-udon.jpg';

export const SUSHI = [
    {
        image: sashimiSalad,
        name: "Sashimi Salad",
        description: "Organic greens topped with fresh sashimi, wasabi soy vinaigrette.",
        price: 12.00,
        protein: 2.9156,
        fat: 2.4396,
        carbohydrate: 2.4396,
        energykJ: 17.5775,
        energykcal: 4.2011,
        sugar: 0.3738
    },
    {
        image: chirashiSushi,
        name: "Chirashi sushi",
        description: "Sushi bar variety with sushi rice.",
        price: 21.00,
        protein: 2.3138,
        fat: 0.6041,
        carbohydrate: 0.6041,
        energykJ: 7.5314,
        energykcal: 1.8000,
        sugar: 0.3114
    },
    {
        image: seaweedSalad,
        name: "Seaweed Salad",
        description: "A nice seaweed salad.",
        price: 17.00,
        protein: 0.229,
        fat: 2.2852,
        carbohydrate: 2.2852,
        energykJ: 5.1003,
        energykcal: 1.2190,
        sugar: 0.0037
    },
    {
        image: edamame,
        name: "Edamame",
        description: "Boiled soy beans with salt.",
        price: 4.00,
        protein: 0.7436,
        fat: 1.9771,
        carbohydrate: 1.9771,
        energykJ: 17.294,
        energykcal: 4.1334,
        sugar: 0.1028
    },
    {
        image: misoSoup,
        name: "Miso Soup",
        description: "Soy bean soup with Wacame seaweed, tofu and spring onion.",
        price: 4.00,
        protein: 2.7642,
        fat: 2.1552,
        carbohydrate: 2.1552,
        energykJ: 9.393,
        energykcal: 2.2450,
        sugar: 0.1399
    },
    {
        image: maguro,
        name: "Maguro",
        description: "Tuna pieces.",
        price: 12.50,
        protein: 2.2293,
        fat: 0.7329,
        carbohydrate: 0.7329,
        energykJ: 28.2176,
        energykcal: 6.7442,
        sugar: 0.4018
    },
    {
        image: shake,
        name: "Shake",
        description: "",
        price: 10.00,
        protein: 1.4804,
        fat: 1.4739,
        carbohydrate: 1.4739,
        energykJ: 16.9406,
        energykcal: 4.0489,
        sugar: 0.245
    },
    {
        image: shiromi,
        name: "Shiromi",
        description: "White fish pieces.",
        price: 9.50,
        protein: 0.2814,
        fat: 1.3963,
        carbohydrate: 1.3963,
        energykJ: 16.4487,
        energykcal: 3.9313,
        sugar: 0.0509
    },
    {
        image: tekkaMaki,
        name: "Tekka Maki",
        description: "Tuna roll with wasabi. - 6 pieces.",
        price: 6.00,
        protein: 0.9559,
        fat: 1.6395,
        carbohydrate: 1.6395,
        energykJ: 9.7847,
        energykcal: 2.3386,
        sugar: 0.4771
    },
    {
        image: hosomakiMix,
        name: "Hosomaki Mix",
        description: "18 pieces.",
        price: 17.00,
        protein: 2.683,
        fat: 2.858,
        carbohydrate: 2.858,
        energykJ: 23.8901,
        energykcal: 5.7099,
        sugar: 0.4839
    },
    {
        image: californiaRolls,
        name: "California Rolls",
        description: "Crab sticks, avocado and cucumber. - 8 pieces.",
        price: 7.75,
        protein: 0.848,
        fat: 0.1205,
        carbohydrate: 0.1205,
        energykJ: 18.6541,
        energykcal: 4.4584,
        sugar: 0.0174
    },
    {
        image: seattleRolls,
        name: "Seattle Rolls",
        description: "Smoked salmon. Cucumber. Cream cheese.",
        price: 8.00,
        protein: 2.2802,
        fat: 2.309,
        carbohydrate: 2.309,
        energykJ: 18.6961,
        energykcal: 4.4685,
        sugar: 0.2533
    },
    {
        image: spicytunaRolls,
        name: "Spicy Tuna Rolls",
        description: "Spicy tuna, spring onion and avocado. - 6 pieces.",
        price: 6.00,
        protein: 1.0003,
        fat: 1.5621,
        carbohydrate: 1.5621,
        energykJ: 25.0911,
        energykcal: 5.9969,
        sugar: 0.0474
    },
    {
        image: ebiRolls,
        name: "Ebi Rolls",
        description: "King prawns, avocado and asparagus. - 8 pieces.",
        price: 8.00,
        protein: 2.826,
        fat: 2.854,
        carbohydrate: 2.854,
        energykJ: 19.2756,
        energykcal: 4.6070,
        sugar: 0.439
    },
    {
        image: chickenTeriyaki,
        name: "Chicken Teriyaki",
        description: "Sauted chicken with teiyaki sauce.",
        price: 12.00,
        protein: 2.2375,
        fat: 2.6376,
        carbohydrate: 2.6376,
        energykJ: 18.7052,
        energykcal: 4.4707,
        sugar: 0.4271
    },
    {
        image: salmonTeriyaki,
        name: "Salmon Teriyaki",
        description: "Sauted salmon with teriyaki sauce.",
        price: 13.50,
        protein: 2.5748,
        fat: 0.0234,
        carbohydrate: 0.0234,
        energykJ: 22.7136,
        energykcal: 5.4287,
        sugar: 0.1158
    },
    {
        image: gohan,
        name: "Gohan",
        description: "Steamed rice.",
        price: 3.00,
        protein: 2.4622,
        fat: 2.672,
        carbohydrate: 2.672,
        energykJ: 25.1129,
        energykcal: 6.0021,
        sugar: 0.3426
    },
    {
        image: toriKatsu,
        name: "Tori Katsu",
        description: "Pan-fried chicken breast with yasai salad.",
        price: 11.00,
        protein: 1.0267,
        fat: 2.2143,
        carbohydrate: 2.2143,
        energykJ: 17.8688,
        energykcal: 4.2707,
        sugar: 0.0161
    },
    {
        image: yakiUdon,
        name: "Yaki Udon",
        description: "Udon noddles with chicken, king prawns and vegetables.",
        price: 11.50,
        protein: 1.7697,
        fat: 0.2534,
        carbohydrate: 0.2534,
        energykJ: 7.508,
        energykcal: 1.7945,
        sugar: 0.1798
    },
]
