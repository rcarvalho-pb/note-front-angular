import { Link } from "./link.model";
import { Tag } from "./tag.model";

export interface Note {
  id: number,
  title: string,
  description: string,
  userId: number,
  tags: Tag[],
  links: Link[]
}