import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      period: "per listing",
      description: "Perfect for individual sellers and small-scale listings",
      features: [
        "Professional Photography",
        "MLS Listing",
        "Online Property Portal",
        "Basic Marketing Materials",
        "Email Support",
        "30-Day Listing Duration"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Standard",
      price: "$599",
      period: "per listing",
      description: "Most popular choice for sellers wanting comprehensive marketing",
      features: [
        "Everything in Basic",
        "Virtual Tour & Video",
        "Premium Photography",
        "Social Media Marketing",
        "Print Advertising",
        "Dedicated Agent Support",
        "60-Day Listing Duration",
        "Market Analysis Report"
      ],
      popular: true,
      buttonText: "Choose Standard",
      buttonVariant: "default" as const
    },
    {
      name: "Premium",
      price: "$999",
      period: "per listing",
      description: "Ultimate package for luxury properties and maximum exposure",
      features: [
        "Everything in Standard",
        "Drone Photography",
        "Professional Staging Consultation",
        "Luxury Marketing Materials",
        "Featured Listing Placement",
        "24/7 Priority Support",
        "90-Day Listing Duration",
        "Personal Marketing Manager",
        "Open House Coordination"
      ],
      popular: false,
      buttonText: "Go Premium",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose the perfect plan to showcase your property and reach qualified buyers.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-luxury-gold scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-luxury-gold text-navy px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-navy">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-luxury-gold hover:bg-luxury-gold/90 text-navy' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-re-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your listing with our premium add-on services designed to maximize your property's appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Extra Photography</h3>
                <p className="text-gray-600 text-sm mb-3">Additional professional photos</p>
                <p className="text-2xl font-bold text-luxury-gold">$99</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Video Walkthrough</h3>
                <p className="text-gray-600 text-sm mb-3">Professional video tour</p>
                <p className="text-2xl font-bold text-luxury-gold">$199</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Home Staging</h3>
                <p className="text-gray-600 text-sm mb-3">Professional staging consultation</p>
                <p className="text-2xl font-bold text-luxury-gold">$399</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm mb-3">Detailed market report</p>
                <p className="text-2xl font-bold text-luxury-gold">$149</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">What's included in the professional photography?</h3>
                <p className="text-gray-600">Our professional photography includes high-resolution images of all main rooms, exterior shots, and detail photos that highlight your property's best features.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Can I upgrade my plan after listing?</h3>
                <p className="text-gray-600">Yes, you can upgrade your plan at any time. You'll only pay the difference between your current plan and the upgraded plan.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">What happens if my property doesn't sell?</h3>
                <p className="text-gray-600">We offer a satisfaction guarantee. If your property doesn't receive qualified interest within the listing period, we'll work with you to adjust the strategy at no additional cost.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;