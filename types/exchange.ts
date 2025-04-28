export enum ExchangeType {
  EMAIL = 'EMAIL',
  CALL = 'CALL',
  MEETING = 'MEETING',
  MESSAGE = 'MESSAGE'
}
export type Exchange = {
    id: string;
    type: 'email' | 'call' | 'meeting' | 'message';
    date: string;
    content: string;
  };
  