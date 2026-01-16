interface InfoRowProps{
    label: string;
    value: string | number;
    colorClass?: string; //highlight
    children?: React.ReactNode //icon
}
export function InfoBar({label, value, colorClass="text-gray-900",children}: InfoRowProps){
    return(
        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:brder-gray-800 last:border-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {label}
            </span>

            <div className="flex items-center gap-2">
                {children}
                <span className={`text-sm font-bold ${colorClass} dark:text-white`}>
                    {value}
                </span>
            </div>
        </div>

    );
}