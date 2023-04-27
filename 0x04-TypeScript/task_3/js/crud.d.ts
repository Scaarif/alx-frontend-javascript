import { RowElement, RowID } from "./interfaces";

// crud's functions descriptions (this' an ambient file - make it possible to use external libraries(js) in ts)
export declare function insertRow(row: RowElement): RowID
export declare function deleteRow(rowId: RowID): void
export declare function updateRow(rowId: RowID, row: RowElement): RowID
