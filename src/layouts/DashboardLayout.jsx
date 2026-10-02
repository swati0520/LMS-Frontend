import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full overflow-x-clip bg-[#070a09] text-white">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Header />
        <main className="mx-auto w-full max-w-[1600px] min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-9 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
