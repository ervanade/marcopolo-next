import React from 'react'
import  Link from 'next/link';
import { MdTravelExplore } from 'react-icons/md';

const CardArticle = ({Title, Image, Excerpt, Links}) => {
    const handleDragStart = (event) => {
        event.preventDefault();
      };
  return (
    <div className="card__article">
    <div className="card__article__image">
    <Link draggable="true" onDragStart={handleDragStart} href={Links}>
    <img src={Image} alt={`gambar-${Title}`} />
   </Link>
    </div>
    <div className="card__description">
     <Link draggable="true" onDragStart={handleDragStart} href={Links}><h1>{Title?.split(" ").slice(0, 7).join(" ")}..</h1></Link>
     <p>{Excerpt?.split(" ").slice(0, 7).join(" ")}...</p>
     <Link href={Links}><button className='button__explore' name="button__explore">Explore<MdTravelExplore className="button__icon" size={20}/></button></Link>
     </div>
   </div>
  )
}

export default CardArticle