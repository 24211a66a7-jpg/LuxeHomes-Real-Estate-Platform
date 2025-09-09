import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Award } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to find your dream property? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy mb-6">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I'm interested in *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy">
                        <option value="">Please select...</option>
                        <option value="buying">Buying a Property</option>
                        <option value="selling">Selling a Property</option>
                        <option value="renting">Renting a Property</option>
                        <option value="investing">Investment Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your property needs..." 
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-navy hover:bg-navy-light">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-navy mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Visit Our Office</h3>
                        <p className="text-gray-600">
                          123 Real Estate Avenue<br />
                          Beverly Hills, CA 90210<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          Main: +1 (555) 123-4567<br />
                          Sales: +1 (555) 234-5678<br />
                          Support: +1 (555) 345-6789
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          General: info@eliteproperties.com<br />
                          Sales: sales@eliteproperties.com<br />
                          Support: support@eliteproperties.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Real Estate Ave, Beverly Hills, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">Why Choose Elite Properties?</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div className="text-2xl font-bold text-navy">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Award className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div className="text-2xl font-bold text-navy">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <MessageSquare className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div className="text-2xl font-bold text-navy">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
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

export default Contact;