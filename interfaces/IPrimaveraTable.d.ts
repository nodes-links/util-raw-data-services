import { IPrimaveraColumn } from './IPrimaveraColumn';
export interface IPrimaveraTable {
    key: string;
    label: string;
    columns: Array<IPrimaveraColumn>;
}
