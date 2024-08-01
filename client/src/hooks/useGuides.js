import { useEffect, useState } from "react";

import * as bonsaiApi from '../api/bonsai-api'

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
    const [guide, setGuide] = useState({
        name: '',
        nameBinominal: '',
        backgroundURL: '',
        imageUrl: '',
        category: '',
        shortDescription: '',
        placement: '',
        watering: '',
        pestsAndDeseases: ''
    });

    useEffect(() => {
        (async () => {
            const result = await bonsaiApi.getOne(guideId);

            setGuide(result);
        })();
    }, [guideId]);

    return [guide, setGuide];
}

export function useCreateGuide() {
    const guideCreateHandler = (guideData) => bonsaiApi.createGuide(guideData);

    return guideCreateHandler;
}