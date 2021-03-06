import { Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";

function Free() {
  return (
    <div className="flex flex-wrap">
      {/* <!-- component --> */}
      <div className="container w-full md:w-8/12 mt-20 px-4">
        {/* a image card with full width have a on border options to like and share */}
        <div class="relative flex  shadow-gray-400 border-8 border-white shadow-xl flex-col items-center justify-center w-full rounded-3xl  overflow-hidden">
          <div class="flex flex-col items-center justify-center w-full max-h-96 rounded-3xl  overflow-hidden">
            <img
              className="w-full object-cover"
              src="https://res.cloudinary.com/defrflfmj/image/upload/v1658453733/tpbsi5vqfyog7aizduel.jpg"
              alt="hai"
            />
          </div>

   
          <div className="w-full flex flex-col h-fit bg--600 rounded-3xl p-4 pb-8">
            <div className="p-2">
              <h1 className="font-true font-bold text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                officiis tenetur facilis aperiam officia, assumenda distinctio
                optio beatae even
              </h1>
            </div>

          <div className="w-full flex justify-center  pb-2 ">
            {/* a small badge */}
            <div className="bg-indigo-200 px-2 rounded-xl">

            <span className=" uppercase text-indigo-800 text-sm font-medium  dark:bg-blue-200 dark:text-indigo-800">
              { "NO category"}
            </span>
            </div>

    </div>

            <div className="pb-4">
              <p className="font-anak text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dolore saepe similique voluptatibus, a, cumque ea ut
                accusamus sunt consequatur omnis iure fugit neque tempora
                officiis architecto quasi numquam asperiores. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quis
                aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! Lorem ipsum dolor sit
                amet consectetur <br /> adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quis
                aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! orem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptas dolore saepe
                similique voluptatibus, a, cumque ea ut accusamus sunt
                consequatur omnis iure fugit neque tempora officiis architecto
                quasi numquam asperiores. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quis
                aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quis
                aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut!orem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas dolore saepe similique voluptatibus,
                a, cumque ea ut accusamus sunt consequatur omnis iure fugit
                neque tempora officiis architecto quasi numquam asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quis aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Qui quis
                aliquam cum sapiente. Saepe eius fugit nam est minus animi
                doloremque! Eos earum odio maxime dolores consequuntur.
                Corporis, esse ut! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui quis aliquam cum sapiente. Saepe eius
                fugit nam est minus animi doloremque! Eos earum odio maxime
                dolores consequuntur. Corporis, esse ut! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Qui quis aliquam cum
                sapiente. Saepe eius fugit nam est minus animi doloremque! Eos
                earum odio maxime dolores consequuntur. Corporis, esse ut!
              </p>
            </div>
          </div>


          <div className="w-full h-10 bg-white absolute bottom-0 ">
              <hr  className="bg-gray-700 h-0.5 mx-5 md:mx-10"/>
              <div className="flex justify-between items-center w-full h-full">
                <div>
                  <p className="font-anak pl-4 text-xs md:text-sm">
                    created at <span className="font-bold">05:08 PM</span>
                  </p>
                </div>
                {/* like svg*/}
                <div className="flex pr-4 justify-between">
                  <svg
                    className="w-6 h-6 mr-4 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

        </div>
      </div>
      {/* <!-- end component --> */}
      <div className="w-full md:w-4/12">
        <Comments />
      </div>
    </div>
  );
}

export default Free;
