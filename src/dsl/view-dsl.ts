import { v4 as uuidv4 } from 'uuid';

export const generateUUID = (): string => {
  return uuidv4();
};

type UUID = string;

export type View =
  | TextLabel
  | Button
  | Navigation
  | Scroll;

interface BaseView {
  id: UUID;
  type: string;
}

export interface TextLabel extends BaseView {
  type: "TextLabel";
  body: string;
  colour: string;
  font: string;
}

export interface Button extends BaseView {
  type: "Button";
  label: string;
  colour: string;
  onTapHandler: () => void | string;
}

export interface Navigation extends BaseView {
  type: "Navigation";
  largeTitleEnabled: boolean;
  title: string;
  children: View[];
}

export interface Scroll extends BaseView {
  type: "Scroll";
  scrollDirection: "horizontal" | "vertical";
  children: View[];
}

// DSL Functions
export const TextLabel = (body: string, colour: string, font: string): TextLabel =>
  ({ id: generateUUID(), type: "TextLabel", body, colour, font });

export const Button = (label: string, colour: string, onTapHandler: () => void): Button =>
  ({ id: generateUUID(), type: "Button", label, colour, onTapHandler });

export const Navigation = (
  largeTitleEnabled: boolean,
  title: string,
  children: View[] = []
): Navigation =>
  ({ id: generateUUID(), type: "Navigation", largeTitleEnabled, title, children });

  export const Scroll = (
  scrollDirection: "horizontal" | "vertical",
  children: View[] = []
): Scroll =>
  ({ id: generateUUID(), type: "Scroll", scrollDirection, children });

// Serialization to JSON
export const toJSON = (view: View): string => JSON.stringify(view);

