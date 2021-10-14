import { Navbar } from "./navbar";
import { BottomNav } from "./bottomNav";
const index = ({ setTheme }) => {
  return (
    <div>
      <Navbar setTheme={setTheme} />
      <BottomNav />
    </div>
  );
};

export default index;
