import Chave from "../assets/147673408_2867706323552750_4569562889844423213_n.jpg";
import Ceara from "../assets/19956802_1882647382058654_6680583903973960221_o.jpg";
import Rosa from "../assets/17545310_1816931048630288_3821198725294349650_o.jpg";
import Bulls from "../assets/201357099_2969655603357821_7597868456556312898_n.jpg";
import Queixo from "../assets/372921740_3583791648610877_2539088449817753179_n.jpg";
import MeninoDeVo from "../assets/449791155_3814717215518318_941422314375445026_n.jpg";
import NiceGustavinho from "../assets/gustavinho.png";

function selectRandomItem<T>(array: T[]): { selectedItem: T, itemsLeft: T[] } {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedItem = array[randomIndex];
    const itemsLeft = array.filter((_, index) => index !== randomIndex);
    
    return { selectedItem, itemsLeft };
}
const profile = [Chave, Ceara, Rosa, Bulls, Queixo, MeninoDeVo, NiceGustavinho];

export const image = selectRandomItem(profile); 