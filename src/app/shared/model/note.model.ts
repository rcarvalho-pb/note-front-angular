import { Link } from "./link.model";
import { Tag } from "./tag.model";

export interface Note {
  id: number,
  title: string,
  description: string,
  userId: number,
  tags: Partial<Tag>[],
  links: Partial<Link>[]
}