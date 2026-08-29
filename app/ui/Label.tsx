type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export default function Label({className='' , ...props}: LabelProps) {
    return (
        <label className={`mb-4 block text-[22px] font-medium ${className}`} {...props}/>
    )
}  