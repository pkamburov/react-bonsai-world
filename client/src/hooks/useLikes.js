import { likesApi } from "../api/likes-api"

export default function useCreateLike() {
    const createHandler = (guideId) => likesApi.create(guideId);

    return createHandler;
}