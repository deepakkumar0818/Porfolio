import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Map from '@/components/Map'
import SocialLinks from '@/components/SocialLinks'

export const metadata = {
  title: 'Contact - Deepak Kumar | Get In Touch',
  description: 'Ready to start your project? Get in touch with me for a consultation. I\'m here to help bring your ideas to life.',
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ContactForm />
        <div className="space-y-12">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
      <Map />
    </>
  )
}
