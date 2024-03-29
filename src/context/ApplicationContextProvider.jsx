import React from 'react'
import { createContext } from 'react';

export const MyContext = createContext([]);
const test = "ayaooo";

const data = [
  {
    id: 1,
    name: "Game 1",
    background_image: "image_url_1"
  },
  {
    id: 2,
    name: "Game 2",
    background_image: "image_url_2"
  },
];

function ApplicationContextProvider({children}) {

  return (

      <MyContext.Provider value={data}>
        <section> {children}</section>
      </MyContext.Provider>

  )
}

export default ApplicationContextProvider
