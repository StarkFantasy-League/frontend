import { ArgentIcon } from "./components/ArgentIcon";
import { Toaster } from "react-hot-toast";
import { StarknetProvider } from "../../connections/starknet-provider";

export default function Home() {
  return (
    <div>
      <StarknetProvider>
        <Toaster position="top-right" /> {/* Positions toast messages at the top right */}
        <ArgentIcon />
      </StarknetProvider>
    </div>
  );
}
