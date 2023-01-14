
import "./newAnime.scss";

export default function NewAnime() {
  return (
    <div className="newAnime">
      <h1 className="addAnimeTitle">New Anime</h1>
      <form className="addAnimeForm">
        <div className="addAnimeItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addAnimeItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" />
        </div>
        <div className="addAnimeItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSmall" />
        </div>
        <div className="addAnimeItem">
          <label>Title</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="addAnimeItem">
          <label>Description</label>
          <input type="text" placeholder="description" />
        </div>
        <div className="addAnimeItem">
          <label>Year</label>
          <input type="Number" placeholder="year" />
        </div>
        <div className="addAnimeItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" />
        </div>
        <div className="addAnimeItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" />
        </div>
        <div className="addAnimeItem">
          <label>Age Limit</label>
          <input type="number" placeholder="Age limit" />
        </div>
        <div className="addAnimeItem">
          <label>Is Series?</label>
          <select name="active" id="isSeries">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addAnimeItem">
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div className="addAnimeItem">
          <label>Video</label>
          <input type="file"  />
        </div>
        <button className="addAnimeButton">Create</button>
      </form>
    </div>
  );
}
