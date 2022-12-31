import { ArrowBackIosOutlined,  ArrowForwardIosOutlined} from "@material-ui/icons";
import { MutableRefObject, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss"

const List = ({list} :{list : any}) => {
    const [cardNumber , setCardNumber] = useState(0);

    const listRef = useRef<HTMLDivElement>() 
    const reset = (dir : string) =>{
        if (dir==="left"){
            (listRef as MutableRefObject<HTMLDivElement>).current.style.transform = `translateX(0)`

        }
        if(dir === "right"){
            (listRef as MutableRefObject<HTMLDivElement>).current.style.transform = `translateX(-50%)`

        }
    }
    const handleClick = (direction: string) =>{
        
        let distance = (listRef as MutableRefObject<HTMLDivElement>).current.getBoundingClientRect().x - 50
        if(direction === "left" && cardNumber > 0){
            setCardNumber(cardNumber - 1);
            if (cardNumber <=3){
                reset("left")
            }else{
                (listRef as MutableRefObject<HTMLDivElement>).current.style.transform = `translateX(${240 + distance}px)`
            }
        }
        if (direction === "right" && cardNumber < 5){
            setCardNumber(cardNumber + 1);
            if(cardNumber >=4){
                reset("right")
            }else{
                (listRef as MutableRefObject<HTMLDivElement>).current.style.transform = `translateX(${-240 + distance}px)`

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
                <div className="container" ref={(listRef as MutableRefObject<HTMLDivElement>)}>
                    {
                        list.content.map((item :any, i:any)=>(
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