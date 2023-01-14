import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Anime Trends</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">anime you like</span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span> */}
        </div>
        <span className="featuredSub">Future Scops</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Anime data</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Popular: One piece</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span> */}
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Anime Add Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          {/* <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span> */}
        </div>
        <span className="featuredSub">Incress in last year</span>
      </div>
    </div>
  );
}
