import About from "@/components/About";

export const metadata = {
  title: "About | Pushkaraj",
  description: "About me — Frontend Engineer & UI Architect",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E8]">
      <main>
        <About />
      </main>
    </div>
  );
}
