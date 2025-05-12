export type ExcuseType = "intro" | "scapegoat" | "delay";

export interface Excuse {
  type: ExcuseType;
  text: string;
}
