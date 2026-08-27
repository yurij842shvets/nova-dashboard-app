type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-gray-200 px-3 py-4 outline-none focus:border-gray-400 ${className}`}
      {...props}
    />
  );
}
