export interface Ticket {
  id: number;
  start: string;
  end: string;
  price: number;
  startDay: string;
  startTime: string;
  houseCar: {
    id: number;
    name: string;
  };
  count: number;
}
