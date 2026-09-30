import Button from "@/ui/Button";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-heading sm:text-3xl">Good evening, //////name/////</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here's what's happening with your business today.
          </p>
        </div>

        <Button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          New project
        </Button>
      </div>
    </section>
  );
}
