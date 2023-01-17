import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import { useMemo } from "react";



export default function Home() {
  const MONTHS = useMemo(()=>[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
],[])
const [userStats, setUserStats] = useState([])

useEffect(() => {
  const getState = async () => {
    try {
        const res = await axios.get("/users/stats", {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        const statsList = res.data.sort(function (a,b) {
          return a._id - b._id;
        })
        statsList.map(item=>setUserStats(prev =>[...prev, {name:MONTHS[item._id - 1],"New User":item.total}]))
    } catch (error) {
        console.log(error)
    }

}
    getState()

}, [MONTHS])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}

