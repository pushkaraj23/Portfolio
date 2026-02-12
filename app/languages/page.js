import Languages from "@/components/Languages";

export const metadata = {
  title: "Languages | Pushkaraj",
  description: "Multilingual communication strengths",
};

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E8]">
      <main>
        <Languages />
      </main>
    </div>
  );
}
