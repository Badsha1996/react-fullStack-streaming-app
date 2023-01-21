import { ArrowBackIosOutlined,  ArrowForwardIosOutlined} from "@material-ui/icons";
import {  useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss"

const List = ({list}) => {
    const [cardNumber , setCardNumber] = useState(0);

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
                (listRef ).current.style.transform = `translateX(${240 + distance}px)`
            }
        }
        if (direction === "right" && cardNumber < 5){
            setCardNumber(cardNumber + 1);
            if(cardNumber >=4){
                reset("right")
            }else{
                (listRef ).current.style.transform = `translateX(${-240 + distance}px)`

            }
            
        }
        
    }
    return(
        <div className="List">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="arrow Left" 
                onClick={()=>handleClick("left")}
                onDoubleClick={(e)=>e.preventDefault()}
                />
                <div className="container" ref={(listRef )}>
                    {
                        list.content.map((item, i)=>(
                            <ListItem key={i} index={i} item={item}/>
                        ))
                    }
                    
                </div>
                <ArrowForwardIosOutlined className="arrow Right" 
                onClick={()=>handleClick("right")}
                onDoubleClick={(e)=>e.preventDefault()} />
            </div>
        </div>
    )
}

export default List;