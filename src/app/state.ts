export interface State {
  teams: any[] | undefined;
  selectedTeam: any | undefined;
  mode: 'light' | 'dark';
  filterText?:string;
  filterCategory?:number;
}
