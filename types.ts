export interface Address {
    placeId: string;
    streetNumber: string;
    countryCode: string;
    country: string;
    freeformAddress: string;
    municipality: string;
}

export interface Result {
    id: string
    address: {
        streetNumber: string,
        countryCode: string,
        country: string,
        freeformAddress: string,
        municipality: string
    }
}
