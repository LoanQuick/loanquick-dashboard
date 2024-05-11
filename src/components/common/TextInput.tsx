import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type TextInputProps = {
    label: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
};

const TextInput = (props: TextInputProps) => {
    return (
        <div
            className={cn(
                "w-full flex flex-col gap-y-1",
                props.containerClassName
            )}
        >
            <label className={cn("text-sm", props.labelClassName)}>
                {props.label}
            </label>
            <Input
                type={props.type || "text"}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder || "Enter text here"}
                required={props.required || false}
                disabled={props.disabled || false}
                className={cn(
                    "w-full focus-visible:ring-0",
                    props.inputClassName
                )}
            />
        </div>
    );
};

export default TextInput;
