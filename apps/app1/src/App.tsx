import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailList from "./components/MailList";
import ShoppingList from "./components/ShoppingList";
import Header from "./components/Header";
import Web from "./components/Web";

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
        <Route path="/web" Component={Web}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
