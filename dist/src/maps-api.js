"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaceAutocomplete = void 0;
const axios_1 = __importDefault(require("axios"));
// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
// The func calls the fuzzy search api and returns only AUS specific address details
// which is of address Type
function getPlaceAutocomplete(key, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const autocomplete = yield axios_1.default.get(`https://api.tomtom.com/search/2/search/${address}.json?countrySet=AUS`, {
                params: {
                    key,
                    limit: 100,
                }
            });
            if (autocomplete.data.results.length > 0) {
                return autocomplete.data.results.map((result) => ({
                    placeId: result.id,
                    streetNumber: result.address.streetNumber,
                    countryCode: result.address.countryCode,
                    country: result.address.country,
                    freeformAddress: result.address.freeformAddress,
                    municipality: result.address.municipality,
                }));
            }
        }
        catch (err) {
            throw new Error(`API request failed, ${err}`);
        }
        return [];
    });
}
exports.getPlaceAutocomplete = getPlaceAutocomplete;
