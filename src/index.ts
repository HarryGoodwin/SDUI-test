import express, { Request, Response } from "express";
import { Button, Navigation, Scroll, TextLabel, toJSON } from "./dsl/view-dsl";


const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/view", (req, res) => {
  const tree = Navigation(
    true,
    "Main Page",
    [
      TextLabel("Welcome to the app!", "black", "Arial"),
      Button("Click Me", "blue", () => console.log("Button clicked")),
      Scroll("vertical", [
        TextLabel("Scroll Item 1", "red", "Helvetica"),
        Button("Scroll Button", "green",  () => {}),
      ]),
    ]
  );
  
  res.json(JSON.parse(toJSON(tree)));
});