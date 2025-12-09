import './Card.css';

// Card component for displaying cat images/info
function Card({ children }) {
  return (
    <div className="card-container">
      {children}
    </div>
  );
}

export default Card;
