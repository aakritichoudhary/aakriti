function SectionHeader({ title }) {
  return <div className="flex">
    <div className="text-3xl font-bold text-light-slate mb-4">/ {title}</div>
    <div className="flex-1 border-t border-lightest-navy self-center ml-4 max-w-80"></div>
    </div>
}
export default SectionHeader
