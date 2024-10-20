export type address = {
    placeId: string;
    streetNumber: string;
    countryCode: string;
    country: string;
    freeformAddress: string;
    municipality: string;
}

export type Result = {
    id: string
    address: {
        streetNumber: string,
        countryCode: string,
        country: string,
        freeformAddress: string,
        municipality: string
    }
}