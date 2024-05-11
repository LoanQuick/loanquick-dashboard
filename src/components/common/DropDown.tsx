import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type TextInputProps = {
    label: string;
    data: string[];
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
};

const DropDown = (props: TextInputProps) => {
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
            <Select
                required={props.required || false}
                disabled={props.disabled || false}
            >
                <SelectTrigger
                    className={cn(
                        "w-full focus-visible:ring-0",
                        props.inputClassName
                    )}
                >
                    <SelectValue
                        placeholder={props.placeholder || "Select a value"}
                    />
                </SelectTrigger>
                <SelectContent>
                    {props.data.map((item) => (
                        <SelectItem
                            value={item}
                            key={"dropdown-item-" + item + "-key"}
                            onClick={() => props.onChange(item)}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default DropDown;
