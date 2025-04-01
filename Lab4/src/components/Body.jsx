import Container from "./Container";
import Filter from "./Filter";

import a1 from '../img/1.png'
import a2 from '../img/2.png'
import a3 from '../img/3.png'
import a4 from '../img/4.png'
import a5 from '../img/5.png'
import a6 from '../img/6.png'
import a7 from '../img/7.png'
import a8 from '../img/8.png'
import a9 from '../img/9.png'


export default function Body() {
    const recipes = [
      { image: a1, title: "Cucumber salad, cherry tomatoes", time: 32 },
      { image: a2, title: "Italian-style tomato salad", time: 32 },
      { image: a3, title: "Potato Salad", time: 32 },
      { image: a4, title: "Salad with cabbage and shrimp", time: 32 },
      { image: a5, title: "Five-color salad", time: 32 },
      { image: a6, title: "Corn Salad", time: 32 },
      { image: a7, title: "Salad with cabbage and shrimp", time: 32 },
      { image: a8, title: "Lotus delight salad", time: 32 },
      { image: a9, title: "Avocado Salad", time: 32 },
    ];
  
    return (
      <div className="flex bg-white text-black">
        <Filter />
        <div className="w-3/4">
          <h1 className="text-2xl font-bold p-4 text-left">Salad (32)</h1>
          <Container recipes={recipes} />
        </div>
      </div>
    );
  };