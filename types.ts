
export interface Memory {
  id: string;
  imageUrl: string;
  title: string;
  note: string;
}

export interface StarPoint {
  id: number;
  x: number;
  y: number;
  delay: number;
  note: string;
  image?: string;
}
