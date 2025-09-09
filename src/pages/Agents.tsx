import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Star, Facebook, Twitter, Linkedin } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

const Agents = () => {
  const agents = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      specialization: "Luxury Properties",
      image: agent1,
      rating: 4.9,
      reviews: 156,
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@eliteproperties.com",
      description: "With over 10 years of experience in luxury real estate, Sarah specializes in high-end properties in Beverly Hills and surrounding areas. Her dedication to client satisfaction and market expertise has earned her numerous awards.",
      properties: 87,
      sales: "$45M",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Commercial Real Estate Specialist",
      specialization: "Commercial & Investment",
      image: agent2,
      rating: 4.8,
      reviews: 203,
      phone: "+1 (555) 234-5678",
      email: "michael.chen@eliteproperties.com",
      description: "Michael brings extensive knowledge in commercial real estate and investment properties. He has successfully closed over $100M in commercial transactions and helps clients maximize their investment potential.",
      properties: 134,
      sales: "$78M",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      title: "First-Time Buyer Specialist",
      specialization: "Residential Properties",
      image: agent1,
      rating: 4.9,
      reviews: 98,
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@eliteproperties.com",
      description: "Emily is passionate about helping first-time buyers navigate the real estate market. Her patient approach and comprehensive market knowledge make the home buying process smooth and stress-free.",
      properties: 67,
      sales: "$28M",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: "4",
      name: "David Thompson",
      title: "Luxury Estate Agent",
      specialization: "Luxury Estates",
      image: agent2,
      rating: 5.0,
      reviews: 142,
      phone: "+1 (555) 456-7890",
      email: "david.thompson@eliteproperties.com",
      description: "David specializes in luxury estates and waterfront properties. His attention to detail and personalized service have made him the go-to agent for high-net-worth clients seeking exceptional properties.",
      properties: 45,
      sales: "$65M",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Expert Agents</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Meet our team of professional real estate agents dedicated to helping you find your perfect property.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent) => (
              <Card key={agent.id} className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="md:flex">
                  
                  {/* Agent Photo */}
                  <div className="md:w-1/3">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Agent Info */}
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-1">{agent.name}</h3>
                        <p className="text-luxury-gold font-medium mb-2">{agent.title}</p>
                        <p className="text-gray-600 text-sm">{agent.specialization}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-bold text-navy">{agent.rating}</span>
                        </div>
                        <p className="text-xs text-gray-600">{agent.reviews} reviews</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {agent.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-gray-re-50 rounded">
                        <div className="font-bold text-navy">{agent.properties}</div>
                        <div className="text-xs text-gray-600">Properties Sold</div>
                      </div>
                      <div className="text-center p-2 bg-gray-re-50 rounded">
                        <div className="font-bold text-navy">{agent.sales}</div>
                        <div className="text-xs text-gray-600">Total Sales</div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-luxury-gold mr-2" />
                        <span className="text-gray-600">{agent.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-luxury-gold mr-2" />
                        <span className="text-gray-600">{agent.email}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mb-4">
                      <Button size="sm" className="flex-1 bg-navy hover:bg-navy-light">
                        Contact Agent
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Listings
                      </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a href={agent.social.facebook} className="text-gray-400 hover:text-luxury-gold">
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a href={agent.social.twitter} className="text-gray-400 hover:text-luxury-gold">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={agent.social.linkedin} className="text-gray-400 hover:text-luxury-gold">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-re-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert agents are here to guide you through every step of your real estate journey.
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-navy">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;