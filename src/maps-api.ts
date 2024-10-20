import axios, {AxiosResponse} from 'axios'
import {Address, Result} from "../types";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
// The func calls the fuzzy search api and returns only AUS specific address details
// which is of address Type
export async function getPlaceAutocomplete(key: string, address: string): Promise<Address[]> {
    try {
        const autocomplete: AxiosResponse = await axios.get(`https://api.tomtom.com/search/2/search/${address}.json?countrySet=AUS`, {
            params: {
                key,
                limit: 100,
            }
        });
        if (autocomplete.data.results.length > 0) {
            return autocomplete.data.results.map((result: Result) => ({
                placeId: result.id,
                streetNumber: result.address.streetNumber,
                countryCode: result.address.countryCode,
                country: result.address.country,
                freeformAddress: result.address.freeformAddress,
                municipality: result.address.municipality,
            }))
        }

    } catch (err: unknown) {
        throw new Error(`API request failed, ${err}`);
    }
    return []
}
