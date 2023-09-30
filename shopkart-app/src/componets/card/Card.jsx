import './card.css';
import { useState } from 'react';
import btn from '../../static/images/img/btn.png';
function Card({ img, title, desc, price, }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="product-card glide__slide" >
      <div className="product-img">
        <img src={img} className="card-img" />
        <img src={btn} className="btn-img" />
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        <p className={`product-description ${isExpanded ? 'expanded' : ''}`}>
          {desc}
          {!isExpanded && (
            <span className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
              Read more
            </span>
          )}
        </p>
        <span>$ {price}</span>
      </div>
    </li>
  );
}

export default Card;
