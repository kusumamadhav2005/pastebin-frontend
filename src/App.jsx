import CreatePaste from "./pages/CreatePaste";
import ViewPaste from "./pages/ViewPaste";

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/p/")) {
    return <ViewPaste />;
  }

  return <CreatePaste />;
}
