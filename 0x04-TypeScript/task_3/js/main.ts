/// <reference path = "crud.d.ts" />
import { RowID, RowElement } from "./interfaces";
import * as CRUD from './crud'


const row: RowElement = {
firstName: 'Guillaume',
lastName: 'Salva',
}

const newRowID:RowID = CRUD.insertRow(row)
const UpdatedRow:RowElement = { age: 23, ...row}

CRUD.updateRow(newRowID, UpdatedRow) // update Row
CRUD.deleteRow(newRowID) // delete Row