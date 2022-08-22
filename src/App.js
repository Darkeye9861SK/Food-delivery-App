import React from 'react';
import {Route, Routes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import {CreateCointainer, Header, MainCointainer} from "./components"

const App = () => {
  return (
    <AnimatePresence>
       <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path="/*" element={<MainCointainer/>}/>
            <Route path="/createItem" element={<CreateCointainer/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
   
  );
};

export default App;
