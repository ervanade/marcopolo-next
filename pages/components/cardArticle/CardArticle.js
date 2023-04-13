import React from 'react'
import  Link from 'next/link';
import { MdTravelExplore } from 'react-icons/md';
import Image from 'next/image';

const CardArticle = ({Title, Images, Excerpt, Links}) => {
    const handleDragStart = (event) => {
        event.preventDefault();
      };
      const loaderProp =({ src }) => {
        return src;
    }
  return (
    <div className="card__article">
    <div className="card__article__image">
    <Link draggable="true" onDragStart={handleDragStart} href={Links || "#"}>
    <div style={{ width: '100%', height: '100%', position: "relative" }}>

    <Image src={Images} alt={`gambar-${Title}`} layout="fill" loader={loaderProp} objectFit="cover"/>
        </div>
   </Link>
    </div>
    <div className="card__description">
     <Link draggable="true" onDragStart={handleDragStart} href={Links || "#"}><h1>{Title?.split(" ").slice(0, 7).join(" ")}..</h1></Link>
     <p>{Excerpt?.split(" ").slice(0, 7).join(" ")}...</p>
     <Link href={Links || "#"}><button className='button__explore' name="button__explore">Explore<MdTravelExplore className="button__icon" size={20}/></button></Link>
     </div>
   </div>
  )
}

export default CardArticle