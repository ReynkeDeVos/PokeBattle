import { useState } from "react";

import "../App.css";

function PokeCard() {
  return (
    <>
    {/* DaisyUI Card */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      {/* DaisyUI Bubbles */}
      <div className="epic battle flex flex-row container">

      <div className="chat justify-start chat-start">
          <div className="chat-bubble my-10">It's over Pikachu, <br/>I have the high ground.</div>
          <div className="object-fill h-48 w-96">
            <img src="./src/assets/Ash_ketchum.png"></img>
          </div>
      </div>
      <div className="chat justify-end chat-end">
        <div className="chat-bubble my-20">You underestimate my power!</div>
        <div className="object-cover -my-20 h-48 w-96">
          <img className="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
        </div>
      </div>
      </div>
      {/* <div className="chat chat-end">
        <div className="chat-bubble my-20">You underestimate my power!</div>
        <div className="object-cover -my-20 h-48 w-96">
          <img className="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
        </div>
      </div>



      <div className="chat chat-start">
          <div className="chat-bubble">It's over Pikachu, <br/>I have the high ground.</div>
          <div className="object-fill h-48 w-96">
            <img src="./src/assets/Ash_ketchum.png"></img>
          </div>
      </div> */}

    </>
  );
}

export default PokeCard;
