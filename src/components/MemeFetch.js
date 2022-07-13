import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const MemeFetch = () => {
  const [meme, setMeme] = useState("");



  const fetchMemes = async () => {
    const response = await axios("https://meme-api.herokuapp.com/gimme");
    setMeme(response.data.url);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  const openInNewTab = url => {
    window.open(meme, '_blank', 'noopener,noreferrer');
  };


  

  return (
    <div>
      <div className=" flex justify-center">
      <img
        src={meme}
        alt="Something went wrong!!"
        className=" max-w-lg mt-28 shadow-lg"
      />
      </div>

      <div className= " flex justify-center mt-10 mb-10 text-lg ">
        <button onClick={openInNewTab} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mr-5">
          Share
        </button>
        <button onClick={fetchMemes} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ml-5">
          Next
        </button>
      </div>
    </div>
  );
};

export default MemeFetch;
