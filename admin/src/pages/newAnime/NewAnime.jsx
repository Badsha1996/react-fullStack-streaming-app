import {useState} from "react";
import "./newAnime.scss";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

export default function NewAnime() {
    const [movie, setMovie] = useState({});
    const [img, setImg] = useState("");
    const [imgTitle, setImgTitle] = useState("")
    const [imgSmall, setImgSmall] = useState("")
    const [trailer, setTrailer] = useState("")
    const [video, setVideo] = useState("");
    const [uploaded, setUploaded] = useState(0);


    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({
            ...movie,
            [e.target.name]: value
        })
    }
    const upload = (items) => {
        items.forEach((item) => {
            const metadata = {
                contentType: '*'
            };
            const storageRef = ref(storage, `/items/${
                item.file.name
            }`);
            const uploadTask = uploadBytesResumable(storageRef, item.file, metadata);

            uploadTask.on('state_changed', (snapshot) => { 
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log("error")
                }
            }, (error) => {
                
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("unauthorized")
                        break;
                    case 'storage/canceled':
                        console.log("canceled")
                        break;
                    case 'storage/unknown':
                        console.log("unknown")
                        break;
                    default:
                        console.log("error")
                }
            }, () => { // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setMovie(prev=>{return {...prev,[item.label]:downloadURL}});
                    setUploaded(prev => prev +1)
                });
            });
            
        });
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {
                file: img,
                label: "img"
            },
            {
                file: imgTitle,
                label: "imgTitle"
            },
            {
                file: imgSmall,
                label: "imgSmall"
            },
            {
                file: trailer,
                label: "trailer"
            }, {
                file: video,
                label: "video"
            }
        ])
    }
    console.log(movie)
    return (
        <div className="newAnime">
            <h1 className="addAnimeTitle">New Anime</h1>
            <form className="addAnimeForm">
                <div className="addAnimeItem">
                    <label>Image</label>
                    <input type="file" id="img" name="img"
                        onChange={
                            e => setImg(e.target.files[0])
                        }/>
                </div>
                <div className="addAnimeItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" name="imgTitle"
                        onChange={
                            e => setImgTitle(e.target.files[0])
                        }/>
                </div>
                <div className="addAnimeItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSmall" name="imgSmall"
                        onChange={
                            e => setImgSmall(e.target.files[0])
                        }/>
                </div>
                <div className="addAnimeItem">
                    <label>Title</label>
                    <input type="text" placeholder="Your name" name="title"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Description</label>
                    <input type="text" placeholder="description" name="desc"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Year</label>
                    <input type="Number" placeholder="year" name="year"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name="genre"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Duration</label>
                    <input type="text" placeholder="duration" name="duration"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Age Limit</label>
                    <input type="number" placeholder="Age limit" name="Agelimit"
                        onChange={handleChange}/>
                </div>
                <div className="addAnimeItem">
                    <label>Is Series?</label>
                    <select name="isSeries" id="isSeries"
                        onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="addAnimeItem">
                    <label>Trailer</label>
                    <input type="file" name="trailer"
                        onChange={
                            e => setTrailer(e.target.files[0])
                        }/>
                </div>
                <div className="addAnimeItem">
                    <label>Video</label>
                    <input type="file" name="video"
                        onChange={
                            e => setVideo(e.target.files[0])
                        }/>
                </div>
                {
                uploaded === 5 ? (
                    <button className="addAnimeButton">Create</button>
                ) : (
                    <button className="addAnimeButton"
                        onClick={handleUpload}>Upload</button>
                )
            } </form>
        </div>
    );
}
