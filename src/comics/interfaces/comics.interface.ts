export interface ComicsInterface{
    id:                 number;
    digitalId:          number;
    title:              string;
    issueNumber:        number;
    variantDescription: string;
    description:        string;
    modified:           string;
    isbn:               string;
    upc:                string;
    diamondCode:        string;
    ean:                string;
    issn:               string;
    format:             string;
    pageCount:          number;
    textObjects:        TextObjects[];
    resourceURI:        string;
    urls:               any[];
    series:             Series;
    variants:           Series[];
    collections:        Collections[];
    collectedIssues:    any[];
    dates:              DateElement[];
    prices:             Price[];
    thumbnail:          Thumbnail;
    images:             Images[];
    creators:           Characters;
    characters:         Characters;
    stories:            Characters;
    events:             Characters;
}

export interface Series{
    resourceURI: string;
    name: string;
}

export interface DateElement{
    type: string;
    date: string;
}

export interface Price{
    type: string;
    price: number
}

export interface Thumbnail{
    path: string;
    extension: string;
}

export interface Images{
    path:string;
    extension:string;
}

export interface Characters{
    available:number;
    collectionURI: string;
    items: any
    returned: number
}

export interface TextObjects{
    type: string;
    language : string;
    text: string;
}

export interface Collections{
    resourceURI:string;
    name:string;
}
