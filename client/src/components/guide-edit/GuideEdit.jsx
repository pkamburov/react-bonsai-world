import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { bonsaiApi } from "../../api/bonsai-api";
import { useForm } from "../../hooks/useForm";

import HeroSection from "../hero-section/HeroSection";
import { useGetOneGuide } from "../../hooks/useGuides";

export default function GuideEdit() {
    const { guideId } = useParams();
    const [guide] = useGetOneGuide(guideId);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const currentPage = {
        title: guide.name,
        subtitle: guide.nameBinominal,
        backgroundImg: guide.backgroundURL,
    }

    console.log(guide.category);
    
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(guide, async (values) => {
        await bonsaiApi.updateGuide(guideId, values);
        navigate(`/species/${guideId}`);
    })
    
    console.log(values.category);

    return (
        <>
            <HeroSection page={currentPage} />
            <section id='guide-create' className="auth flex max-w-6xl m-auto min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-18">
                <div className="sm:w-full sm:max-w-[80rem]">
                    <div className="text-[1.8em] text-dark-gray font-semibold pb-2 font-body mt-[-20px]">Edit your guide</div>
                    <form id='create-guide' method="POST" className="space-y-6" onSubmit={submitHandler}>
                        {error
                                ? <p className="text-red-500 flex my-auto">{error}</p>
                                : <p></p>}
                        <div className="flex items-center gap-4">
                            <div className="w-[20rem]">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tree name*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={values.name}
                                        onChange={changeHandler}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="w-[20rem]">
                                <label htmlFor="nameBinominal" className="block text-sm font-medium leading-6 text-gray-900">
                                    Binominal name*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nameBinominal"
                                        name="nameBinominal"
                                        type="text"
                                        value={values.nameBinominal}
                                        onChange={changeHandler}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[20rem]">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="backgroundURL" className="block text-sm font-medium leading-6 text-gray-900">
                                        Background image URL*
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="backgroundURL"
                                        name="backgroundURL"
                                        type="text"
                                        value={values.backgroundURL}
                                        onChange={changeHandler}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="w-[20rem]">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                        Image URL*
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        value={values.imageUrl}
                                        onChange={changeHandler}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="category" className="block">Category*</label>
                                    <select 
                                        id="category" 
                                        onChange={changeHandler} 
                                        defaultValue={values.category}
                                        name="category" 
                                        required>
                                        <option value="" disabled>Select a category</option>
                                        <option value="Broadleaf evergreen">Broadleaf evergreen</option>
                                        <option value="Pines and conifiers">Pines and conifiers</option>
                                        <option value="Deciduous">Deciduous</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-[40rem]">
                                <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description*</label>
                                <textarea
                                    id="shortDescription"
                                    name="shortDescription"
                                    rows="4"
                                    value={values.shortDescription}
                                    onChange={changeHandler}
                                    required
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write a short description here...">
                                </textarea>
                            </div>
                            <div className="w-[40rem]">
                                <label htmlFor="placement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Placement</label>
                                <textarea
                                    id="placement"
                                    name="placement"
                                    value={values.placement}
                                    onChange={changeHandler}
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Optimal placement...">
                                </textarea>
                            </div>

                        </div>

                        <div className="flex gap-4">
                            <div className="w-[40rem]">
                                <label htmlFor="watering" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Watering</label>
                                <textarea
                                    id="watering"
                                    name="watering"
                                    value={values.watering}
                                    onChange={changeHandler}
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Proper watering...">
                                </textarea>
                            </div>

                            <div className="w-[40rem]">
                                <label htmlFor="pestsAndDeseases" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pests and deseases</label>
                                <textarea
                                    id="pestsAndDeseases"
                                    name="pestsAndDeseases"
                                    value={values.pestsAndDeseases}
                                    onChange={changeHandler}
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Common pests and deseases...">
                                </textarea>
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
