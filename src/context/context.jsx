import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
export const GlobalContext = createContext("Initial Value");
let data = {
  home: {
    webName: 'Le Catering',
    catering: 'Catering',
    since: 'Tradition since 1889',
    para1: 'The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.',
    para2: 'Excepteur sint occaecat cupidatat non proident, sunt in culp qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    img1:'https://www.w3schools.com/w3images/hamburger.jpg',
    img2:'https://www.w3schools.com/w3images/tablesetting2.jpg'
  },
  menu:{
    heading:'Our Menu',
    menu1:'Bread Basket',
    para1:'Assortment of fresh baked fruit breads and muffins 5.50',
    menu2:"Honey Almond Granola with Fruits",
    para2:'A mix of honey toasted almonds, fresh fruits and crunchy granola 4.',
    menu3:'Belgian Waffle',
    para3:'Vanilla flavored batter with malted flour 7.50',
    menu4:'Scrambled eggs',
    para4:'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50',
    menu5:'Blueberry Pancakes',
    para5:'With syrup, butter and lots of berries 8.50',
    img:'https://www.w3schools.com/w3images/tablesetting.jpg'
  },
  contact:{
    heading:'Contact',
    para1:'We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.',
    para2:'Catering Service, 42nd Living St, 43043 New York, NY',
    para3:'You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:'
  },
  darkTheme: true,
  myNum: 0
}
export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}