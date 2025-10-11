import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  ctaLabel: string;
  ctaHref: string;
}

export const ProjectCard = ({
  title,
  role,
  description,
  date,
  tags,
  coverImage,
  ctaLabel,
  ctaHref,
}: ProjectCardProps) => {
  return (
    <article className="group glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <div className="aspect-video overflow-hidden bg-muted flex-shrink-0">
        <img
          src={coverImage}
          alt={`${title} project cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {role} • {date}
            </p>
          </div>
        </div>

        <p className="text-foreground/80 mb-4 line-clamp-3 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          asChild
          variant="default"
          className="w-full group/btn bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </article>
  );
};
