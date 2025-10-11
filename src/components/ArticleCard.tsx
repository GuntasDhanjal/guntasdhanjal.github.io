import { Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export const ArticleCard = ({ title, date, summary, link }: ArticleCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="flex items-start gap-2 mb-3">
        <Calendar className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
        <time dateTime={date} className="text-sm text-muted-foreground">
          {formattedDate}
        </time>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="text-foreground/80 mb-4 line-clamp-3">{summary}</p>

      <Button
        asChild
        variant="ghost"
        className="text-accent hover:text-accent/80 p-0 h-auto font-medium group/link"
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          Read Article
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </Button>
    </article>
  );
};
