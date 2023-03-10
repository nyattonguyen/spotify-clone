interface Props {
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
    }>
    label: string
}

const IconButton = ({icon: Icon, label}: Props) => {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
    </button>
  )
}

export default IconButton