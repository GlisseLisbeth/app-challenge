export interface IOption {
  value: string;
  name: string;
}

export interface ISelect {
  name: string;
  className?: string;
  id?: string;
  options: IOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
