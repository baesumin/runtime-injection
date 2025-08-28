import { Link, useLocation } from "react-router-dom";

const items = [
  {
    key: "mailList",
    label: <Link to="/mailList">mailList</Link>,
  },
  {
    key: "shoppingList",
    label: <Link to="/shoppingList">shoppingList</Link>,
  },
];

export default function Header() {
  const location = useLocation();
  const key = location.pathname.split("/")[1];
  return (
    <div className="header bg-black min-w-full flex">
      {items.map((item) => (
        <div
          key={item.key}
          className={`px-4 py-4 flex text-center text-white hover:bg-blue-700 h-full cursor-pointer ${key === item.key ? "bg-blue-700" : ""}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
