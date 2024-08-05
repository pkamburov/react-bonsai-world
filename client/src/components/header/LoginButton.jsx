import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

import {
    Button,
    Dialog,
    CardHeader,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input
} from "@material-tailwind/react";

const initialValues = { email: '', password: '' };

export function LoginButton() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState([]);

    const login = useLogin();
    const navigate = useNavigate();

    const handleOpen = () => setOpen((cur) => !cur);

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
    );

    return (
        <>
            <Button
                onClick={handleOpen}
                className="font-body px-4 py-2 text-[0.92em] font-semibold border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-100 hover:shadow-none rounded-lg uppercase shadow-none"
            >
                Sign In
            </Button>
            <Dialog
                size="sm"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mx-auto w-full max-w-[34rem]">
                    <img
                        alt="Your Company"
                        src="../src/assets/bonsai-world-square-logo.png"
                        className="mx-auto h-[60px] w-auto mt-8"
                    />
                    <CardBody className="flex flex-col gap-4 p-6">
                        <Typography variant="h4" color="blue-gray" className="font-hero m-auto uppercase">
                            Sign In
                        </Typography>
                        <Typography
                            className="mb-3 font-normal font-body m-auto"
                            variant="paragraph"
                            color="gray"
                        >
                            Enter your email and password to Sign In.
                        </Typography>
                        <form id='login' method="POST" className="flex flex-col space-y-4 mx-8" onSubmit={submitHandler} >
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
                            <div>
                                {error ? <p className='text-red-500'>{error}</p> : <p>asd</p>}
                            </div>
                            <button variant="gradient" onClick={submitHandler} className="align-middle select-none font-body text-[14px] text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none font-semibold disabled:pointer-events-none py-2 px-6 rounded-lg bg-gradient-to-tr from-green-500 to-green-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full">
                                Sign In
                            </button>
                        </form>

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as={Link}
                                to="/register"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold text-green-500"
                                onClick={handleOpen}
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}