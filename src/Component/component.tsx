interface imageItem {
  id: number;
  type: "imageItem";
  title: string;
  imageUrl: string;
}

interface quoteItem {
  id: number;
  type: "quoteItem";
  quote: string;
}
export type Item = imageItem | quoteItem;
interface ComponentProps {
  items: Item[];
}
export default function Component({ items }: ComponentProps) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.id}</div>
          {item.type === "imageItem" && (
            <img
              src={item.imageUrl}
              style={{ maxWidth: "400px" }}
              alt={item.title}
              title={item.title}
            />
          )}
          {item.type === "quoteItem" && <div>{item.quote}</div>}
        </div>
      ))}
    </div>
  );
}
