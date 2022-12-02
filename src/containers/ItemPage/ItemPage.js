import { useParams, NavLink, useNavigate } from "react-router-dom";
import { getItemById } from "../../api/Api";
import { Tag, Button } from 'antd';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Spinner/Spinner";
import { ItemWrapper, ContentWrapper, TagWrapper, TagsWrapper, OtherContentWrapper, 
        DescriptionWrapper, ButtonsWrapper, PriceWrapper } from "./ItemPage.styled"
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";


function ItemPage() {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigation = () => {
        navigate(`/cart`)
    }

    const { id } = useParams();
    useEffect(() => {
        getItemById(id).then((response) => {
          setItem(response[0]);
          setIsLoading(false);
          console.log(response);
        });
      }, [id]);
  
    const handleAdd = ({item, count}) => {
        dispatch(addToCart({item, count}));
    }
    
    if (isLoading) {
    return <LoadingSpinner />;
    }
    return (
        <ItemWrapper>
            <ContentWrapper>
            <img alt="animal" src={item.image} />
                <DescriptionWrapper>
                    <TagsWrapper>
                        <TagWrapper>
                            <Tag color="purple">{item.first_tag}</Tag>
                        </TagWrapper>
                        <TagWrapper>
                            <Tag color="geekblue">{item.second_tag}</Tag>
                        </TagWrapper>
                    </TagsWrapper>
                    <OtherContentWrapper>
                        <h2>{item.name}</h2>
                        <div>{item.description}</div>
                        <div>Days not fed:  <strong>{item.days_not_fed}</strong></div>
                        <p>Danger Level:  <strong>{item.danger_level}</strong></p>
                        <div>
                            <span>Count:</span>
                            <input onChange={(e) => setCount(+e.target.value)}
                             defaultValue={1} type='number'></input>
                        </div>
                    </OtherContentWrapper>
                </DescriptionWrapper>
            </ContentWrapper>
            <PriceWrapper><p><strong>Price: {item.price} $</strong></p></PriceWrapper>
            <ButtonsWrapper>
                <NavLink to='/catalog'>
                    <Button>Go back</Button>
                </NavLink>
                <Button onClick={() => { handleAdd({item, count}); navigation();}}>Add to cart</Button>
            </ButtonsWrapper>
        </ItemWrapper>
    );
}


export default ItemPage;