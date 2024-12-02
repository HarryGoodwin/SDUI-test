import { v4 as uuidv4 } from "uuid";

// Base Interface for all Views
interface BaseView {
  node: string;
  element: { id: string };
}

// Specific View Interfaces
interface TextLabel extends BaseView {
  node: "TextLabel";
  element: {
    id: string;
    body: string;
    colour: string;
    font: string;
  };
}

interface Button extends BaseView {
  node: "Button";
  element: {
    id: string;
    label: string;
    colour: string;
    onTapHandler?: string;
  };
}

interface Navigation extends BaseView {
  node: "Navigation";
  element: {
    id: string;
    largeTitleEnabled: boolean;
    title: string;
    children: View[];
  };
}

interface Scroll extends BaseView {
  node: "Scroll";
  element: {
    id: string;
    scrollDirection: "horizontal" | "vertical";
    children: View[];
  };
}

// Union Type for all Views
type View = TextLabel | Button | Navigation | Scroll;

// DSL Functions
export const TextLabel = (body: string, colour: string, font: string): TextLabel => ({
  node: "TextLabel",
  element: {
    id: uuidv4(),
    body,
    colour,
    font,
  },
});

export const Button = (label: string, colour: string, onTapHandler?: string): Button => ({
  node: "Button",
  element: {
    id: uuidv4(),
    label,
    colour,
    onTapHandler,
  },
});

export const Navigation = (
  largeTitleEnabled: boolean,
  title: string,
  children: View[] = []
): Navigation => ({
  node: "Navigation",
  element: {
    id: uuidv4(),
    largeTitleEnabled,
    title,
    children,
  },
});

export const Scroll = (
  scrollDirection: "horizontal" | "vertical",
  children: View[] = []
): Scroll => ({
  node: "Scroll",
  element: {
    id: uuidv4(),
    scrollDirection,
    children,
  },
});

// Serialize to JSON
export const toJSON = (view: View): string => JSON.stringify(view, null, 2);
