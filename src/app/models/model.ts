export abstract class GenericModel implements Model {
    id: string;
    name: string;
}

interface Model {
    id: string;
    name: string;
}
