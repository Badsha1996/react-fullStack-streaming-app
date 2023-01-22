import "./featuredInfo.scss";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Trends</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">ANIME</span>

                </div>
                <span className="featuredSub">Future Scops</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Data</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">MOVIES</span>

                </div>
                <span className="featuredSub">Compared to now</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">ADD REVENEW</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>

                </div>
                <span className="featuredSub">Incress in last year</span>
            </div>
        </div>
    );
}
