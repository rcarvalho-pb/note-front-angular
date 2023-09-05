import { Note } from './note.model';
export interface User {
  id: number,
  name: string,
  email: string,
  password: string,
  role: string,
  notes: Note[]
}