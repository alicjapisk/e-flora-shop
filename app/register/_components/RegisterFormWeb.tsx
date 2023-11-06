"use client"
import { PASSWORD_REGEXP } from "@/constants";
import useSignUp from "@/hooks/useSignUp";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function RegisterFormWeb() {

    const { handleSignUp } = useSignUp();
    const [isChecked, setIsChecked] = useState(false);
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            isRegulationsAccepted: false
        }
    });
    interface FormData {
        email: string;
        password: string;
    }

    const onSubmit = (data: FormData) => {
        handleSignUp(data.email, data.password);
    };


    const CustomRegister = () => {
        return (
            <p>Akceptuje
                <a href="#" className="underline"> regulamin </a>
            </p>
        )
    }

    return (
        <div className="mt-10 px-20 2xl:items-center md:web:items-end">
            <div className="md:w-2/5" >
                <p className="text-2xl text-letf font-normal pb-4 pl-2">Dołącz do nas</p>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{
                            required: "Pole jest wymagane"
                            // pattern: {
                            //     value: EMAIL_REGEXP,
                            //     message: t("register_email_error"),
                            // },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input
                                placeholder="Email"
                                autoCapitalize={'none'}
                                onBlur={onBlur}
                                value={value}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <p className="text-red-500 pl-3 p-base font-semibold">{errors.email?.message}</p>}
                </div>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{
                            required: "Pole jest wymagane",
                            pattern: {
                                value: PASSWORD_REGEXP,
                                message: "Nieprawidłowe hasło",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input
                                placeholder="Hasło"
                                autoCapitalize={'none'}
                                onBlur={onBlur}
                                value={value}
                                type='password'
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <p className="text-red-500 pl-3 p-base font-semibold">{errors.password?.message}</p>}
                </div>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{
                            required: "Pole jest wymagane",
                            validate: (value) => value === watch("password") || "Hasła się nie zgadzają",
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input
                                value={value}
                                placeholder="Powtórz hasło"
                                autoCapitalize={'none'}
                                type='password'
                                onChange={(e) => {
                                    onChange(e.target.value);
                                }}
                            />
                        )}
                        name="confirmPassword"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 pl-3 p-base font-semibold">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                <div className='p-2 flex flex-row justify-between'>
                    <div>
                        <div className='flex flex-row gap-1'>
                            <p className='text-[#9D9D9D] text-xs'>Minimum 8 znaków</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='text-[#9D9D9D] text-xs'>Jedna wielka litera</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row gap-1'>
                            <p className='text-[#9D9D9D] text-xs'>Jeden numer</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='text-[#9D9D9D] text-xs'>Jeden znak specjalny</p>
                        </div>
                    </div>

                </div>
                <div className="py-2">
                    <Controller
                        control={control}
                        rules={{
                            required: "Musisz zaakceptować regulamin",
                        }}
                        render={({ field }) => (
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onClick={() => {
                                    field.onChange(!isChecked);
                                    setIsChecked(!isChecked);
                                }}
                            />
                        )}
                        name="isRegulationsAccepted"
                    />
                    {errors.isRegulationsAccepted && (
                        <p className="text-red-500 pl-3 text-base font-semibold">
                            {errors.isRegulationsAccepted.message}
                        </p>
                    )}
                </div>

                <div className="items-center px-20">
                    <button onClick={handleSubmit(onSubmit)}
                        className="bg-[#313033] w-full py-3 mt-5 rounded-xl">
                        <p className="text-white text-center text-lg">Dołącz</p>
                    </button>
                </div>
            </div>

        </div>
    )
}