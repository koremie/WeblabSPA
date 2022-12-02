import cardImg from "../../images/HomeCardImg.webp";
import mainImg from "../../images/mainImg.webp";
import lol from "../../images/frog-spin-frog.gif";
import { useState } from 'react';
import { Wrapper, HeadingContainer, HomeCardWrapper, ViewMoreButtonWrapper, ViewMoreButton} from "./Home.styled";

const HomeCard = ({image, title, description="animal"}) => {
   return (
       <div>
           <img src={image} alt="pic" />
           <h2>{title}</h2>
           <p>{description}</p>
       </div>
   );
};

const data = [
   {
       title: "Cats",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
       title: "Dogs",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
       title: "Fishes",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
       title: "Guinea pigs",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
       title: "Parrots",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
       title: "Turtles",
       image: cardImg,
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
           + "eaque qui soluta officia eius illum molestiae fugit."
           + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
   },
   {
      title: "Chameleons",
      image: cardImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
          + "eaque qui soluta officia eius illum molestiae fugit."
          + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
  },
];

export default function Home() {
   const [numberItems, setNumberItems] = useState(3);
   const currentData = data.slice(0, numberItems);
   const [dataLength] = useState(data.length);
   const [visible, setVisible] = useState(true);
   const block = document.querySelector('.home-block-with-card');

   const removeElement = () => {
       setVisible((prev) => !prev);
       console.log('remove');
   };

   const showMoreItems = () => {
       if (numberItems + 3 >= dataLength) {
           removeElement();
       }
       console.log('lol');
       setNumberItems(numberItems + 3);
   }
   return(
      <Wrapper>
         <HeadingContainer>
            <img src={mainImg} />
            <div className="headingContent">
            <h1>Terrarium animals</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.
            </p>
            </div>

         </HeadingContainer>
         <HomeCardWrapper>
         {currentData.map(({ title, image, description }, idx) => (
            <HomeCard
                  title={title}
                  image={image}
                  description={description}
                  key={idx}
            />
         ))}
         </HomeCardWrapper>
         {visible && (
            <ViewMoreButtonWrapper>
               <ViewMoreButton
                  onClick={showMoreItems}
               >
                  View more
               </ViewMoreButton>
            </ViewMoreButtonWrapper>
         )}

      </Wrapper>
   )
}