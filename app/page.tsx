import { ProfileModeToggle } from "@/components/profile-mode-toggle"
import { DeveloperProfile } from "@/components/developer-profile"
import { AcademicProfile } from "@/components/academic-profile"
import { ModeToggle } from "@/components/mode-toggle"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProfileContent />
    </main>
  )
}
function ProfileContent() {
  return (
    <div className="space-y-20">
      <div id="profile" className="client-only-content">
        <DeveloperProfile />
        <AcademicProfile />
      </div>

      <ContactSection />
      <BlogSection />
    </div>
  )
}


// function ProfileContent() {
//   return (
//     <div className="space-y-20">
//       <div className="flex justify-center mb-8">
//         <ProfileModeToggle />
//       </div>
      
//       <div id="profile" className="client-only-content">
//         <DeveloperProfile />
//         <AcademicProfile />
//       </div>

//       <ContactSection />
//       <BlogSection />
//     </div>
//   )
// }

