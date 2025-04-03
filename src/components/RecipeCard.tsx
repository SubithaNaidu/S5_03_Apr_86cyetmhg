import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image, description }) => {
  const isBase64 = image.startsWith("data:image"); // Check if the image is uploaded (Base64)

  return (
    <div className="recipe-card">
      {/* Image Container */}
      <div className="image-container">
        {/* If URL Image - Click Opens Full Image in New Tab */}
        {!isBase64 ? (
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className="recipe-image clickable" />
          </a>
        ) : (
          <img src={image} alt={title} className="recipe-image" />
        )}
      </div>

      {/* Recipe Info */}
      <div className="recipe-info">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-description">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
        <div className="button-container">
          <Link to={`/recipes/${id}`} className="view-details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
