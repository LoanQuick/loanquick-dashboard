"use client";

import AnimationData from "@/assets/registerLottie.json";
import DropDown from "@/components/common/DropDown";
import TextInput from "@/components/common/TextInput";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [maxLoanAmount, setMaxLoanAmount] = useState("");
    const [rateOfInterest, setRateOfInterest] = useState(12);
    const [maxTenure, setMaxTenure] = useState("");
    const [processingFee, setProcessingFee] = useState("");

    const handleSave = async () => {
        // if (name == "") {
        //     toast.error("Name is required");
        //     return;
        // }
        // if (email == "") {
        //     toast.error("Email is required");
        //     return;
        // }
        // if (maxLoanAmount == "") {
        //     toast.error("Max Loan Amount is required");
        //     return;
        // }
        // if (maxTenure == "") {
        //     toast.error("Max Tenure is required");
        //     return;
        // }
        // if (processingFee == "") {
        //     toast.error("Processing Fee is required");
        //     return;
        // }

        let reqData = {
            name: name,
            email: email,
            max_loan_amount: parseInt(maxLoanAmount),
            min_rate: rateOfInterest,
            tenure_in_months: parseInt(maxTenure) || 3,
            processing_fee: parseInt(processingFee),
        };

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loan-vendor/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqData),
        });

        toast.success("Loan Vendor Registered Successfully");
    };

    return (
        <main className="bg-[#F9FAFC] min-h-screen w-full p-[80px]">
            <div className="flex flex-row w-full items-center justify-center gap-x-5 bg-white rounded-2xl p-[30px]">
                <div className="w-1/2">
                    <Lottie
                        animationData={AnimationData}
                        loop={true}
                        className="h-[60vh]"
                    />
                </div>
                <div className="w-1/2">
                    <p className="text-[28px] text-black font-sans font-[600]">
                        Register
                    </p>
                    <div className="flex flex-col gap-y-3 mt-5">
                        <TextInput
                            label="Name"
                            value={name}
                            onChange={setName}
                            type="text"
                            required
                        />
                        <TextInput
                            label="Email"
                            value={email}
                            onChange={setEmail}
                            type="email"
                            required
                        />
                        <TextInput
                            label="Max Loan Amount"
                            value={maxLoanAmount}
                            onChange={setMaxLoanAmount}
                            type="number"
                            required
                        />
                        <div className="w-full flex flex-col gap-y-1">
                            <label className="text-sm">Rate of Interest</label>
                            <Slider
                                defaultValue={[rateOfInterest]}
                                max={100}
                                step={1}
                                value={[rateOfInterest]}
                                onValueChange={([rateOfInterest]) =>
                                    setRateOfInterest(rateOfInterest)
                                }
                            />
                        </div>
                        <DropDown
                            label="Max Tenure"
                            data={[
                                "3",
                                "6",
                                "9",
                                "12",
                                "15",
                                "18",
                                "21",
                                "24",
                                "27",
                                "30",
                                "33",
                                "36",
                            ]}
                            value={maxTenure}
                            onChange={setMaxTenure}
                            required
                        />
                        <TextInput
                            label="Processing Fee"
                            value={processingFee}
                            onChange={setProcessingFee}
                            type="number"
                            required
                        />
                        <Button
                            onClick={handleSave}
                            className="bg-[#FF8F00] text-white mt-5"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
