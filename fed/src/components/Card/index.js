export const Card = (cardsData) => {
  
  console.log('cardsData',cardsData)
  
  const cardContent = cardsData.cardsData.map((card) => {
      const title = card?.title || '';
      const description = card?.description || '';
      return (
        <>
          <div className="grid gap-6 group col-span-3 xl:col-span-1">
            <div className="relative font-openSans">
              <img src={require(`../../assets/two/${card?.image}`)} className="w-full border-b-8 border-b-red-600" />
              <h1 className="text-white md:text-2xl pt-4 font-semibold">{title}</h1>
              <p className="text-white md:text-2xl pt-4 pb-6">{description}</p>
              <button className="text-white md:text-2xl border-b-4 border-b-red-600">READ MORE</button>
            </div>
          </div>
        </>
      )
    });

    if (cardsData.cardsData.length > 0) {
      return cardContent;
    }

};
