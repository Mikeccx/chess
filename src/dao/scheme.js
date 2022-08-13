import { schema } from "normalizr"
export const WIKI_LIST = [new schema.Entity('space', {}, {
    idAttribute: 'uuid'
})]