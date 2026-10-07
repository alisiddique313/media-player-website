import FeatureCard from "./FeatureCard";
import { features } from "@/lib/features";

export default function FeatureDetails() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} details={f.details} />
      ))}
    </div>
  );
}
