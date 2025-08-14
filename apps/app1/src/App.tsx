import MailList from "./components/MailList";
import ShadowDOM from "./components/ShadowDOM";

function App() {
  return (
    <div>
      <ShadowDOM>
        <MailList />
      </ShadowDOM>
    </div>
  );
}

export default App;
