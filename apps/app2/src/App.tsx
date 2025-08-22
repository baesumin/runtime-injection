import Button from "./components/Button";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div>
      <Button>확인</Button>
      <Button buttonType="cancel">취소</Button>
      <ShoppingList />
    </div>
  );
}

export default App;
