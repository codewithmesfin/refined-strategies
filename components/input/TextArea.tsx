



interface PROPS {
    placeholder?: string;
    label?: any;
    value?: string;
    type?: string;
    error?: string;
    success?: boolean;
    isTextArea?: boolean;
    rows?: number;
    onChange?: (e: string) => void;
    onLeave?: (e: string) => void;
    onKeyDown?: any
    autoComplete?: string
    isRequired?: boolean,
    disabled?: boolean,
    min?: string,
}

export default function TextArea({
    label,
    placeholder,
    type, value,
    error,
    onChange, onLeave,
    autoComplete = "off", isRequired = false,
    disabled = false,
    min,rows=10
}: PROPS) {
    return <div>
        <label htmlFor={type} className="block text-left text-sm text-gray-700">
            {label} {isRequired && <span className="text-red-600 text-lg">*</span>}
        </label>
        <div className="mt-2">
            <textarea
                rows={rows}
                required={isRequired}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={onChange ? (e: any) => onChange(e.target.value) : undefined}
                className={`px-4 py-2 text-gray-700 border rounded-xl focus:border-blue-600 w-full 
                            focus:ring-0 focus:outline-none placeholder:text-gray-400
                            ${error ? 'border-red-600' : 'border-gray-200 bg-white'} text-sm
                        `}
                disabled={disabled}
            />
        </div>
        <div>
            <small className="text-red-600 italic">{error}</small>
        </div>
    </div>
}