import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Anime</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSmall" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="Number" placeholder="year" />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input type="number" placeholder="Age limit" />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="active" id="isSeries">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file"  />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
