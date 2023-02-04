import { ArrowBackIosOutlined,  ArrowForwardIosOutlined} from "@mui/icons-material";
import {  useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss"
import Loading from "../loading/Loading";

const List = ({list}) => {
    const [cardNumber , setCardNumber] = useState(0);
    const [clickLimit , setClickLimit] = useState((window.innerWidth/230));
    const listRef = useRef() 
    
    const reset = (dir) =>{
        if (dir==="left"){
            (listRef ).current.style.transform = `translateX(0)`

        }
        if(dir === "right"){
            (listRef ).current.style.transform = `translateX(-50%)`

        }
    }
    const handleClick = (direction) =>{
        
        let distance = (listRef ).current.getBoundingClientRect().x - 50
        if(direction === "left" && cardNumber > 0){
            setCardNumber(cardNumber - 1);
            if (cardNumber <=3){
                reset("left")
            }else{
                (listRef ).current.style.transform = `translateX(${230 + distance}px)`
            }
        }
        if (direction === "right" && cardNumber < 10 - clickLimit){
            setCardNumber(cardNumber + 1);
            if(cardNumber >=4){
                reset("right")
            }else{
                (listRef ).current.style.transform = `translateX(${-230 + distance}px)`

            }
            
        }
        
    }
    
    return(
        <div className="List">{
            !list ? (<><Loading/></>) :(<>
            
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="arrow Left" 
                onClick={()=>handleClick("left")}
                />
                <div className="container" ref={(listRef )}>
                    {
                        list.content.map((item, i)=>(
                            item ? <ListItem key={i} index={i} item={item}/>: <><p>Loading..</p></>
                            
                        ))
                    }
                    
                </div>
                <ArrowForwardIosOutlined className="arrow Right" 
                onClick={()=>handleClick("right")}
                />
            </div>
            
            </>)
        }
            
        </div>
    )
}

export default List;