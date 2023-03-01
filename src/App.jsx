import Loader from "./components/Loader";

export default function App() {
  return (
    <main className="relative z-10 min-h-screen bg-white overflow-hidden">
      <div className="fixed top-0 -z-10 flex items-center justify-center h-screen w-screen">
        <span>LOGO</span>
      </div>
      <Loader />
    </main>
  );
}
