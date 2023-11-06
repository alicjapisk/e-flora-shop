"use client"
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";


export default function LoginForm() {
    const { errorText, setErrorText, handleLogin } = useLogin();
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
    const openForgotPasswordModal = () => setIsForgotPasswordModalOpen(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    interface FormData {
        email: string;
        password: string;
    }

    const onSubmit = (data: FormData) => {
        handleLogin(data.email, data.password);
    };
    const clearErrorText = () => {
        setErrorText('');
    };

    return (
        <div className="mt-20 px-20 2xl:items-center md:items-end">
            <div className="md:w-2/5">
                <p className="text-2xl text-left font-normal pb-4 pl-2">Zaloguj się do swojego konta</p>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{ required: "Pole jest wymagane" }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input
                                placeholder="Email"
                                autoCapitalize={'none'}
                                onFocus={clearErrorText}
                                onBlur={onBlur}
                                value={value}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <p className="text-red-500 pl-3 text-base font-semibold">{errors.email?.message}</p>}
                </div>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{ required: "Pole jest wymagane" }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input
                                placeholder="Hasło"
                                autoCapitalize={'none'}
                                onFocus={clearErrorText}
                                onBlur={onBlur}
                                type='password'
                                value={value}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <p className="text-red-500 pl-3 text-base font-semibold">{errors.password?.message}</p>}
                </div>
                {errorText !== '' && (
                    <div>
                        <p className="text-red-500 pl-3 text-base font-semibold">{errorText}</p>
                    </div>
                )}
                <div className="items-end">
                    <button className="p-1" onClick={openForgotPasswordModal}>
                        <p className="text-lg underline ">Nie pamiętasz hasła?</p>
                    </button>
                </div>

                <div className="py-2 items-center px-20">
                    <button onClick={handleSubmit(onSubmit)} className="bg-[#313033] w-full py-3 mt-5 rounded-xl">
                        <p className="text-white text-center text-lg">Zaloguj się</p>
                    </button>
                </div>
            </div>

        </div>
    );
}
