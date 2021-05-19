interface HeaderTextProps {
  text: string
}
const HeaderText = (props: HeaderTextProps) => (
  <div className="lg:w-3/5 sm:w-4/5">
    <p className="text-6xl text-left font-header">{props.text}</p>
  </div>
)

export default HeaderText
