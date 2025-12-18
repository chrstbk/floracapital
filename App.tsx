import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Target, Users, TrendingUp } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Sprout className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Flora Capital Partners
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
            Long-term business owners committed to growing established B2B service companies in Ontario
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            We acquire and grow established B2B professional services businesses in the Kitchener-Waterloo region, 
            partnering with founders to build lasting value for employees, customers, and communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Focused Strategy</h3>
              <p className="text-gray-700">
                We target profitable B2B service businesses with strong fundamentals and growth potential in Ontario.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">People First</h3>
              <p className="text-gray-700">
                We believe in preserving company culture while empowering teams to reach their full potential.
              </p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Long-term Growth</h3>
              <p className="text-gray-700">
                Patient capital focused on sustainable growth, not quick exits. We're in it for the long haul.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Philosophy
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Flora Capital Partners was founded on the belief that small and medium-sized businesses 
              are sources of innovation, community strength, and economic vitality. We're committed to 
              being stewards of these businesses for the long term.
            </p>
            <p>
              Our approach is rooted in respect for what founders have built, combined with fresh 
              perspectives and operational expertise to unlock new growth opportunities. We believe 
              in transparent communication, empowering teams, and making decisions that benefit all 
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Acquisition Criteria */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What We're Looking For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Industry Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• B2B Professional Services</li>
                <li>• Business Consulting</li>
                <li>• Technical Services</li>
                <li>• Specialized Training</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Business Profile</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Revenue: $1M - $5M</li>
                <li>• Location: Ontario (KW region preferred)</li>
                <li>• Profitable with growth potential</li>
                <li>• Strong customer relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 to-emerald-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Considering Your Next Chapter?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If you've built a successful business and are thinking about transition options, 
            we'd love to have a confidential conversation about your goals and how we might help.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sprout className="h-8 w-8" />
            <p className="text-xl font-bold">Flora Capital Partners</p>
          </div>
          <p className="text-gray-400 mb-4">
            Long-term business owners committed to growth and stewardship
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Flora Capital Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
