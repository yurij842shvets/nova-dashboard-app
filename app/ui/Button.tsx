type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 rounded-3xl ${className}`}
      {...props}
    />
  );
}
