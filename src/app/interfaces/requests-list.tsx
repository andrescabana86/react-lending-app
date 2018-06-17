export interface IRequestsListActions {
  record: {
    key: string;
    nombre: string;
    apellido: string;
    documento: string;
  };
  handleDelete: Function;
}
