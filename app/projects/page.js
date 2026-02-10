import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects | Pushkaraj",
  description: "Volunteer work & projects",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E8]">
      <main>
        <Projects />
      </main>
    </div>
  );
}
