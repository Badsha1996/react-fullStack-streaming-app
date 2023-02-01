import { useContext } from "react";
import "./setting.scss";
import { AuthContext } from "~/authContext/AuthContext";
import Navbar from "~/components/navbar/Navbar";
import { useState,useEffect } from "react";
import storage from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import axios from "axios";
import { Link } from "react-router-dom";

const Setting = () => {
    const {user} = useContext(AuthContext)
    const [profilePic,setProfilePic]= useState("")
    const [random,setRandom] = useState(0)
    const [progress,setProgress] = useState(0)
    
    const upload = () => {
        
            const metadata = {
                contentType: '*'
            };
            const fileName = new Date().getTime() + user.username + user.createdAt
            const storageRef = ref(storage, `/items/${
                fileName
            }`);
            const uploadTask = uploadBytesResumable(storageRef, profilePic, metadata);

            uploadTask.on('state_changed', (snapshot) => { 
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress)
                
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
            }, () => { 
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProfilePic(downloadURL)
                });
            });
    }


    const handleUpload = async()=>{
        try {
            await axios.put(import.meta.env.VITE_API + "users/" + user._id ,{profilePic}, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
           localStorage.clear()

        } catch (error) {
           console.log(error)
        }
    }

    const randomAnimeCover = ["https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg",
    "https://images5.alphacoders.com/587/587597.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1968490054/display_1500/stock-photo-perfect-anime-image-to-be-used-as-wallpaper-1968490054.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fb7d836-1124-43d9-937c-f365d9aeaa8b/degaq2q-e8ea87d3-5990-4c6c-9c4d-a27ff8f45acd.png/v1/fill/w_622,h_350,q_70,strp/jujutsu_kaisen_megumi_fushiguro_wallpaper_by_muztnafi_degaq2q-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNWZiN2Q4MzYtMTEyNC00M2Q5LTkzN2MtZjM2NWQ5YWVhYThiXC9kZWdhcTJxLWU4ZWE4N2QzLTU5OTAtNGM2Yy05YzRkLWEyN2ZmOGY0NWFjZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1YRXWZZJUq8VpzXlgMRxH5aDG2_7yk5ZXaP--fTJ5cw",
    "https://r1.ilikewallpaper.net/iphone-14-plus-wallpapers/download-109781/mangekyou-sharingan.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fb7d836-1124-43d9-937c-f365d9aeaa8b/deg6kcz-608c8515-f1b5-4964-ad50-b619be7897af.png/v1/fill/w_622,h_350,q_70,strp/jujutsu_kaisen_itadori_yuuji_wallpaper_by_muztnafi_deg6kcz-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNWZiN2Q4MzYtMTEyNC00M2Q5LTkzN2MtZjM2NWQ5YWVhYThiXC9kZWc2a2N6LTYwOGM4NTE1LWYxYjUtNDk2NC1hZDUwLWI2MTliZTc4OTdhZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g-NTuZXVV9MjiGJZaTfe7_DRJCH045mx0VpEIrH-cPU"
]


    return (
        <>
        <Navbar/>
            <div className="profile-container-main">
            <img className="cover-anime"src={randomAnimeCover[random]} alt="" />
                <div className="button-details">
<div className="upload-btn-details">
<input type="file" className="file-upload" onChange={(e)=>setProfilePic(e.target.files[0]) }/>
                    {progress!==100?<button className="btn-upload" onClick={upload}>Upload Display Picture</button>: <button className="btn-upload" onClick={handleUpload}><Link to={"/login"}>Set display</Link></button>}

</div>
<button className="btn-upload" onClick={()=>setRandom(Math.floor(Math.random() * randomAnimeCover.length))}>Change Cover Image</button>

                </div>
                <img className="profile-container-main_profile" src={user.profilePic} alt="" />
               
                <div className="profile-container-main_profile_infos">
                    <h1 className="profile-container-main_name">{user.isAdmin ? user.username.toUpperCase() + " (Admin)":user.username.toUpperCase()}</h1>
                    <div className="profile-info-below">
                        <h2 className="profile-container-main_occupation">{user.email}</h2>
                        <h2 className="profile-container-main_occupation">{user.updatedAt.slice(0,10)}</h2>
                        <h2 className="profile-container-main_occupation">{user.createdAt.slice(0,10)}</h2>
                        
                    </div>
                    <h5 style={{color:"grey"}}>{user._id}</h5>
                </div>
            </div>
        </>
    )
}

export default Setting
