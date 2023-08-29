
function RegistroLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600">
      { children }
    </div>
  );
}

export default RegistroLayout;