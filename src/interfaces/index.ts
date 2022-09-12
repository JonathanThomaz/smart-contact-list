export interface IChatBot {
  name: string;
  type: string;
  created: string;
}

export interface IType {
  type: 'list' | 'block';
}
export interface IRandomColor extends IType {
  color: string;
}
