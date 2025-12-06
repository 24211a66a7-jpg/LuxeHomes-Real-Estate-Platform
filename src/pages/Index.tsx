import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Clock, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
const Index = () => {
  const featuredProperties = [{
    id: "1",
    title: "Luxury Modern Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    image: property1,
    beds: 4,
    baths: 3,
    sqft: 3200
  }, {
    id: "2",
    title: "Contemporary Apartment",
    price: "$650,000",
    location: "Downtown, NY",
    image: property2,
    beds: 2,
    baths: 2,
    sqft: 1800
  }, {
    id: "3",
    title: "Mediterranean Estate",
    price: "$2,100,000",
    location: "Malibu, CA",
    image: property3,
    beds: 5,
    baths: 4,
    sqft: 4500
  }];
  const features = [{
    icon: Shield,
    title: "Trusted & Secure",
    description: "Verified properties with secure transactions and complete legal documentation."
  }, {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in real estate service with industry-leading awards."
  }, {
    icon: Users,
    title: "Expert Team",
    description: "Professional agents with extensive market knowledge and negotiation skills."
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your property needs and inquiries."
  }, {
    icon: Star,
    title: "5-Star Service",
    description: "Exceptional customer satisfaction with personalized property solutions."
  }, {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Data-driven market analysis to help you make informed property decisions."
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-navy/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream
            <span className="block text-luxury-gold">Property Today</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover luxury homes, modern apartments, and investment opportunities with our expert guidance.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-luxury-gold hover:bg-luxury-gold/90 text-navy">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-navy">
              <Link to="/contact" className="text-accent">Contact Agent</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-re-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in the most desirable locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.map(property => <PropertyCard key={property.id} {...property} />)}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild variant="outline">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Elite Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive real estate services and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;