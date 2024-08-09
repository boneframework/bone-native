import apiClient from '@boneframework/native-components/api/client';

const endpoint : string = '/listings';

const getListings = () => apiClient.get(endpoint);

const postListings = (listing, onUploadProgress) => {
    console.log(listing);
    const data = new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    if (listing.location) {
        data.append('location', JSON.stringify(listing.location));
    }

    listing.images.forEach((image, index) => {
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })
    });
    console.log(data)
    return apiClient.post(endpoint, data, {
        onUploadProgress: progress => onUploadProgress( progress.loaded / progress.total )
    });
}

export default {
    getListings,
    postListings,
}
