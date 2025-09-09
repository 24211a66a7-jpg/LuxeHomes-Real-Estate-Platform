import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, Calendar, Eye, Heart } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  
  // Mock property data
  const property = {
    id: "1",
    title: "Luxury Modern Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    images: [property1, property2, property3],
    beds: 4,
    baths: 3,
    sqft: 3200,
    description: "This stunning modern villa combines luxury with contemporary design. Located in the prestigious Beverly Hills area, this property offers breathtaking views and premium amenities. The open-plan living spaces feature floor-to-ceiling windows, high-end finishes, and state-of-the-art appliances. The master suite includes a spacious walk-in closet and spa-like bathroom. Outside, you'll find a beautifully landscaped garden with a infinity pool and outdoor entertainment area perfect for hosting guests.",
    features: [
      "Infinity Pool",
      "3-Car Garage",
      "Wine Cellar",
      "Home Theater",
      "Gourmet Kitchen",
      "Walk-in Closets",
      "Smart Home Technology",
      "Landscaped Garden"
    ],
    yearBuilt: 2021,
    lotSize: "0.5 acres"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Property Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <div className="bg-luxury-gold text-navy px-4 py-2 rounded-lg inline-block mb-4 font-bold text-lg">
            {property.price}
          </div>
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            {property.location}
          </div>
        </div>
        
        <div className="absolute top-8 right-8 flex space-x-4">
          <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Eye className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Property Stats */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Bed className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-navy">{property.beds}</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <Bath className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-navy">{property.baths}</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <Square className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-navy">{property.sqft}</div>
                      <div className="text-gray-600">Sq Ft</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-navy">{property.yearBuilt}</div>
                      <div className="text-gray-600">Year Built</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-4">Property Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-4">Property Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-4">Property Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Property view ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Contact Agent */}
              <Card className="shadow-card sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">Contact Agent</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-navy hover:bg-navy-light" size="lg">
                      Schedule a Tour
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Request Info
                    </Button>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-2">Listing Agent</p>
                      <p className="font-semibold text-navy">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Elite Properties</p>
                      <p className="text-sm text-luxury-gold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">Property Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">Villa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lot Size:</span>
                      <span className="font-medium">{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-green-600">Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;