export interface Pokemon{
    id : number;
    name : string;
    height : number;
    weight : number;
    sprites : {
        front_default : string | null;
    };
    type: Array<{
        slot : number;
        type : {
            name : string;
        };
    }>;
    abilities : Array<{
        ability : {
            name : string;
        }
    }>
}