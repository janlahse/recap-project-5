import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({ pieces, isLoading }) {
  return (
    <div>
      <Spotlight pieces={pieces} isLoading={isLoading} />
    </div>
  );
}
