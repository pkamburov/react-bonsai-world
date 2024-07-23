import { useEffect, useState } from "react";

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import * as bonsaiAPI from '../api/bonsai-api';
import HeroSection from "./HeroSection";

export default function CreateGuide() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('create-guide')
            .then(result => setPage(result));
    }, []);
    return (
        <>
            <HeroSection page={page} />
        </>
    )
}
