type SectionHeaderProps = {
    title: string;
    description: string;
}

const SectionHeader = ({title, description}: SectionHeaderProps) => {
  return (
    <div className='max-w-xl mx-auto'>
        <h2 className="text-5xl md:text-6xl font-bold text-center tracking-tighter">{title}</h2>
        <p className="text-xl text-white/70 text-center mt-5">{description}</p>
    </div>
  )
}

export default SectionHeader