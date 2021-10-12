import ENSAddress from "@ensdomains/react-ens-address";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function App() {
  const { web3, enableWeb3, isWeb3Enabled } = useMoralis();

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
  }, [isWeb3Enabled, enableWeb3]);
  return (
    <div className="App">
      {isWeb3Enabled && (
        <ENSAddress provider={web3.givenProvider || web3.currentProvider} />
      )}
      <p>Orbiter.</p>
    </div>
  );
}

export default App;
