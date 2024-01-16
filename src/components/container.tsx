export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-full items-center flex-col py-10 relative'>{children}</main>
  );
}
