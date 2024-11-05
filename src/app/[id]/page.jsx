"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Parent } from "@/compenens/page";
const Blog = () => {
  const a = usePathname();
  const [lol, setLol] = useState([]);
  useEffect(() => {
    const api = async () => {
      const a1 = await fetch(`https://dev.to/api/articles/${a}`);
      const b1 = await a1.json();
      console.log(b1);
      setLol(b1);
    };
    api();
  }, []);
  if(lol.length === 0) return ( 
<div style={{display:'flex' , justifyContent:'center' , alignItems:'center' ,height:'100vh'}}>
<svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>
</div>
  )


  return (
<Parent>
<div className="containerContainer">
      <div className="container3">
        <div className="dateContainer">
    
<Link href={lol.url}>
<button class="button-name" role="button">{lol.type_of}</button>
</Link>
          <div className="date">{lol.readable_publish_date}</div>
        </div>
        <div className="title2">
        {lol.title}
        </div>
        <div className="userG">
          <div> 
            <img className="userImg" src={lol.user.profile_image} alt="" /> 
          </div>
          <div className="nameContainer">
            <div className="usersName">{lol.user.name}</div>
            <div className="userUserName">@{lol.user.username}</div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}> 
        <img className="Img" src={lol.cover_image} alt="" />
        </div>
        <div className="description">{lol.description}</div>
      </div>
    </div>
</Parent>
  );
};
export default Blog;
