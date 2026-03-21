import { MdArrowRight } from 'react-icons/md'
function ListItem({ text }) {
  return (
    <div className="flex flex-row gap-1">
      <MdArrowRight size={20} className="text-green font-bold" />
      <div className="text-slate">{text}</div>
    </div>
  )
}
export default ListItem
