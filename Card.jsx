import profile from "./assets/profile.webp";



function Card() {
  return (
    <div className="card">
        

<img className="img" src={profile} alt="profile picture" ></img>
<h1 className="title">Hey!</h1> 
<p className="text">Every moment you choose to keep going—even when it is
 hard—is proof that you are unstoppable. </p>     
    </div>
  )
}

export default Card
