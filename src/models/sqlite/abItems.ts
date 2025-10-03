import { IABItemMeta, IABItemCommit } from "../mongodb";
import { SQLiteModel, _CheckIfSatisfiesBindings, Blob } from "./Model";

export interface IABItemModel {
    id: Blob;
    idCommit: Blob;
    timestampSnapshot: Date;
    categories: string[];
    metaSnapshot: IABItemMeta;
    commitSnapshot: IABItemCommit;
}

const bindings = {
    id: [Buffer, true],
    idCommit: [Buffer, true],
    timestampSnapshot: [Date, true],
    categories: [Object, true],
    metaSnapshot: [Object, true],
    commitSnapshot: [Object, true]
}  satisfies _CheckIfSatisfiesBindings;


class ABItemModel extends SQLiteModel<IABItemModel> {}

export const abItemModel = new ABItemModel("abItems", bindings);
