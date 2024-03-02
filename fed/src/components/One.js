import React from "react";

export class One extends React.Component {

  logClick = (data) => {
    console.log('logClick',data);
  }

  render() {
    return (
        <div className="bg-black py-6 sm:py-8 lg:py-12 relative">
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-8  pb-96">
            <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 md:p-4 lg:p-10">
              <a href="#"
                onClick={() => {
                  this.logClick('Image01');
                }}
                className="row-span-3 col-span-1 lg:row-span-2 lg:col-span-1 relative">
                  <img src={require("../assets/one/image01.jpg")} loading="lazy" alt="Image 01" className="lg:absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
              </a>
              <a href="#"
                onClick={() => {
                  this.logClick('Image02');
                }}
                className="col-span-1 row-span-1 relative">
                <img src={require("../assets/one/Image-02.jpg")} loading="lazy" alt="Image 02" className="lg:absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
              </a>
              <div className="row-span-3 relative">
                <h1 className="font-openSans text-white border-b-2 border-b-white-600 pb-4 md:text-3xl">ANSWER YOUR BODY'S NEEDS</h1>
                <p className="font-openSans font-thin text-white tracking-wider pb-6 lg:pb-10 pt-4 md:text-2xl">
                  The way ingredients are sourced affects the way we nourish our bodies. 
                  Author Mark Schatzer believes our body naturally develops
                  an appetite for the foods and nutrients it needs to be healthy, 
                  but that artificial flavourings are getting in the way. This can be
                  reversed by focusing on high-quality ingredients and being mindful 
                  as your appetite guides you to consume according to your
                  body's needs.
                </p>
                <h1 className="font-openSans text-white md:text-3xl">BE MINDFUL</h1>
                <p className="font-semibold font-openSans text-white tracking-wider pb-6 lg:pb-10 md:text-2xl ">
                  Sourcing local or organic food is good way to start being more mindful 
                  absolute what you're cooking and eating.
                </p>
              </div>
              <a href="#"
                onClick={() => {
                  this.logClick('Image03');
                }}
                className="col-span-1 row-span-1 ... relative">
                <img src={require("../assets/one/Image-03.jpg")} loading="lazy" alt="Image 03" className="lg:absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
              </a>
            </div>
          </div>
        </div>
      )
    };
  };
