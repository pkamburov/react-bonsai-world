import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { bonsaiApi } from "../../api/bonsai-api";
import HeroSection from "../hero-section/HeroSection";

import {
    Card,
    CardBody,
    Typography,
    Input
} from "@material-tailwind/react";

const initialValues = { email: '', password: '', rePassword: '', username: '' };

export default function Register() {
    const [error, setError] = useState('');
    const [page, setPage] = useState([]);

    const register = useRegister();
    const navigate = useNavigate();

    useEffect(() => {
        bonsaiApi.getPage('register')
            .then(result => setPage(result));
    }, []);

    const registerHandler = async ({ email, password, rePassword, username }) => {
        if (password !== rePassword) {
            return setError('Passwords do not match!');
        }

        try {
            await register(email, password, username);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler);

    return (
        <>
            <HeroSection page={page} />
            <section id="registerSection" className="flex flex-row columns-2 mb-[80px] mt-[40px] mx-auto w-7xl">
                <Card className="shadow-none relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 ml-[7em] mt-[10px] max-w-[34rem] w-[40%]">
                    <CardBody className="flex flex-col gap-4 p-6">
                        <form id='login' method="POST" className="flex flex-col space-y-4 mx-8" onSubmit={submitHandler} >
                            <Typography className="-mb-2 font-body text-dark-gray" variant="h6">
                                Username:
                            </Typography>
                            <Input
                                id="username"
                                name="username"
                                type="username"
                                label="Username"
                                size="lg"
                                className="border-1 focus:border-light-gray"
                                value={values.username}
                                onChange={changeHandler}
                                autoComplete="username"
                                required />
                            <Typography className="-mb-2 font-body text-dark-gray" variant="h6">
                                Your email:
                            </Typography>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                size="lg"
                                value={values.email}
                                onChange={changeHandler}
                                autoComplete="email"
                                required />
                            <Typography className="-mb-2 focus:outline-none font-body text-light-gray" variant="h6">
                                Your password:
                            </Typography>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                size="lg"
                                value={values.password}
                                onChange={changeHandler}
                                autoComplete="password"
                                required />
                            <Typography className="-mb-2 focus:outline-none font-body text-light-gray" variant="h6">
                                Repeat password:
                            </Typography>
                            <Input
                                id="rePassword"
                                name="rePassword"
                                type="password"
                                label="Password"
                                size="lg"
                                value={values.rePassword}
                                onChange={changeHandler}
                                autoComplete="password"
                                required />

                            <div>
                                {error ? <p className='text-red-500'>{error}</p> : <p></p>}
                            </div>
                            <button variant="gradient" onClick={submitHandler} className="align-middle select-none font-body text-[14px] text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none font-semibold disabled:pointer-events-none py-2 px-6 rounded-lg bg-gradient-to-tr from-green-500 to-green-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full">
                                Register
                            </button>
                        </form>
                    </CardBody>
                </Card>
                <Card className="shadow-none relative flex flex-col bg-clip-border rounded-xl text-gray-700 w-full max-w-[34rem] px-[6em] py-[4em]">
                    <CardBody className="flex flex-col gap-4 p-6 bg-gray-100 py-[4em] px-[4em] text-center rounded-md">
                        <div className="m-auto">
                            <h2 className="font-hero font-medium text-[1.5em] text-dark-gray pb-4 mb-4 border-solid border-b-2 border-blue-gray-100">Join our Bonsai community</h2>
                            <p className="my-4 font-body text-[1.15em]">Learn care and styling techniques</p>
                            <p className="my-4 font-body text-[1.15em]">Find the perfect guide for you</p>
                            <p className="my-4 font-body text-[1.15em]">Create your own guides</p>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}