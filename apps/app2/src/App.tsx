import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import MailList from "./components/MailList";
import Header from "./components/Header";

interface AppProps {
  basename: string;
}

function App({ basename }: AppProps) {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/mailList" Component={MailList}></Route>
        <Route path="/shoppingList" Component={ShoppingList}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
