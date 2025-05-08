import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { historicalMilestones } from "@/lib/placeholder-data";
import { ScrollText } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Enduring Legacy
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Tracing the journey of Club Atlético Libertad since 1906.
        </p>
      </header>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        <div className="space-y-12">
          {historicalMilestones.map((milestone, index) => (
            <div key={milestone.id} className="md:grid md:grid-cols-2 md:gap-x-8 items-start">
              {/* Icon and Year - Left or Right based on index */}
              <div className={`flex md:justify-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-2 md:row-start-1 md:text-left'}`}>
                <div className={`md:w-1/2 p-2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="flex items-center md:flex-col">
                    <div className={`p-3 rounded-full bg-primary text-primary-foreground shadow-md mb-0 md:mb-2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      {milestone.icon ? <milestone.icon className="h-6 w-6" /> : <ScrollText className="h-6 w-6" />}
                    </div>
                    <span className={`text-lg font-semibold text-primary ml-3 md:ml-0 ${index % 2 === 0 ? '' : ''}`}>
                      {milestone.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content - Opposite side of Icon/Year */}
              <div className={`md:py-4 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1 md:text-right'}`}>
                 <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <CardHeader>
                    <CardTitle className={`text-2xl ${index % 2 === 0 ? '' : 'md:text-right'}`}>{milestone.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-base ${index % 2 === 0 ? '' : 'md:text-right'}`}>{milestone.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
