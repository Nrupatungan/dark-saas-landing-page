import EcosystemIcon from '@/assets/icons/ecosystem.svg'
import Feature from '@/components/Feature';
import SectionHeader from '@/components/SectionHeader';

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="py-[72px] md:py-24 bg-black text-white">
      <div className="container">
        <SectionHeader title='Everything you need' description='Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.' />
        <div className="mt-16 flex flex-col md:flex-row gap-4 justify-center items-center">
          {features.map((feature, idx) => (
            <Feature key={idx} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

