"use client";

import Lottie from "lottie-react";
import AnimationData from "@/assets/loginLottie.json";
import TextInput from "@/components/common/TextInput";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (email === "") {
            toast.error("Email is required");
            return;
        } else if (password === "") {
            toast.error("Password is required");
            return;
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/loan-vendor/login`
        );
        const data = await response.json();

        if (data.present) {
            toast.success("Login Successful");
        } else {
            router.push("/register");
        }
    };

    return (
        <main className="flex flex-row w-full items-center justify-center min-h-screen">
            <div className="w-1/2">
                <Lottie
                    animationData={AnimationData}
                    loop={true}
                    className="h-[60vh]"
                />
            </div>
            <div className="w-1/2 px-[100px]">
                <p className="text-[28px] text-black font-sans font-[600]">
                    Login
                </p>
                <div className="flex flex-col gap-y-3 mt-5">
                    <TextInput
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        type="email"
                        required
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChange={setPassword}
                        type="password"
                        required
                    />
                    <Button
                        variant="link"
                        onClick={handleLogin}
                        className="hover:no-underline bg-[#6765E8] p-2 rounded-md text-white text-center w-full mt-2"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </main>
    );
}
