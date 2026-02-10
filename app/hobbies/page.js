import Hobbies from "@/components/Hobbies";

export const metadata = {
  title: "Hobbies | Pushkaraj",
  description: "Interests & hobbies",
};

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E8]">
      <main>
        <Hobbies />
      </main>
    </div>
  );
}
