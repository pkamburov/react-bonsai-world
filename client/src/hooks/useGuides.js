import { useEffect, useState } from "react";

import bonsaiApi from '../api/bonsai-api'

export function useGetAllGuides() {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await bonsaiApi.getAll();

            setGuides(result);
        })();
    }, []);


    return [guides, setGuides];
}

export function useGetOneGuide(guideId) {
    const [guide, setGuide] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await bonsaiApi.getOne(guideId);

            setGuide(result);
        })();
    }, [guideId]);

    return [
        guide,
        setGuide
    ]
}

export function useCreateGuide() {
    const guideCreateHandler = (guideData) => bonsaiApi.createGuide(guideData);

    return guideCreateHandler
}