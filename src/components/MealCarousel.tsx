import { useEffect, useLayoutEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Meal from './MealCard';

import { meals } from '../data/meals';

import { BsArrowLeftCircle } from "react-icons/bs";

function MealCarousel() {

  const [itemsNum, setItemsNum] = useState(4);

  let resizeWindow = () => {
    const width = window.innerWidth;
    if (width >= 992)
      setItemsNum(4)
    else if (width >= 768)
      setItemsNum(3)
    else if (width >= 576)
      setItemsNum(2)
    else 
      setItemsNum(1)
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const splitMeals = () => {
    var arr = [...meals], chunk = []

    while (arr.length > 0) {
      chunk.push(arr.splice(0, itemsNum))
    }
    return chunk
  }

  const mealsArray = splitMeals();
  const numOfCarousels = mealsArray.length;

  const renderItems = (index: number) => {
    return mealsArray[index].map((el, idx) => (      
      <Meal key={idx} id={el.id} src={"assets/" + el.img} name={el.name} time={el.time} />      
    ))
  };

  return (
    <Carousel interval={null} variant="dark" className="carousel">
      {Array.from({ length: numOfCarousels }).map((item, index) => (     
          <Carousel.Item key={index}>
            <CardGroup>
              { renderItems(index) }
            </CardGroup>
          </Carousel.Item>
        )
      )}
    </Carousel>
  )
}

export default MealCarousel;