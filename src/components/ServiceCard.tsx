import { Card } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  external?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, link, external }: ServiceCardProps) => {
  const CardContent = (
    <Card className="group relative overflow-hidden border-0 bg-card hover:bg-secondary/50 transition-all duration-300 h-full p-8 cursor-pointer">
      <div className="space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-all duration-300">
          <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
          <span>Zobacz więcej</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Subtle hover effect line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
    </Card>
  );

  return external ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardContent}
    </a>
  ) : (
    <Link to={link} className="block h-full">
      {CardContent}
    </Link>
  );
};

export default ServiceCard;
