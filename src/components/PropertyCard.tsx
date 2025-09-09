import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: number;
}

const PropertyCard = ({ id, title, price, location, image, beds, baths, sqft }: PropertyCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-luxury-gold transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 text-luxury-gold" />
          <span className="text-sm">{location}</span>
        </div>

        {(beds || baths || sqft) && (
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            {beds && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{beds} Beds</span>
              </div>
            )}
            {baths && (
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{baths} Baths</span>
              </div>
            )}
            {sqft && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{sqft} sqft</span>
              </div>
            )}
          </div>
        )}

        <Link
          to={`/property/${id}`}
          className="block w-full bg-navy text-white text-center py-2 rounded-lg hover:bg-navy-light transition-colors"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;