import "./styles.css";
import Componet, { Item } from "./Component/component";
export default function App() {
  const items: Item[] = [
    {
      id: 1,
      type: "imageItem",
      title: "Wiki Mountain",
      imageUrl:
        "https://media.istockphoto.com/photos/watzmann-in-alps-dramatic-reflection-at-sunset-national-park-picture-id1136834574?k=20&m=1136834574&s=612x612&w=0&h=Mr2LOsCOOguErmwDGCMV61u0D_vKGa-xO-EEydwA8a4="
    },
    {
      id: 2,
      type: "quoteItem",
      quote: "This sample is very simple."
    }
  ];

  return (
    <div className="App">
      <Componet items={items} />
    </div>
  );
}
