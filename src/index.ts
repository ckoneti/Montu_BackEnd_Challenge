import {getPlaceAutocomplete} from './maps-api'
import 'dotenv/config'
import {address} from "../types";

// function that takes partial address as input and returns specific address details
export async function getAutoCompleteDetails(address: string): Promise<address[]> {
    const apiKey: string = process.env.TOMTOM_API_KEY || '';
    if (!address) {
        throw new Error('Address is required')
    }
    // func call to get the address details
    return await getPlaceAutocomplete(apiKey, address)
}

getAutoCompleteDetails('Main Street').then(address => {
    console.log(address)
})






