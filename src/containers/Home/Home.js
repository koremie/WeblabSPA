import cardImg from "../../images/HomeCardImg.webp";
import mainImg from "../../images/mainImg.webp";
import { Wrapper, HeadingContainer, HomeCardWrapper, ViewMoreButtonWrapper, ViewMoreButton} from "./Home.styled";

<div class="main-img-block">
    <img src={mainImg}></img>
</div>

const HomeCard = ({img, title, description="animal"}) => {
   return (
       <div>
           <img src={img} alt="pic" />
           <h2>{title}</h2>
           <p>{description}</p>
       </div>
   );
};

export default function Home(cards) {
   return(
      <Wrapper>
         <HeadingContainer>
            <img src={mainImg} />
            <div className="headingContent">
            <h1>Terrarium animals</h1>
            <p class="text-desc">
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
            <HomeCard 
               img={cardImg} 
               title="Hippo" 
               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt."
            />
            <HomeCard 
               img={cardImg} 
               title="Hippo" 
               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt."
            />
            <HomeCard 
               img={cardImg} 
               title="Hippo" 
               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit. 
               Labore deleniti nihil delectus dolore molestias! Veniam, deserunt."
            />
         </HomeCardWrapper>
         <ViewMoreButtonWrapper>
            <ViewMoreButton>
               View more
            </ViewMoreButton>
         </ViewMoreButtonWrapper>
      </Wrapper>
   )
}