import React, { useState,useEffect  } from "react";

export const Card = (cardsData) => {
  console.log('cardsData',cardsData)
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleShow = (card) => {
    setShow(true)
    setSelectedCard(card)
    console.log('selectedCard',selectedCard)
  };

  const close = () => {
    setShow(false)
  };

  const handleData = (card) => {
    setSelectedCard(card)
  };

  useEffect(() => {
    handleData(selectedCard);
  }, [selectedCard]);

  const cardContent = cardsData.cardsData.map((card) => {
      const title = card?.title || '';
      const description = card?.description || '';
      return (
        <div className="grid gap-6 group col-span-3 xl:col-span-1" key={card?.id}>
          <div className="relative font-openSans">
            <img src={require(`../../assets/two/${card?.image}`)} className="w-full border-b-8 border-b-red-600" />
            <h1 className="text-white md:text-2xl pt-4 font-semibold">{title}</h1>
            <p className="text-white md:text-2xl pt-4 pb-6">{description}</p>
            <button className="text-white md:text-2xl border-b-4 border-b-red-600"  onClick={() => {
              handleShow(card);
            }}>READ MORE</button>
          </div>
          {show === true && 
          <div>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                <div class="bg-white p-20 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-10 sm:text-left">
                      <div class="mt-2 font-openSans">
                        <img src={require(`../../assets/two/${selectedCard?.image}`)} className="w-full border-b-8 border-b-red-600" />
                        <h1 className="text-black md:text-2xl pt-4 font-semibold">{selectedCard?.title}</h1>
                        <p className="text-black md:text-2xl pt-4 pb-6">{selectedCard?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" 
                  onClick={() => {
                      close();
                    }}>
                    Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          }
        </div>
      )
    });

    if (cardsData.cardsData.length > 0) {
      return cardContent;
    }

};
