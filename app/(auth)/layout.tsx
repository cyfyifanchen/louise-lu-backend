export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center flex-center justify-center mt-32">
      {children}
    </div>
  )
}
