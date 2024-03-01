export const Card = (cardsData) => {
  console.log('cardsData',cardsData)
  // eslint-disable-next-line no-lone-blocks
  
  const cardContent = cardsData.cardsData.map((card) => {
      console.log('card',card)
      const title = card?.title || '';
      const description = card?.description || '';
      return (
      <>
       <div className="grid gap-6 group col-span-3 xl:col-span-1">
          <div className="relative">
            <img src={require(`../../assets/two/${card?.image}`)} className="w-full border-b-8 border-b-red-600"/>
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
  }


// import Link from 'next/link';
// import { twMerge, twJoin } from 'tailwind-merge';
// import { ButtonLink } from 'elements/ButtonLink';
// import Image from 'next/image';
// import { Title } from './Text';
// import { Badge } from 'flowbite-react';

// export const Card = ({
//   title,
//   description,
//   button,
//   image,
//   link,
//   imageClassName,
//   external,
//   pills = [],
//   underCardTitle,
// }) => {
//   // TODO: This should use the BaseCard component so all cards get the same base design
//   const cardContent = (
//     <div
//       className={`border-solid border-ds-grey-medium flex flex-col justify-between gap-2 h-full w-full p-6 border rounded-lg group ${
//         link ? 'cursor-pointer' : ''
//       }`}
//     >
//       {title && <Title>{title}</Title>}
//       <div className="relative flex">
//         {image && (
//           <Image
//             height={200}
//             width={400}
//             src={image}
//             alt="card image"
//             className={
//               imageClassName
//                 ? twMerge(imageClassName, `min-h-0 min-w-0 w-full rounded-lg`)
//                 : 'min-h-0 min-w-0 w-full rounded-lg'
//             }
//           />
//         )}
//       </div>
//       {pills.length ? (
//         <div className="flex flex-row flex-wrap gap-2">
//           {pills?.map((pill) => (
//             <Badge
//               autoFocus={false}
//               data-tooltip-content="some cone"
//               href={pill.url}
//               key={pill.text}
//               className={twMerge(
//                 'max-w-fit text-ds-blue-dark bg-ds-blue-transparent',
//                 pill.className
//               )}
//             >
//               {pill.text}
//             </Badge>
//           ))}
//         </div>
//       ) : null}
//       {underCardTitle && <Title lineClamp={2}>{underCardTitle}</Title>}

//       {link && (
//         <p className="text-blue-medium text-[20px] font-bold leading-[150%] group-hover:underline line-clamp-2">
//           {link.text}
//         </p>
//       )}
//       <div className="leading-[24px] text-ds-grey-dark line-clamp-3 flex-1">
//         {description}
//       </div>
//       {button && (
//         <div className="flex w-full mt-3">
//           <ButtonLink {...button} className="h-[48px] text-base">
//             {button.text}
//             {button.icon && (
//               <div className="pl-[8px]">
//                 <Image
//                   height={50}
//                   width={50}
//                   src={button.icon}
//                   alt="button icon"
//                   className="min-h-0 min-w-0 w-5"
//                 />
//               </div>
//             )}
//           </ButtonLink>
//         </div>
//       )}
//     </div>
//   );

//   if (link) {
//     return (
//       <Link
//         href={link.url}
//         target={external ? '_blank' : ''}
//         rel={external ? 'noopener noreferrer' : ''}
//       >
//         {cardContent}
//       </Link>
//     );
//   } else {
//     return cardContent;
//   }
// };

// export const BaseCard = ({ children, link, className }) => {
//   let cardClasses = `border-solid border-ds-grey-medium flex flex-col justify-between gap-2 h-full w-full p-6 border rounded-lg group`;
//   if (className) cardClasses = twMerge(cardClasses, className);
//   if (link) cardClasses = twJoin(cardClasses, 'cursor-pointer');
//   const cardContent = <div className={cardClasses}>{children}</div>;

//   if (link) {
//     return (
//       <Link
//         href={link.url}
//         target={link.external ? '_blank' : ''}
//         rel={link.external ? 'noopener noreferrer' : ''}
//       >
//         {cardContent}
//       </Link>
//     );
//   } else {
//     return cardContent;
//   }
// };
