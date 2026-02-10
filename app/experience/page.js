import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience | Pushkaraj",
  description: "Professional experience — Frontend Engineer",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#F8F4E8]">
      <main>
        <Experience />
      </main>
    </div>
  );
}
