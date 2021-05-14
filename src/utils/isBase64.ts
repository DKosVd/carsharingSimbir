import { imageUrl } from "./axios"

export const isBaseImg = (url: string): string => {
    if (url.includes('base64')) {
        return url
    }
    return imageUrl + url
}