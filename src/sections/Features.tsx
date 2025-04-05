import EcosystemIcon from '@/assets/icons/ecosystem.svg'
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
            <div key={idx} className="py-10 px-5 max-w-[343px] text-center rounded-xl border border-white/30">
              <div className='bg-white size-14 inline-flex items-center justify-center rounded-lg'>
                <EcosystemIcon className='text-black'/>
              </div>
              <h3 className='mt-6 font-bold'>{feature.title}</h3>
              <p className='mt-2 text-white/70'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

